package main

import (
	"context"
	"log"

	pb "github.com/robiferentz/grpc-go/main/protobuf"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func run_client() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.NewClient("localhost:50051", opts...)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	client := pb.NewGrpcServerClient(conn)
	response, err := client.Ping(context.Background(), &pb.PingRequest{Message: "ping"})
	if err != nil {
		log.Fatalf("could not ping: %v", err)
	}
	log.Printf("ping: %s", response.Message)
}
