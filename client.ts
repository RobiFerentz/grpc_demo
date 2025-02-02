import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import loader from '@grpc/proto-loader'
import { join } from 'path'
import type { ProtoGrpcType } from './proto/grpc_server'

const protoPath = join(__dirname, 'protobuf/grpc_server.proto')
const def = loader.loadSync(protoPath, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true })
const pb = loadPackageDefinition(def) as unknown as ProtoGrpcType

async function main() {
  const client = new pb.grpcgo.protobuf.GrpcServer('localhost:50051', credentials.createInsecure())
  let pageIndex = 0
  const { resolve, reject, promise: allPagesPromise } = Promise.withResolvers<string[]>()
  client.allPages({}, (err, response) => {
    if (err) {
      reject(err)
      return
    }
    resolve(response?.pages || [])
  })
  const pages = await allPagesPromise

  process.stdout.write('(q)uit, (r)estart, (p)revious, (n)ext >')
  process.stdin.setRawMode(true)
  process.stdin.on('data', (data) => {
    switch (data.toString().trim()) {
      case 'q':
        process.stdout.write('\n')
        process.exit()
      case 'r':
        pageIndex = 0
        client.changePage({ page: pages[pageIndex] }, (err, _response) => {
          if (err) {
            console.error(err)
            return
          }
        })
        break
      case 'p':
        if (pageIndex === 0) {
          return
        }
        pageIndex--
        client.changePage({ page: pages[pageIndex] }, (err, _response) => {
          if (err) {
            console.error(err)
            return
          }
        })
        break
      case 'n':
        if (pageIndex === pages.length - 1) {
          return
        }
        pageIndex++
        client.changePage({ page: pages[pageIndex] }, (err, _response) => {
          if (err) {
            console.error(err)
            return
          }
        })
        break
    }
  })
}

main()
