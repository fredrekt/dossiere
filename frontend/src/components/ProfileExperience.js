import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBBtn, MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBIcon } from 'mdbreact'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteExperience } from '../actions/profile'

const ProfileExperience = ({ experience, deleteExperience }) => {
    const experiences = experience.map((exp =>
        <div key={exp._id}>
         <MDBPopover
            placement="top"
            popover
            clickable
            id="popper1"
        >
        <MDBCard style={{ marginTop: "10%", cursor: "pointer" }}>
            <MDBCardBody>
                <div>
                    <div style={{fontWeight: "900"}}>
                        {exp.title}  
                    </div>
                    <div class="d-flex flex-row justify-content-center">    
                        <div>
                            {!exp.from ? '' : 
                                <Moment format="YYYY">{exp.from}</Moment>
                            }
                        </div>
                        <div className="ml-2 mr-2">
                            {!exp.from ? '': '-' }
                        </div>
                        <div>
                            {!exp.to ? '': 
                                <Moment format="YYYY">{exp.to}</Moment>
                            }
                        </div>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
        <div>
            <MDBPopoverHeader>
                <div className="d-flex flex-row">
                    <div>
                        Experience Information
                    </div>
                    <div>
                        <MDBIcon
                            icon="trash-restore"
                            size="1x"
                            onClick={()=>deleteExperience(exp._id)}
                        />
                    </div>
                </div>
            </MDBPopoverHeader>
            <MDBPopoverBody>
                I have worked for {exp.company} as a {exp.description}. The company's address is currenty located at {exp.location}.
            </MDBPopoverBody>
        </div>
        </MDBPopover>
        </div>
    ))
    return (
        <div>
            {experiences}
        </div>
    )
}

ProfileExperience.propTypes = {
    experiences: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience } )(ProfileExperience)
