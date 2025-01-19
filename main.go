package main

import (
	"fmt"
	"log"
	"os"
)

func main() {

	programName := os.Args[0]
	args := os.Args[1:]
	if len(args) == 0 {
		fmt.Printf("Usage: %s [server|client]\n", programName)
		return
	}

	switch args[0] {
	case "server":
		run_presentation()
	case "client":
		run_client()
	default:
		log.Fatalf("Unknown command: %s", args[0])
	}

}
