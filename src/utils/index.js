const io = require('socket.io-client')
export const socket = io.connect('http://localhost:3000')

export const registerChat = (onMessageReceived) => {
    socket.on('msg', onMessageReceived)
}
