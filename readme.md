# This project is both the code and presentation for explaining what gRPC is.

## Code components

- [protobuf/grpc_server.proto](protobuf/grpc_server.proto) : The protobuf definition for the gRPC server.
- [server.go](server.go) : The gRPC server implementation in Go.
- [presentation.go](presentation.go) : The presentation code for explaining what gRPC is.
- [client.ts](client.ts) : The client code for gRPC in TypeScript.

## Presentation components

- All presentation pages are in the `./pages` directory in numbered order file names.

## How to run

- Install [Go toolchain](https://go.dev/doc/install)
- Install [bun](https://bun.sh/docs/installation)
- In the root directory, run `bun install` to install dependencies
- In the root directory, run `go run . server` to start the gRPC server and presentation layer.
- In the root directory, in another terminal session, run `bun bun:grpc_client` to start the gRPC client
- Control the presentation in the _client_ terminal to see changes in the _presentation_ terminal (next and previous page, quit)

## Warning: If you make changes to the protobuf file

- Make sure you install the [protobuf tools](https://grpc.io/docs/protoc-installation/)
- run `sh ./gen.sh` to generate the Go and TS files.

### Repository

[https://github.com/RobiFerentz/grpc_demo](https://github.com/RobiFerentz/grpc_demo)
