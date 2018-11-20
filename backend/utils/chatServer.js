module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('msg', function(data) {
            socket('')
        })
        socket.on('changing', function(data){
            socket.emit('changing', data)
        })
    })
}