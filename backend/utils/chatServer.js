module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('msg', function(data) {
            socket('')
        })
        socket.on('changing', function(data){
            console.log(socket)
            socket.emit('changing', data)
        })
    })
}