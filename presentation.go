package main

import (
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"

	glamour "github.com/charmbracelet/glamour"

	tea "github.com/charmbracelet/bubbletea"
)

var presentation *tea.Program

type presentationModel struct {
	currentPage string
	pages       []string
}

func initModel() presentationModel {
	pages, err := getPageList()
	if err != nil || len(pages) < 1 {
		panic("failed to get page list")
	}
	return presentationModel{
		currentPage: pages[0],
		pages:       pages,
	}
}

func (m presentationModel) Init() tea.Cmd {
	return startServer
}

func startServer() tea.Msg {
	run_server()
	return nil
}

// func changePage(page string) tea.Cmd {
// 	return func() tea.Msg {
// 		return changePageMsg{page: page}
// 	}
// }

func (m presentationModel) View() string {
	content, err := os.ReadFile(fmt.Sprintf("./pages/%s.md", m.currentPage))
	if err != nil {
		panic(err)
	}
	str, err := glamour.Render(string(content), "dark")
	if err != nil {
		panic(err)
	}
	return str

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
