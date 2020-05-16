import axios from 'axios' 
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR, ADD_POST, DELETE_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT, UPDATE_LIKES } from './types'

//get own posts on user logged in
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts/own')

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//create post
export const createPost = ( formData ) => async dispatch => {

    try {

        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }    

        const res = await axios.post('/api/posts', formData, config)

        dispatch({
            type: ADD_POST,
            payload: res.data
        })

        dispatch(setAlert('Post Created', 'success'))
        
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//delete post
// bug 
export const deletePost = ( id ) => async dispatch => {

    try {

        const res = await axios.delete(`/api/posts/${id}`)

        dispatch({
            type: DELETE_POST,
            payload: id
        })

        dispatch(setAlert('Post Removed', 'error'))
        
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        dispatch(setAlert('Failed to delete', 'error'))
    }
}


//get post by id
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/current/${id}`)

        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//like a post/blog/article
export const addLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        dispatch(setAlert('Liked', 'success'))
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        dispatch(setAlert('Not liked', 'error'))
    }
}



//remove a like from post/blog/article
export const removeLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${id}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment post by id
export const addComment = (postId, formData) => async dispatch => {
    try {

        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }   

        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config)

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })

        dispatch(setAlert('Comment Added', 'success'))
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//remove comment post by id
export const removeComment = (postId, commentId,formData) => async dispatch => {
    try {

        const res = await axios.post(`/api/posts/comment/${postId}/${commentId}`)

        dispatch({
            type: REMOVE_COMMENT,
            payload: res.data
        })

        dispatch(setAlert('Comment Removed', 'success'))
    } 
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}