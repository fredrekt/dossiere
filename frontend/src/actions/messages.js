import axios from 'axios'
import { setAlert } from './alert'
import { GET_MESSAGES, MESSAGES_ERROR } from './types'

export const getMessages = () => async dispatch => {
    try {
        const res = await axios.get(`/api/contact/me`)

        dispatch({
            type: GET_MESSAGES,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: MESSAGES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}