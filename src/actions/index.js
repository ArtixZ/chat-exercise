import { UPDATE_MESSAGE } from '../consts'
import { registerChat, socket } from '../utils'

export const onInpuChange = (user) => {
    return (dispatch) => {
        // registerChat(function() {
            console.log(socket)
            socket.emit("changing", {to: {id:3 - user.id}})
        // })

    }
}

export const onMessageChange = (user, msg) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_MESSAGE,
            payload: {
                direction: 'out',
                status: 'sent',
                msg,
            }
        })
        socket.emit('msg', msg)
    }
}
