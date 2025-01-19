import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GrpcServerClient as _grpcgo_protobuf_GrpcServerClient, GrpcServerDefinition as _grpcgo_protobuf_GrpcServerDefinition } from './grpcgo/protobuf/GrpcServer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  grpcgo: {
    protobuf: {
      AllPagesResponse: MessageTypeDefinition
      ChangePageRequest: MessageTypeDefinition
      ChangePageResponse: MessageTypeDefinition
      EmptyRequest: MessageTypeDefinition
      GrpcServer: SubtypeConstructor<typeof grpc.Client, _grpcgo_protobuf_GrpcServerClient> & { service: _grpcgo_protobuf_GrpcServerDefinition }
      PingRequest: MessageTypeDefinition
      PingResponse: MessageTypeDefinition
    }
  }
}

