package main

import (
	"context"
	"log"
	"net"
	"time"

	pb "github.com/robiferentz/grpc-go/main/protobuf"
	"google.golang.org/grpc"
)

func run_server() {

	go func() {
		lis, err := net.Listen("tcp", ":50051")
		if err != nil {
			log.Fatalf("failed to listen: %v", err)
		}
		defer lis.Close()
		log.Println("Server running on port 50051")
		s := grpc.NewServer()

		pb.RegisterGrpcServerServer(s, &server{
			startTime: time.Now(),
		})
		if err := s.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()
}

type server struct {
	pb.UnimplementedGrpcServerServer
	startTime time.Time
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

func (s *server) UpTime(req *pb.EmptyRequest, stream pb.GrpcServer_UpTimeServer) error {
	for {
		select {
		case <-stream.Context().Done():
			return nil
		default:
			stream.SendMsg(&pb.UpTimeResponse{Seconds: uint32(time.Since(s.startTime).Seconds())})
			time.Sleep(1 * time.Second)
		}
	}
}
