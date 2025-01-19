import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import loader from '@grpc/proto-loader'
import { join } from 'path'
import { ProtoGrpcType } from './proto/grpc_server'

const protoPath = join(__dirname, 'protobuf/grpc_server.proto')
const def = loader.loadSync(protoPath, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true })
const pb = loadPackageDefinition(def) as unknown as ProtoGrpcType

function main() {
  const client = new pb.grpcgo.protobuf.GrpcServer('localhost:50051', credentials.createInsecure())

  // client.ping({ message: 'world' }, (err, response) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log(response?.message)
  // })

  // client.allPages({}, (err, response) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log(response?.pages)
  // })
  client.changePage({ page: '1' }, (err, response) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(response?.success)
  })
}
main()
