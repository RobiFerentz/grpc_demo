package main

import (
	"context"
	"log"
	"net"

	pb "github.com/robiferentz/grpc-go/main/protobuf"
	"google.golang.org/grpc"
)

func run_server() {

	go func() {
		lis, err := net.Listen("tcp", ":50051")
		if err != nil {
			log.Fatalf("failed to listen: %v", err)
		}
		log.Println("Server running on port 50051")
		s := grpc.NewServer()
		pb.RegisterGrpcServerServer(s, &server{})
		if err := s.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()
	// run_presentation()
}

type server struct {
	pb.UnimplementedGrpcServerServer
}

func (s *server) Ping(ctx context.Context, req *pb.PingRequest) (*pb.PingResponse, error) {
	return &pb.PingResponse{Message: "pong"}, nil
}

func (s *server) ChangePage(ctx context.Context, req *pb.ChangePageRequest) (*pb.ChangePageResponse, error) {
	presentation.Send(changePageMsg{page: req.Page})
	return &pb.ChangePageResponse{Success: true}, nil
}

func (s *server) AllPages(ctx context.Context, req *pb.EmptyRequest) (*pb.AllPagesResponse, error) {
	pages, err := getPageList()

	return &pb.AllPagesResponse{Pages: pages}, err
}
