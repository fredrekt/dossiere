import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { MDBIcon } from 'mdbreact' 

export default class FBLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="374598520132545">
        <LoginButton
            className="btn-light btn-outline-light btn Ripple-parent btn-sm"
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <div className="grey-text">
          <MDBIcon className="mr-1" fab icon="facebook-f"/>Connect facebook
          </div>
        </LoginButton>
      </FacebookProvider>
    );
  }
}