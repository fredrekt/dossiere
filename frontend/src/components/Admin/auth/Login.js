import React from "react";
import { MDBContainer, MDBRow, 
    MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import frontdesk from '../../../img/frontdesk-vector.png'

const Login = () => {
  return (
      <MDBContainer style={{'margin-top':'13%'}}>
        <MDBRow>
            <MDBCol md="6">
                <img style={{ "width": "500px", "margin-top": "-15%" }} src={frontdesk} alt=""/>
            </MDBCol>
            <MDBCol md="6">
                <MDBContainer>
                    <form>
                        <h3 style={{ fontSize: "40px" }} className="h5 mb-4">Sign in</h3>
                        <p style={{ fontSize: "20px" }} className="grey-text">
                            Sign In to proceed to your dashboard
                        </p>
                        <div className="grey-text">
                        <MDBInput className="w-100" label="Type your email" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput className="w-100" label="Type your password" group type="password" validate />
                        </div>
                        <div className="ml-0 mb-4">
                            Forgot your password? <a href="#retrieve">Retrieve here</a>
                        </div>
                        <div className="text-center">
                        <MDBBtn className="w-100 ml-0">Login</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>
   
                </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default Login;