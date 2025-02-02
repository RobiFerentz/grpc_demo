package main

import (
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"

	glamour "github.com/charmbracelet/glamour"

	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var presentation *tea.Program
var renderer *glamour.TermRenderer
var pageMap = make(map[string]string)

type presentationModel struct {
	currentPage string
	pages       []string
	vp          viewport.Model
}

func initModel() presentationModel {
	width := 100
	height := 28
	pages, err := getPageList()
	if err != nil || len(pages) < 1 {
		panic("failed to get page list")
	}
	for _, page := range pages {
		content, err := os.ReadFile(fmt.Sprintf("./pages/%s.md", page))
		if err != nil {
			panic(err)
		}
		pageMap[page] = string(content)
	}
	vp := viewport.New(width, height)
	vp.Style = lipgloss.NewStyle().
		BorderStyle(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#F47720")).
		PaddingRight(2).PaddingLeft(2).PaddingTop(1).PaddingBottom(1)

	renderer, err = glamour.NewTermRenderer(
		glamour.WithWordWrap(width-vp.Style.GetHorizontalFrameSize()-2),
		glamour.WithEmoji(),
		glamour.WithStylesFromJSONFile("./styles/tikal_tui.json"))
	if err != nil {
		panic(err)
	}

	return presentationModel{
		currentPage: pages[0],
		pages:       pages,
		vp:          vp,
	}
}

func (m presentationModel) Init() tea.Cmd {
	return startServer
}

func startServer() tea.Msg {
	run_server()
	return nil
}

func (m presentationModel) View() string {
	content := pageMap[m.currentPage]

	str, err := renderer.Render(content)
	if err != nil {
		panic(err)
	}
	m.vp.SetContent(str)

	return m.vp.View()
}

type changePageMsg struct {
	page string
}

func (m presentationModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {

	switch msg := msg.(type) {
	case changePageMsg:
		m.currentPage = msg.page
		return m, nil
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c":
			return m, tea.Quit
		default:
			var cmd tea.Cmd
			m.vp, cmd = m.vp.Update(msg)
			return m, cmd
		}
	}

	return m, nil
}

func getPageList() ([]string, error) {
	entries, err := os.ReadDir("./pages")
	if err != nil {
		return nil, err
	}
	names := []string{}
	for _, entry := range entries {
		if !entry.IsDir() && strings.HasSuffix(entry.Name(), ".md") {
			names = append(names, strings.TrimSuffix(entry.Name(), ".md"))
			sort.Slice(names, func(i, j int) bool {
				a, err := strconv.Atoi(names[i])
				if err != nil {
					return false
				}
				b, err := strconv.Atoi(names[j])
				if err != nil {
					return false
				}
				return a < b
			})
		}
	}

	return names, nil
}

func run_presentation() {
	presentation = tea.NewProgram(initModel(), tea.WithAltScreen())
	if _, err := presentation.Run(); err != nil {
		fmt.Printf("Alas, there's been a problem: %v", err)
		return
	}
}
