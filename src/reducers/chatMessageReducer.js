import { UPDATE_MESSAGE } from '../consts'
import config from '../config'

const INITIAL_STATE = {}

config.users.reduce( (pre,cur) => {
    pre[cur.id] = []
    return pre
}, INITIAL_STATE)

export default function messages(state = INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_MESSAGE:
            return {...state, [action.id]: [...state[action.id], action.payload]}
        default: 
            return state
    }
}