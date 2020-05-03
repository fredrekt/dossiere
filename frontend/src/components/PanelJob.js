import React from 'react'
import { MDBRow, MDBCol, MDBCard, 
    MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact'

const PanelJob = (props) => {
    return (
        <>
            <MDBCol md="4">
                <MDBCard>
                    <MDBCardBody className="card-hover">
                        <MDBCardText>
                            <MDBRow>
                                <MDBCol md="8">
                                    <h6>
                                        {props.job_title}
                                    </h6>
                                    <div className="grey-text">
                                        {props.job_location}
                                    </div>
                                    <div className="grey-text">
                                        {props.job_company}
                                    </div>
                                    <div className="grey-text">
                                        {props.job_start} - {props.job_end}
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBIcon size="4x" className="mt-3" icon={props.job_icon} />
                                </MDBCol>
                            </MDBRow>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

export default PanelJob
