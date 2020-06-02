import { GET_MESSAGES, MESSAGES_ERROR, CLEAR_MESSAGES } from '../actions/types'

const initialState = {
    messages: [],
    message: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: payload,
                loading: false
            }
        case MESSAGES_ERROR:
            return { 
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: null,
                loading: false
            }
        default:
            return state
    }
}