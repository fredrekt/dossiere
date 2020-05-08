import React, { Component } from 'react'
import { MDBContainer, MDBCard, MDBCardText, 
    MDBCardBody, MDBBox, MDBIcon, MDBRow, MDBCol,
    MDBInput, MDBBtn, MDBBadge, MDBModal, MDBModalHeader,
    MDBModalBody, MDBModalFooter, MDBListGroup, MDBListGroupItem,
} from 'mdbreact'
import PanelJob from '../../PanelJob'
import AdminTitle from '../../AdminTitle'
import pp from '../../../img/fred.jpg'
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false,
            modal2: false
        }
    }
    toggle = () => {
        this.setState({
        modal: !this.state.modal
        });
    }

    toggle2 = () => {
        this.setState({
        modal2: !this.state.modal2
        });
    }
    

    render(){
        const adminTitle = [{
            id: 7,
            title: "Account Information | Own Portfolio",
            className: "mt-2 ml-2",
            icon: "user-alt",
            subTitle: "This is an example of All your archived posts & articles are shown below, made by fred."
          }]
        return (
            <>
            <AdminTitle adminTitle={adminTitle}/>
                <MDBContainer>
                    <MDBCard className="z-depth-4 p-2">
                        <MDBCardBody>
                            <MDBCardText>
                                <b className="font-size-18">Personal Information</b>
                                <hr/>
                                <MDBBox className="p-1" alignItems="center" display="flex" flex="row">
                                        <div className="profile-avatar">
                                            <img src={pp} alt=""/>
                                        </div>
                                        <MDBBox className="p-2" flex="column">
                                            <div className="profile-name">
                                                Fredrick Garingo
                                            </div>
                                            <div className="profile-change-avatar">
                                                <a href="#changeavatar">Change Avatar</a>
                                            </div>
                                        </MDBBox>
                                </MDBBox>
                                <hr/>
                                <b className="font-size-18">Account Information</b>
                                <MDBRow className="mt-3">
                                    <MDBCol md="4">
                                        <MDBCard>
                                            <MDBCardBody className="card-selected">
                                                <MDBCardText style={{ 'position': 'relative' }}>
                                                    <MDBRow>
                                                        <MDBCol md="8">
                                                            <h5 style={{ 'font-weight':'500'}}>
                                                            Admin Account
                                                            </h5>
                                                            <p style={{ fontSize: '12px' }} className="grey-text ml-0">
                                                            This account is an admin <br/>
                                                            controls everything
                                                        </p>
                                                        </MDBCol>
                                                        <MDBCol md="4">
                                                            <MDBIcon size="4x" icon="user-shield mt-3" />
                                                        </MDBCol>
                                                    </MDBRow>
                                                    {/* <MDBRow>
                                                      
                                                    </MDBRow> */}
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput size="sm" label="First Name" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput size="sm" label="Last Name" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput size="sm" label="Location" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBBtn className="mt-4" color="danger" outline size="sm">
                                            Change Password
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="margin-bottom-3"/>
                                <b className="font-size-18">Work Information</b>
                                <MDBRow>
                                    <MDBCol md="4">
                                        <MDBInput size="sm" label="Company" />
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput size="sm" label="Status" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="8">
                                        <MDBInput size="sm" label="Website" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="8">
                                        <MDBInput type="textarea" size="sm" label="Your Bio" />
                                    </MDBCol>
                                </MDBRow>
                                <hr className="margin-bottom-3"/>
                                <b className="font-size-18">Experiences</b>
                                <MDBRow className="mt-3 mb-3">
                                    <PanelJob
                                        job_title="Mobile Developer"
                                        job_location="United States of America"
                                        job_company="Fiverr"
                                        job_start="2019"
                                        job_end="2020"
                                        job_icon="briefcase"
                                    />
                                    <PanelJob
                                        job_title="Full Stack Developer"
                                        job_location="Cebu City"
                                        job_company="Upwork"
                                        job_start="2014"
                                        job_end="2019"
                                        job_icon="user-shield"
                                    />
                                    <MDBCol md="4">
                                        <MDBCard onClick={this.toggle2}>
                                            <MDBCardBody className="card-hover">
                                                <MDBCardText>
                                                    <MDBRow>
                                                        <MDBCol md="8">
                                                            <h6>
                                                                <strong style={{ "font-weight": 'bold'}}>Additional Experience</strong>
                                                            </h6>
                                                            <div className="">
                                                                Got a new experience?
                                                            </div>
                                                            <div className="grey-text">
                                                                Add it to your list of experience
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol md="4">
                                                            <MDBIcon size="4x" className="mt-3" icon="plus" />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="margin-bottom-3"/>
                                <b className="font-size-18">Skills</b>
                                <MDBRow>
                                    <MDBContainer className="d-flex">
                                        <MDBBadge className="p-2 m-1 mr-1" color="default">Default</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="primary">Primary</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="success">Success</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="info">Info</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="warning">Warning</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="danger">Danger</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="light">Light</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="dark">Dark</MDBBadge>
                                        <MDBBadge className="skills-add p-2 m-1 mr-1" onClick={this.toggle} color="success">+ add skills</MDBBadge>
                                        {/* <MDBBtn className=""  size="sm" color="success">Add skills</MDBBtn> */}
                                    </MDBContainer>
                                </MDBRow>
                                <hr className="margin-bottom-3"/>
                                <b className="font-size-18">Social</b>
                                <MDBRow>
                                    <MDBContainer>
                                        <a href="facebook.com">
                                            <MDBIcon className="p-2 m-1 mr-1" size="3x" fab icon="facebook-square" />
                                        </a>
                                        <a href="twitter.com">
                                            <MDBIcon className="p-2 m-1 mr-1" size="3x" fab icon="twitter-square" />
                                        </a>
                                        <a href="linkedin.com">
                                            <MDBIcon className="p-2 m-1 mr-1" size="3x"  fab icon="linkedin" />
                                        </a>
                                    </MDBContainer>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>



                <MDBContainer>
                    <MDBModal size="lg" isOpen={this.state.modal2} toggle={this.toggle2}>
                        <MDBModalHeader toggle={this.toggle2}><strong style={{ fontSize: '25px' }}><b>Add Experience</b></strong></MDBModalHeader>
                        <MDBModalBody>
                            <MDBContainer>
                                <MDBRow>
                                    <p className="grey-text">Fill up these fields to add new experience</p>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Job Title"/>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Company Name"/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Job Location"/>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Job Description"/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Job Title"/>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput style={{ width: "22rem" }} size="sm" label="Job Title"/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn size="sm" color="success">add to my experiences</MDBBtn>
                        <MDBBtn size="sm" color="danger" onClick={this.toggle2}>Close</MDBBtn> 
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>



                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}><strong style={{ fontSize: '25px' }}>Additional Skills</strong></MDBModalHeader>
                        <MDBModalBody>
                            <MDBContainer>
                                <MDBRow>
                                    <p className="grey-text">Below are your current skills</p>
                                    <MDBListGroup style={{ width: "22rem" }}>
                                        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                                        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBRow>
                                <MDBRow>
                                    <MDBInput style={{ width: "22rem" }} size="sm" label="Add More Skills"/>
                                </MDBRow>
                                <MDBRow>
                                    <MDBBtn size="sm" color="info">
                                        Add to my list of skills
                                    </MDBBtn>
                                </MDBRow>
                            </MDBContainer>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn size="sm" color="success">Save changes</MDBBtn>
                        <MDBBtn size="sm" color="danger" onClick={this.toggle}>Close</MDBBtn> 
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </>   
        )
    }
}

export default Profile
