import axios from 'axios'
import { setAlert } from './alert'
import { LOGIN_SUCCESS, LOGIN_FAIL, 
    USER_LOADED, AUTH_ERROR, LOGOUT, 
    CLEAR_PROFILE, REGISTER_SUCCESS, 
    REGISTER_FAIL, CLEAR_PORTFOLIO, CLEAR_MESSAGES } from './types'
import setAuthToken from '../utils/setAuthToken'

//load user
export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const createAccount = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password})
    
    try {
        const res = await axios.post('/api/users', body, config);
        
        dispatch({ 
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Account successfully created!', 'success'))
    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({ 
            type: REGISTER_FAIL
        })
    }
}

//authenticate user - login user
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })

    try {
    const res = await axios.post('/api/auth', body, config)

        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('User Verified', 'success'));

        dispatch(loadUser());
    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({ 
            type: LOGIN_FAIL
        })
    }
}

//logout - clear user in redux
export const logout = () => dispatch =>{
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: CLEAR_PORTFOLIO });
    dispatch({ type: CLEAR_MESSAGES });
    dispatch({ type: LOGOUT });
}