import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const JumbotronPage = (props) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">{props.title}</h2>
            <p className="lead">
              {props.sub_header}
            </p>
            <hr className="my-2" />
            <p className="grey-text">
              {props.sub_text}
            </p>
            <p className="lead">
              <MDBBtn color="primary">{props.button_value}</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;