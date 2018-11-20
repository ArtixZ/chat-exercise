import { UPDATE_MESSAGE } from '../consts'

export function messages(state = [], action) {
    switch(action.type) {
        case UPDATE_MESSAGE:
            return [...state, action.payload]
        default: 
            return state
    }
}