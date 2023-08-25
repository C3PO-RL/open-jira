import mongoose from 'mongoose'

// 0= disconnected
// 1 = connected
// 2=connecting
// 3=disconnecting

const mongooConnection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongooConnection.isConnected === 1) {
    console.log('connected')
    return
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState
    if (mongooConnection.isConnected === 1) {
      console.log('using last connection')
    }
    await mongoose.disconnect()
  }

  await mongoose.connect(process.env.MONGO_URL || '')
  mongooConnection.isConnected = 1
  console.log('connected to mongo db:,', process.env.MONGO_URL)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return
  if (mongooConnection.isConnected === 0) return
  await mongoose.disconnect()
  console.log('disconnected')
}
