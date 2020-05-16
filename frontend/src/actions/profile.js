import axios from 'axios'
import { setAlert } from './alert'

import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, CLEAR_PROFILE, ACCOUNT_DELETED } from './types'

//get current user profile
export const getCurrentProfile = () => async dispatch => {
    try {
      const res = await axios.get('/api/profile/me')  
      
      dispatch({
          type: GET_PROFILE,
          payload: res.data
      })
    } 
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//create profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'));

        if(!edit){
            history.push('/admin')
        }
    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//update profile - add experience
export const addExperience = (expData, history) => async dispatch => {
    const newData = {}
    const { 
        title,
        job_company,
        job_location,
        from,
        to,
        job_current,
        job_description
    } = expData

    newData.title = title;
    newData.company = job_company;
    newData.location = job_location;
    newData.from = from;
    newData.to = to;
    newData.current = job_current;
    newData.description = job_description;


    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        const res = await axios.put('/api/profile/experience', newData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Added', 'success'));
        history.push('/admin')

    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//update profile - add skills
export const addSkills = (formData, history) => async dispatch => {
    const newSkillsData = {}
    const { newSkills } = formData
    newSkillsData.skills = newSkills;
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        const res = await axios.put('/api/profile/newskills', newSkillsData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Skills Added', 'success'));
        history.push('/admin')

    } 
    catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//delete experience
export const deleteExperience = id => async dispatch => {
    try {

       const res = await axios.delete(`/api/profile/experience/${id}`); 

       dispatch({
           type: UPDATE_PROFILE,
           payload: res.data
       })

       dispatch(setAlert('Experience Removed', 'success'));

    } 
    catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}

//delete Skills
//delete experience
export const deleteSkill = skill => async dispatch => {
    if(window.confirm('Remove skill?')){
        try {

            const res = await axios.delete(`/api/profile/removeskills/${skill}`); 
     
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            })
     
            dispatch(setAlert('Skill Removed', 'success'));
     
         } 
         catch (err) {
     
             dispatch({
                 type: PROFILE_ERROR,
                 payload: { msg: err.response.statusText, status: err.response.status }
             })
     
         }
    }
}

//delete account & profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure?')){
        try {

            const res = await axios.delete(`/api/profile`); 
     
            dispatch({ type: CLEAR_PROFILE })
            dispatch({ type: ACCOUNT_DELETED })
     
            dispatch(setAlert('Your account has permanently been deleted!', 'error'));
     
         } 
         catch (err) {
     
             dispatch({
                 type: PROFILE_ERROR,
                 payload: { msg: err.response.statusText, status: err.response.status }
             })
     
         }
    }
}