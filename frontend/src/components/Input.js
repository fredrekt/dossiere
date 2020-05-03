import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = (props) => {
  return (
    <MDBInput label={props.label} name={props.name} outline />
  );
}

export default InputPage;