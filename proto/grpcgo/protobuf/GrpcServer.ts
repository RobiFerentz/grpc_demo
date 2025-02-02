// Original file: protobuf/grpc_server.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AllPagesResponse as _grpcgo_protobuf_AllPagesResponse, AllPagesResponse__Output as _grpcgo_protobuf_AllPagesResponse__Output } from '../../grpcgo/protobuf/AllPagesResponse';
import type { ChangePageRequest as _grpcgo_protobuf_ChangePageRequest, ChangePageRequest__Output as _grpcgo_protobuf_ChangePageRequest__Output } from '../../grpcgo/protobuf/ChangePageRequest';
import type { ChangePageResponse as _grpcgo_protobuf_ChangePageResponse, ChangePageResponse__Output as _grpcgo_protobuf_ChangePageResponse__Output } from '../../grpcgo/protobuf/ChangePageResponse';
import type { EmptyRequest as _grpcgo_protobuf_EmptyRequest, EmptyRequest__Output as _grpcgo_protobuf_EmptyRequest__Output } from '../../grpcgo/protobuf/EmptyRequest';
import type { PingRequest as _grpcgo_protobuf_PingRequest, PingRequest__Output as _grpcgo_protobuf_PingRequest__Output } from '../../grpcgo/protobuf/PingRequest';
import type { PingResponse as _grpcgo_protobuf_PingResponse, PingResponse__Output as _grpcgo_protobuf_PingResponse__Output } from '../../grpcgo/protobuf/PingResponse';
import type { UpTimeResponse as _grpcgo_protobuf_UpTimeResponse, UpTimeResponse__Output as _grpcgo_protobuf_UpTimeResponse__Output } from '../../grpcgo/protobuf/UpTimeResponse';

export interface GrpcServerClient extends grpc.Client {
  AllPages(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  AllPages(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  AllPages(argument: _grpcgo_protobuf_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  AllPages(argument: _grpcgo_protobuf_EmptyRequest, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  allPages(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  allPages(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  allPages(argument: _grpcgo_protobuf_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  allPages(argument: _grpcgo_protobuf_EmptyRequest, callback: grpc.requestCallback<_grpcgo_protobuf_AllPagesResponse__Output>): grpc.ClientUnaryCall;
  
  ChangePage(argument: _grpcgo_protobuf_ChangePageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  ChangePage(argument: _grpcgo_protobuf_ChangePageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  ChangePage(argument: _grpcgo_protobuf_ChangePageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  ChangePage(argument: _grpcgo_protobuf_ChangePageRequest, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  changePage(argument: _grpcgo_protobuf_ChangePageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  changePage(argument: _grpcgo_protobuf_ChangePageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  changePage(argument: _grpcgo_protobuf_ChangePageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  changePage(argument: _grpcgo_protobuf_ChangePageRequest, callback: grpc.requestCallback<_grpcgo_protobuf_ChangePageResponse__Output>): grpc.ClientUnaryCall;
  
  Ping(argument: _grpcgo_protobuf_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _grpcgo_protobuf_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _grpcgo_protobuf_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _grpcgo_protobuf_PingRequest, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _grpcgo_protobuf_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _grpcgo_protobuf_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _grpcgo_protobuf_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _grpcgo_protobuf_PingRequest, callback: grpc.requestCallback<_grpcgo_protobuf_PingResponse__Output>): grpc.ClientUnaryCall;
  
  UpTime(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_grpcgo_protobuf_UpTimeResponse__Output>;
  UpTime(argument: _grpcgo_protobuf_EmptyRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_grpcgo_protobuf_UpTimeResponse__Output>;
  upTime(argument: _grpcgo_protobuf_EmptyRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_grpcgo_protobuf_UpTimeResponse__Output>;
  upTime(argument: _grpcgo_protobuf_EmptyRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_grpcgo_protobuf_UpTimeResponse__Output>;
  
}

export interface GrpcServerHandlers extends grpc.UntypedServiceImplementation {
  AllPages: grpc.handleUnaryCall<_grpcgo_protobuf_EmptyRequest__Output, _grpcgo_protobuf_AllPagesResponse>;
  
  ChangePage: grpc.handleUnaryCall<_grpcgo_protobuf_ChangePageRequest__Output, _grpcgo_protobuf_ChangePageResponse>;
  
  Ping: grpc.handleUnaryCall<_grpcgo_protobuf_PingRequest__Output, _grpcgo_protobuf_PingResponse>;
  
  UpTime: grpc.handleServerStreamingCall<_grpcgo_protobuf_EmptyRequest__Output, _grpcgo_protobuf_UpTimeResponse>;
  
}

export interface GrpcServerDefinition extends grpc.ServiceDefinition {
  AllPages: MethodDefinition<_grpcgo_protobuf_EmptyRequest, _grpcgo_protobuf_AllPagesResponse, _grpcgo_protobuf_EmptyRequest__Output, _grpcgo_protobuf_AllPagesResponse__Output>
  ChangePage: MethodDefinition<_grpcgo_protobuf_ChangePageRequest, _grpcgo_protobuf_ChangePageResponse, _grpcgo_protobuf_ChangePageRequest__Output, _grpcgo_protobuf_ChangePageResponse__Output>
  Ping: MethodDefinition<_grpcgo_protobuf_PingRequest, _grpcgo_protobuf_PingResponse, _grpcgo_protobuf_PingRequest__Output, _grpcgo_protobuf_PingResponse__Output>
  UpTime: MethodDefinition<_grpcgo_protobuf_EmptyRequest, _grpcgo_protobuf_UpTimeResponse, _grpcgo_protobuf_EmptyRequest__Output, _grpcgo_protobuf_UpTimeResponse__Output>
}
