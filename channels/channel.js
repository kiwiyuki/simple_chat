function channel(io) {
  io.on('connection', function(socket) {
    socket.on('message', function(data) {
      console.log(data)
      io.emit('message.new', { user: data.user, message: data.message })
    })
  })
}

module.exports = channel
