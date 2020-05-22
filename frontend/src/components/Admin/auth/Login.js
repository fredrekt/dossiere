import React, { useState } from "react";
import { MDBContainer, MDBRow, 
    MDBCol, MDBBtn, MDBInput, MDBAnimation } from 'mdbreact';
import frontdesk from '../../../img/development.jpg'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../../actions/auth'
import PropTypes from 'prop-types'
import Flip from 'react-reveal/Flip'

const Login = ({ login, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const [ Btn, setBtn  ] = useState('Login')

    //var submitButton = "Login"

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e =>{
        e.preventDefault(); 
        setBtn(
            <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ) 
        login( email, password )

        if(isAuthenticated) setBtn('Login')

        setTimeout(() =>{
            setBtn('Login')
        },3000)
        //setBtn('Login')
        // login( email, password )
        console.log(formData)
    }

    //Redirect if logged in successful
    if(isAuthenticated){
        return <Redirect to='/admin'/>
    }

  return (
      <>
      <Flip right>
      <MDBContainer style={{'margin-top':'20%'}}>
        <MDBRow>
            <MDBCol md="6">
                <img style={{ "width": "500px", "margin-top": "-5%" }} src={frontdesk} alt=""/>
            </MDBCol>
            <MDBCol md="6">
                <MDBContainer>
                    <form onSubmit={e => onSubmit(e)}>
                        <h1 style={{ fontSize: "xxx-large" }} className="h1-responsive font-weight-bold mb-2">Welcome.</h1>
                        <p style={{ fontSize: "x-large" }} className="grey-text">
                            Sign in to proceed to your dashboard
                        </p>
                        <div className="grey-text">
                        <MDBInput 
                            className="w-100" 
                            label="Type your email" 
                            group 
                             
                            validate 
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            error="wrong"
                            success="right" />
                        <MDBInput 
                            className="w-100" 
                            label="Type your password" 
                            group 
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            type="password" 
                            validate />
                        </div>
                        <div className="ml-0 mb-4">
                            Forgot your password? <Link to="/register">Retrieve here</Link>
                        </div>
                        <div className="text-center">
                        <MDBBtn id="btn-id-submit" type="submit" className="w-100 ml-0">{Btn}</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>
   
                </MDBCol>
        </MDBRow>
      </MDBContainer>
      </Flip>
      </>
  );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);