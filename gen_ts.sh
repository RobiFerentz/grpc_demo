#!/bin/bash

protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --ts_opt=esModuleInterop=true \
    --js_out="./ts" \
    --ts_out="./ts" \
    ./protobuf/grpc_server.proto
