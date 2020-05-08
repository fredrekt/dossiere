import React, { useEffect, useState } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer,
    MDBRow, MDBCol, MDBProgress, MDBCard, MDBCardBody,
    MDBCardText, MDBModalFooter, MDBModal, MDBModalHeader,
    MDBModalBody
} from 'mdbreact'
import AdminTitle from '../AdminTitle'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Spinner'
import { getCurrentProfile } from '../../actions/profile'
import onboarding from '../../img/onboarding-vector.jpg'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) =>{

    useEffect(()=>{
        getCurrentProfile();
    }, [])

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adminTitle = [{
        id: 1,
        title: "Personal Dashboard",
        className: "mt-2 ml-1",
        icon: "couch",
        subTitle: `Welcome ${user && user.name}, this is your personal dashboard. You can control everything from here.`
    }]

    const loadingAdminTitle = [{
        id:99,
        title: "The text is still loading bear with us for a while.",
        className : "mt-2 ml-1",
        icon : "",
        subTitle: <>
                    <MDBProgress animated preloader value={80} className="my-2" />
                </>,
    }]
    return loading && profile === null ? (
        <>
        <AdminTitle adminTitle={loadingAdminTitle}/>
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol md="3">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardText>
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardText>
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardText>
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardText>
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                <MDBProgress animated preloader value={80} className="my-2" />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
        )
        :(
        <>
            <AdminTitle adminTitle={adminTitle}/>
            <MDBContainer>
                <MDBRow>
                <div className="col-lg-3 col-md-12 mb-4">
                        <div className="card z-depth-2 mt-3">
                        <div className="">
                        {/* <i class="fas fa-eye"></i> */}
                            <i className="far fa-eye fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                            <div className="float-right text-right p-3">
                            <p className="text-uppercase text-muted mb-1"><small>Views</small></p>
                            <h4 className="font-weight-bold mb-0">23 000$</h4>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="progress md-progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">Better than last week (75%)</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4">
                        <div className="card z-depth-2 mt-3">
                        <div className="">
                        {/* <i class="fas fa-eye"></i> */}
                            <i className="far fa-eye fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                            <div className="float-right text-right p-3">
                            <p className="text-uppercase text-muted mb-1"><small>Views</small></p>
                            <h4 className="font-weight-bold mb-0">23 000$</h4>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="progress md-progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">Better than last week (75%)</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4">
                        <div className="card z-depth-2 mt-3">
                        <div className="">
                        {/* <i class="fas fa-eye"></i> */}
                            <i className="far fa-eye fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                            <div className="float-right text-right p-3">
                            <p className="text-uppercase text-muted mb-1"><small>Views</small></p>
                            <h4 className="font-weight-bold mb-0">23 000$</h4>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="progress md-progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">Better than last week (75%)</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4">
                        <div className="card z-depth-2 mt-3">
                        <div className="">
                        {/* <i class="fas fa-eye"></i> */}
                            <i className="far fa-eye fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                            <div className="float-right text-right p-3">
                            <p className="text-uppercase text-muted mb-1"><small>Views</small></p>
                            <h4 className="font-weight-bold mb-0">23 000$</h4>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="progress md-progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">Better than last week (75%)</p>
                        </div>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
            {profile !== null ? (
                <>
                    Already has a profile set up
                </>
            ):
            ( 
                <>
                <MDBModal centered size="md" isOpen={show}>
                    <MDBModalBody style={{ padding: "10%" }}>
                        <MDBContainer className="d-flex flex-column text-center justify-content-center">
                            <div>
                                <img src={onboarding} className="w-100" alt="onboarding team"/>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                    Welcome to your Accout Onboarding
                                </h4>
                            </div>
                            <div>
                                <p className="grey-text">
                                    This process will get your account & portfolio set up, probably take a couple of minutes
                                </p>
                            </div>
                            <div>
                                <MDBBtn onClick={handleClose} size="sm">
                                    proceed to onboarding
                                </MDBBtn>
                            </div>
                        </MDBContainer>
                    </MDBModalBody>
                </MDBModal>
                </>
            )}
        </>
    )

}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
