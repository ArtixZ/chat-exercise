const io = require('socket.io-client')

export const socket = io.connect('http://localhost:3000')


export function registerInputChanging(onMessageTyping){
    socket.on('changing', data => {
        onMessageTyping(data)
    })
}

export function registerMessageListening(onMessageChanging){
    socket.on('msg', data => {
        onMessageChanging(data)
    })
}