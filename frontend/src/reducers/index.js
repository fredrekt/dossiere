import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import portfolio from './portfolio'

export default combineReducers({
    alert,
    auth,
    profile, 
    post,
    portfolio
})