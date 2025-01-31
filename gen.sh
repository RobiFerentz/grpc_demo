#!/bin/bash
YELLOW="\033[0;33m"
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m"
echo "${YELLOW}Attempting to generate code from protobuf files...${NC}"

check_error() {
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: $1${NC}"
        exit $?
    fi
}
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative protobuf/grpc_server.proto
check_error "Failed to generate Go code from protobuf files."
bun run gen_ts
check_error "Failed to generate TS code from protobuf files."
echo "${GREEN}Successfully generated code from protobuf files.${NC}"
