import { LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGOUT,
    ACCOUNT_DELETED,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
}
export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        //for future add register success here
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        //for future add register fail here
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token')
            return {
                ...state, 
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return state
    }
}