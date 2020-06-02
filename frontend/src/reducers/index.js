import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import portfolio from './portfolio'
import messages from './messages'

export default combineReducers({
    alert,
    auth,
    profile, 
    post,
    portfolio,
    messages
})