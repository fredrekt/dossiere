import React, { useEffect, useState } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer,
    MDBRow, MDBCol, MDBProgress, MDBCard, MDBCardBody,
    MDBCardText, MDBModalFooter, MDBModal, MDBModalHeader,
    MDBModalBody
} from 'mdbreact'
import { Link, Redirect, withRouter } from 'react-router-dom'
import AdminTitle from '../AdminTitle'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Spinner'
import { getCurrentProfile } from '../../actions/profile'
import { loadUser } from '../../actions/auth'
import { getPosts } from '../../actions/post'
import { getMessages } from '../../actions/messages'
import onboarding from '../../img/onboarding-vector.jpg'
import happy from '../../img/happy-people.jpg'
import DashboardPanels from '../DashboardPanels'
import BlogMain from '../BlogMain'
import FeaturedBlog from '../FeaturedBlog'

const Dashboard = ({ loadUser, getCurrentProfile, getPosts, getMessages, post: { posts }, auth: { user }, profile: { profile, loading }, messages: { messages }, history }) =>{

    useEffect(()=>{
        loadUser()
        getCurrentProfile();
        getPosts()
        getMessages()
    }, [loadUser])

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const startOnboarding = () =>{
        setShow(false)
        history.push('/profile')
    }

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
        topic: "Programming",
        className : "mt-2 ml-1",
        icon : "",
        subTitle: <>
                    <MDBProgress animated preloader value={80} className="my-2" />
                </>,
    }]

    const highlightArticle = {
        _id: 1,
        title: "ReactJS Developer, useHooks or not?",
        topic: 'Sample Topic',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales diam at vehicula aliquam. Ut posuere libero id massa efficitur lobortis. Sed auctor mauris ut sem semper faucibus.",
        user: "fred",
        date: "AUG 19, 2020"
    }

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
                <MDBRow style={{ marginTop: "5%" }}>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBContainer>
                                    <h3>
                                        <MDBProgress animated preloader value={80} className="my-2" />
                                    </h3>
                                    <p className="grey-text">
                                    <MDBProgress animated preloader value={80} className="my-2" />
                                    <MDBProgress animated preloader value={80} className="my-2" />
                                    <MDBProgress animated preloader value={80} className="my-2" />
                                    <MDBProgress animated preloader value={80} className="my-2" />
                                    </p>
                                    <MDBRow className="mt-5 mb-5">
                                        <hr className="my-5" />
                                        <MDBCol lg="5">
                                            <MDBCard>
                                                <MDBCardBody>
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                    <MDBProgress animated preloader value={80} className="my-2" />
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="7">
                                            <a href="#!" className="green-text">
                                            <h6 className="font-weight-bold mb-3">
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                            </h6>
                                            </a>
                                            <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                            </strong>
                                            </h3>
                                        
                                            <p class="blog-post-content">
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                                <MDBProgress animated preloader value={80} className="my-2" />
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
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
                        count={posts && posts.length}
                        progressValue="25"
                        progressText="Articles & blogs are published"
                    />
                    <DashboardPanels
                        className="far fa-envelope fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Messages"
                        count={messages && messages.length}
                        progressValue="50"
                        progressText="You have this total messages"
                    />
                    <DashboardPanels
                        className="far fa-comments fa-lg default-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"
                        title="Comments"
                        count={posts.comments ? posts[4].comments.length : '1'}
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
                                    <FeaturedBlog featuredArticle={highlightArticle} />
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
                                <MDBBtn onClick={startOnboarding} size="sm">
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
    auth: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile,
    post: state.post,
    messages: state.messages
})

export default connect(mapStateToProps, { loadUser, getCurrentProfile, getPosts, getMessages })(withRouter(Dashboard))
