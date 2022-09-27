const http = require('http')
const { Server } = require("socket.io")

export default function(req, res) {
  const server = http.createServer(app)

  const io = new Server(server, {
    cors: {
      origin: "*",
    }
  })

  let clientsCount = 0
  io.on('connection', (socket) => {
    console.log('socket.io is listening')
    socket.broadcast.emit("devices", clientsCount + 1)
    socket.broadcast.emit("new user")

    socket.on("update", (update) => {
      socket.broadcast.emit("update", update)
    })

    socket.on("command", (command) => {
      socket.broadcast.emit("command", command)
    })
  })

}

// const express = require('express')
// const app = express()
// const cors = require('cors')
// const http = require('http')
// const server = http.createServer(app)
// const { Server } = require("socket.io")

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   }
// })

// app.use(cors())

// app.get('/api', (req, res) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
//   res.end(`Hello world!`)
// })

// // server.listen(3000, () => {
// //   console.log('listening on *:3000')
// // })

// let clientsCount = 0
// io.on('connection', (socket) => {
//   console.log('socket.io is listening')
//   socket.broadcast.emit("devices", clientsCount - 1)
//   socket.broadcast.emit("new user")

//   socket.on("update", (update) => {
//     socket.broadcast.emit("update", update)
//   })

//   socket.on("command", (command) => {
//     socket.broadcast.emit("command", command)
//   })
// })

// module.exports = app