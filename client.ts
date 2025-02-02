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
  const handleQuit = () => {
    process.stdout.write('\n')
    process.exit()
  }

  const handleRestart = () => {
    pageIndex = 0
    client.changePage({ page: pages[pageIndex] }, (err, _response) => {
      if (err) {
        console.error(err)
      }
    })
  }

  const handlePrevious = () => {
    if (pageIndex > 0) {
      pageIndex -= 1
      client.changePage({ page: pages[pageIndex] }, (err, _response) => {
        if (err) {
          console.error(err)
        }
      })
    }
  }

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      pageIndex += 1
      client.changePage({ page: pages[pageIndex] }, (err, _response) => {
        if (err) {
          console.error(err)
        }
      })
    }
  }

  process.stdout.write('(q)uit, (r)estart, (p)revious, (n)ext >')
  process.stdin.setRawMode(true)
  process.stdin.on('data', (data) => {
    switch (data.toString().trim()) {
      case 'q':
        handleQuit()
        break
      case 'r':
        handleRestart()
        break
      case 'p':
        handlePrevious()
        break
      case 'n':
        handleNext()
        break
    }
  })
}

main()
