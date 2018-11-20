import { UPDATE_MESSAGE } from '../consts'
import { registerChat, socket } from '../utils'

export const onInpuChange = (user) => {
    return (dispatch) => {
        // registerChat(function() {
            console.log(socket)
            socket.emit("changing", {from: {id: user.id}, to: {id:3 - user.id}})
        // })

    }
}

export const onMessagePush = (user, msg) => {
    return (dispatch) => {
        const payload = {
            direction: 'out',
            status: 'sent',
            msg,
        }
        dispatch({
            type: UPDATE_MESSAGE,
            payload,
            id: user.id,
        })
        socket.emit('msg', {
            ...payload, 
            to: {id:3 - user.id}, 
            from: {id: user.id}
        })
    }
}

export const onMessagePull = (user, msg) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_MESSAGE,
            payload: {
                direction: 'in',
                status: 'received',
                msg,
            },
            id: user.id,
        })
    }
}