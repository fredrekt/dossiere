import axios from 'axios'
import { setAlert } from './alert'
import { GET_PORTFOLIO, GET_OWN_PORTFOLIO, CREATE_PORTFOLIO, 
    PORTFOLIO_ERROR, ADD_SKILL, ADD_TESTIMONY, REMOVE_SKILL, 
    REMOVE_TESTIMONY,
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO
} from './types'

export const getPorfolio = id => async dispatch => {
    try {
        const res = await axios.get(`/api/portfolios/${id}`)

        dispatch({
            type: GET_PORTFOLIO,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//get own portfolio by user id in auth middleware - used x-auth-token -> token
export const getOwnPortfolio = () => async dispatch => {
    try {
        const res = await axios.get('/api/portfolios/own')
        
        dispatch({
            type: GET_OWN_PORTFOLIO,
            payload: res.data
        })
    } 
    catch (err) {
        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        }) 
    }
}

export const createPortfolio = (formData, history, created = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post('/api/portfolios/createProfilePortfolio', formData, config)

        dispatch({
            type: CREATE_PORTFOLIO,
            payload: res.data
        })

        dispatch(setAlert('Portfolio Successfully Configured!', 'success'))

        if(!created){
            history.push('/admin')
        }
    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const updatePortfolio = (formData, created = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post('/api/portfolios/updatePortfolio', formData, config)

        dispatch({
            type: UPDATE_PORTFOLIO,
            payload: res.data
        })

        dispatch(setAlert('Portfolio Successfully Updated!', 'success'))
    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }

        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//update portfolio - add skills
export const addSkill = (formData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        const res = await axios.put(`/api/portfolios/add-skills/${id}`, formData, config);

        dispatch({
            type: ADD_SKILL,
            payload: res.data
        });

        dispatch(setAlert('Skills Added', 'success'));

    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//update portfolio - add testimony
export const addTestimony = (formData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        const res = await axios.put(`/api/portfolios/add-testimony/${id}`, formData, config);

        dispatch({
            type: ADD_TESTIMONY,
            payload: res.data
        });

        dispatch(setAlert('Testimony Added', 'success'));

    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//update portfolio - remove skill
export const removeSkill = id => async dispatch => {
    try {
        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }  
        // }

        const res = await axios.delete(`/api/portfolios/remove-skill/${id}`);

        dispatch({
            type: REMOVE_SKILL,
            payload: res.data
        });

        dispatch(setAlert('Skill Removed', 'success'));

    } 
    catch (err) {
        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//update portfolio - remove testimony
export const removeTestimony = id => async dispatch => {
    try {
        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }  
        // }

        const res = await axios.delete(`/api/portfolios/remove-testimony/${id}`);

        dispatch({
            type: REMOVE_TESTIMONY,
            payload: res.data
        });

        dispatch(setAlert('Testimony Removed', 'success'));

    } 
    catch (err) {
        dispatch({
            type: PORTFOLIO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//remove portfolio - delete portfolio of user
export const deletePortfolio = (history) => async dispatch => {
    if(window.confirm('Are you sure?')){
        try {
            const res = await axios.delete(`/api/portfolios`);
            dispatch({ type: DELETE_PORTFOLIO });
            dispatch(setAlert('Portfolio Deleted!', 'success'));
            history.push('/admin')
        } 
        catch (err) {
            dispatch({
                type: PORTFOLIO_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


