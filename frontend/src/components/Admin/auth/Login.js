import React, { useState } from "react";
import { MDBContainer, MDBRow, 
    MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import frontdesk from '../../../img/frontdesk-vector.jpg'
import { Link } from 'react-router-dom'

const Login = () => {

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e =>{
        e.preventDefault();
        console.log(formData)
    }

  return (
      <MDBContainer style={{'margin-top':'13%'}}>
        <MDBRow>
            <MDBCol md="6">
                <img style={{ "width": "500px", "margin-top": "-15%" }} src={frontdesk} alt=""/>
            </MDBCol>
            <MDBCol md="6">
                <MDBContainer>
                    <form onSubmit={e => onSubmit(e)}>
                        <h3 style={{ fontSize: "40px" }} className="h5 mb-4">Sign in</h3>
                        <p style={{ fontSize: "20px" }} className="grey-text">
                            Sign In to proceed to your dashboard
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
                        <MDBBtn type="submit" className="w-100 ml-0">Login</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>
   
                </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default Login;