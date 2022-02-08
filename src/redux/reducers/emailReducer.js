import {UPDATESTATE} from '../types/emailTypes'

const initialState = {
    load: false,
    isOpen: false,
    toast: false,
    send: false,
    name: '',
    phone: '',
    message: ''
}

export const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE: 
            return {
                ...state,
                ...action.payload
            }

            default:
                return state
    }
}