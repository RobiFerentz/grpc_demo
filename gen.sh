#!/bin/bash

protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative protobuf/grpc_server.proto

# protoc \
#     --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
#     --ts_opt=esModuleInterop=true \
#     --js_out="./ts" \
#     --ts_out="./ts" \
#     ./protobuf/grpc_server.proto

bun run gen_ts
