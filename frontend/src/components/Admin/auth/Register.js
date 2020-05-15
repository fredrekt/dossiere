import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, 
    MDBBtn, MDBInput, MDBAnimation } from 'mdbreact'
import frontdesk from '../../../img/development.jpg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createAccount } from '../../../actions/auth'
import { setAlert } from '../../../actions/alert'


const Register = ({ createAccount, setAlert }) => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    }) 

    const { name, email, password, password2 } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'error')
            setFormData({ password: '', password2: '' })
        }
        else{
            createAccount({ name, email, password });
        }
    }

    return (
        <MDBAnimation type="slideInRight" reveal>
        <MDBContainer style={{'margin-top':'13%', marginBottom: "5%" }}>
        <MDBRow>
            <MDBCol md="6">
                <MDBContainer>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <h1 style={{ fontSize: "xxx-large" }} className="h1-responsive font-weight-bold mb-2">Hello Stranger.</h1>
                        <p style={{ fontSize: "x-large" }} className="grey-text">
                            Sign up to use our services for this application
                        </p>
                        <div className="grey-text">
                        <MDBInput 
                            className="w-100" 
                            label="Type your email" 
                            group 
                            type="email" 
                            validate 
                            name="email"
                            value={email}
                            onChange={(e)=>onChange(e)}
                            error="wrong"
                            success="right" />
                        <MDBInput 
                            className="w-100" 
                            label="Type your name" 
                            group 
                            name="name"
                            value={name}
                            onChange={(e)=>onChange(e)}
                            type="text" 
                            validate />
                        <MDBInput 
                            className="w-100" 
                            label="Type your password" 
                            group 
                            name="password"
                            value={password}
                            onChange={(e)=>onChange(e)}
                            type="password" 
                            validate />
                        <MDBInput 
                            className="w-100" 
                            label="Confirm your password" 
                            group 
                            name="password2"
                            value={password2}
                            onChange={(e)=>onChange(e)}
                            type="password" 
                            validate />
                        </div>
                        <div className="ml-0 mb-4">
                            Already have an account? <Link to="/login">Sign In here</Link>
                        </div>
                        <div className="text-center">
                        <MDBBtn id="btn-id-submit" type="submit" className="w-100 ml-0">Create Account</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>
            </MDBCol>
            <MDBCol md="6">
                <img className="w-100 mt-5" src={frontdesk} alt=""/>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBAnimation>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
}



export default connect(null, { setAlert, createAccount })(Register)
