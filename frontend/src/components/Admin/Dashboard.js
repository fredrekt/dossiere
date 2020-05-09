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
import happy from '../../img/happy-people.jpg'
import DashboardPanels from '../DashboardPanels'
import BlogMain from '../BlogMain'

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

    const highlightArticle = [{
        _id: 1,
        title: "ReactJS Developer, useHooks or not?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales diam at vehicula aliquam. Ut posuere libero id massa efficitur lobortis. Sed auctor mauris ut sem semper faucibus.",
        user: "fred",
        date: "AUG 19, 2020"
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
                    <DashboardPanels
                        className="far fa-list-alt fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Articles & Blogs"
                        count="1205"
                        progressValue="25"
                        progressText="Articles & blogs are published"
                    />
                    <DashboardPanels
                        className="far fa-envelope fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Messages"
                        count="109"
                        progressValue="50"
                        progressText="You have this total messages"
                    />
                    <DashboardPanels
                        className="far fa-comments fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Comments"
                        count="301"
                        progressValue="75"
                        progressText="Total of comments per week"
                    />
                    <DashboardPanels
                        className="far fa-eye fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Views"
                        count="856"
                        progressValue="90"
                        progressText="You are doing pretty good there"
                    />
                </MDBRow>
                <MDBRow style={{ marginTop: "5%" }}>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBContainer>
                                    <h3>
                                        Article Highlight
                                    </h3>
                                    <p className="grey-text">
                                        This article of yours is the highlight of the month! Many viewers and comments and 
                                        human computer interaction.
                                    </p>
                                    <div>
                                        <BlogMain
                                            data={highlightArticle}
                                        />
                                    </div>
                                </MDBContainer>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {profile !== null ? (
                <>
                <MDBModal centered size="md" isOpen={show}>
                    <MDBModalBody style={{ padding: "10%" }}>
                        <MDBContainer className="d-flex flex-column text-center justify-content-center">
                            <div>
                                <img src={happy} className="w-100" alt="onboarding team"/>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                    Welcome back { user && user.name }!
                                </h4>
                            </div>
                            <div>
                                <p className="grey-text">
                                    Back so early, share us your thoughts and let us transform them into articles & blogs.
                                </p>
                            </div>
                            <div>
                                <MDBBtn onClick={handleClose} size="sm">
                                    get working
                                </MDBBtn>
                            </div>
                        </MDBContainer>
                    </MDBModalBody>
                </MDBModal>
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
