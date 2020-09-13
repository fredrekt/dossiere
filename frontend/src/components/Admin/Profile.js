import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol,
    MDBInput, MDBBtn, MDBCard, MDBCardBody,
    MDBCardText, MDBModal, MDBModalBody, MDBIcon,
    MDBBadge, MDBAnimation
} from 'mdbreact'
import AdminTitle from '../AdminTitle'
import fred from '../../img/fred.jpg' 
import karen from '../../img/karen.jpg' 
// import PanelJob from '../PanelJob'
// import onboarding from '../../img/onboarding-vector.jpg'
import write from '../../img/writing-vector.jpg'
import imageUpload from '../../img/image-upload-vector.jpg'
import workSkills from '../../img/work-time-vector.jpg'
// import upload from '../../img/image-upload-vector.jpg'
import portfolio from '../../img/portfolio-vector.jpg'
import social from '../../img/group-chat-vector.jpg'
import congrats from '../../img/onboarding-congrats-vector.png'
import FBLogin from './FBLogin'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile, addExperience, addSkills, deleteSkill, deleteAccount } from '../../actions/profile'
import { toast } from 'react-toastify'
import ProfileExperience from '../ProfileExperience'
import Lottie from 'lottie-react-web'
import pageConstruction from '../../img/page-construction.json'

toast.configure()

const showToast = toastMsg => {
    toast.error(toastMsg)
}

const Profile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, addExperience, addSkills, deleteSkill, deleteAccount, history }) => {

    //form data post request - create profile (onboarding)
    const [ formData, setFormData ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        status: '',
        location: '',
        skills: '',
        website: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
    })

    //feature still under construction - not done

    const [ available, setAvailable ] = useState(false);

    //add experiences & skills modal
    const [ show, setShow ] = useState(false)

    const [ element, setElement ] = useState({
        modalTitle: "",
        modalImage: null
    })

    const [ showSkills, setSkills ] = useState({
        newSkills: ''
    })

    const [ expData, setExpData ] = useState({
        title: '',
        job_company: '',
        job_location: '',
        from: '',
        to: '',
        job_current: false,
        job_description: '',
    })

    //destructuring

    const { title, job_company, job_location,
    from, to, job_current, job_description } = expData

    const { newSkills } = showSkills
    
    const { modalTitle, modalImage } = element

    const [ exp, setExp ] = useState(false)

    //making my own stepper

    const [ displayExp, setDisplayExp ] = useState(1)

    const handleShow = key => {
        switch(key){
            case "exp":
                setShow(true)
                setElement({ modalTitle: 'No need to rush, time flies', modalImage: portfolio })
                setExp(true)
                setDisplayExp(1)
                break;
            case "skills":
                setShow(true)
                setElement({ modalTitle: 'Literally, takes a second', modalImage: workSkills })
                setExp(false)
                setDisplayExp(3)
                break;
            case "image":
                // setShow(true)
                // setExp(null)
                // setDisplayExp(3)
                // setElement({ modalTitle: 'Upload picture', modalImage: upload})     
                setAvailable(true)
                break;
            default:
                setShow(false)
                showToast('Error, code not working!')
        }
    }

    const onChangeExperiences = e => setExpData({ ...expData, [e.target.name]: e.target.value })

    const createNewSkills = e =>{
        e.preventDefault()
        console.log("added new skills")
        addSkills(showSkills,history)
        setSkills({newSkills:""})
        setShow(false)
    }

    const newExperience = e =>{
        e.preventDefault()
        console.log("add experience")
        addExperience(expData, history)
        setShow(false)
    }

    const changeAvatar = e =>{
        e.preventDefault()
        setShow(false)
        console.log("changed image")
    }


    // ======== USER ONBOARDING MODALS ===========
    //modal onboarding step one
    const [ showStepOne, setShowStepOne ] = useState(false)

    // const handleCloseStepTwo = () => setShowStepOne(false);
    // const handleShowStepTwo = () => setShowStepOne(true);

    //modal onboarding step two
    const [ showStepTwo, setShowStepTwo ] = useState(false)

    //modal onboarding step three
    const [ showStepThree, setShowStepThree ] = useState(false)

    //modal onboarding step four
    const [ showStepFour, setShowStepFour ] = useState(false)
    
    //modal onboarding step five
    const [ showStepFive, setShowStepFive ] = useState(false)

    //modal onboarding final step
    // const [ showFinalStep, setShowFinalStep ] = useState(false)
    
    // //for editing information 
    // const [ displaySocialInputs, toggleSocialInputs ] = useState(false)

    //fetch data for profile of the user
    useEffect(()=>{
        getCurrentProfile();
        //setting the state of profile
        if(profile == null){
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                company: '',
                website: '', 
                location: '',
                status: '',
                skills: '',
                bio: ''
            })
            setShowStepOne(true)
        }
        else{
            setFormData({
                firstname: loading || !profile.firstname ? '' : profile.firstname,
                lastname: loading || !profile.lastname ? '' : profile.lastname,
                email: loading || !profile.email ? '' : profile.email,
                company: loading || !profile.company ? '': profile.company,
                website: loading || !profile.website ? '': profile.website,
                location: loading || !profile.location ? '': profile.location,
                status: loading || !profile.status ? '': profile.status,
                skills: loading || !profile.skills ? '': profile.skills.join(','),
                bio: loading || !profile.bio ? '' : profile.bio
            });
        }
    }, [loading]);

    //destructuring formData state
    const {
        firstname,
        lastname,
        email,
        company,
        status,
        location, 
        skills,
        website,
        bio,
        twitter,
        facebook,
        linkedin
    } = formData

    const adminTitle = [{
        id: 8,
        title: "Account Information | Own Portfolio",
        className: "mt-2 ml-2",
        icon: "user-alt",
        subTitle: "This is an example of All your archived posts & articles are shown below, made by fred."
      }]
    
    //const handleShow = () => setShow(true);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{
        e.preventDefault();
        createProfile(formData, history, profile!==null ? true: false);
    }

    const noExperiences = [{
        title: 'No Experiences Available'
    }]

    const fullname = `${firstname}, ${lastname}`

    return (
        <>
            <AdminTitle adminTitle={adminTitle}/>
            <MDBContainer className="mb-5">
                <MDBCard>
                    <MDBCardBody className="p-5">
                        <>
                        <form onSubmit={(e)=>onSubmit(e)}>
                            <div className="d-flex flex-row justify-content-end mb-5">
                                {/* Facebook Login Sample Design
                                <MDBBtn outline size="sm" color="light">
                                    <div className="grey-text">
                                        <MDBIcon className="mr-1" fab icon="facebook-f"/>Connect facebook
                                    </div>
                                </MDBBtn> */}
                                <FBLogin/>
                                <MDBBtn outline size="sm"  color="light">
                                    <div className="grey-text">
                                        <MDBIcon className="mr-1" fab icon="twitter"/>connect twitter
                                    </div>
                                </MDBBtn>
                                <MDBBtn outline size="sm"  color="light">
                                    <div className="grey-text">
                                        <MDBIcon className="mr-1" fab icon="linkedin-in"/>connect linkedin
                                    </div>
                                </MDBBtn>
                            </div>
                            <MDBRow>
                                <MDBCol md="2" lg="3">
                                    <img src={profile ==null ? karen:fred} className="w-100 rounded-circle" alt=""/>
                                </MDBCol>
                                <MDBCol className="ml-auto" md="10" lg="9">
                                    <div className="ml-5">
                                        <h4 className="font-weight-bold">
                                            Personal Information
                                        </h4>
                                        <MDBInput name="firstname" value={firstname} onChange={(e)=>onChange(e)} label="Your first name" outline className="w-100" />
                                        <MDBInput name="lastname" value={lastname} onChange={(e)=>onChange(e)} className="w-100" outline label="Your last name"/>
                                        <MDBInput name="location" value={location} onChange={(e)=>onChange(e)} className="w-100" outline label="Your current location"/>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className="text-center" md="2" lg="3">
                                    <MDBBtn onClick={()=>handleShow('image')} size="sm" color="light" outline>
                                        <div className="grey-text">upload image</div> 
                                    </MDBBtn>
                                    <MDBCard style={{ marginTop: "5%" }}>
                                        <MDBCardBody>
                                            <MDBCardText>
                                            <MDBIcon icon="quote-left mr-2" />
                                            { profile ? profile.bio : "Hello World and this is my own bio and that will be all thank you very much God bless!"}
                                            <MDBIcon icon="quote-right ml-2" />
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="10" lg="9">
                                    <div className="ml-5">
                                        <h4 className="font-weight-bold">
                                            Contact Information
                                        </h4>
                                        <MDBInput name="fullname" disabled value={ profile === null || profile.firstname === null || profile.lastname === null ? 'Full name not set' : fullname } label="Full Name" outline className="w-100" />
                                        <MDBInput name="email" value={email} onChange={(e)=>onChange(e)} className="w-100" outline label="Work / Business Email"/>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className="text-center" md="2" lg="3">
                                    <h4 style={{ marginTop: "10%" }} className="font-weight-bold">
                                        Experiences
                                    </h4>
                                    <div className="experiences-container" style={{ overflowY:  profile === null || profile.experiences.length === 0  ? 'hidden' : 'scroll'  }}>
                                       <ProfileExperience experience={!profile ? noExperiences :profile.experiences}/>
                                        <MDBCard style={{ marginTop: "10%", display: !profile ? 'none' : 'block' }}>
                                            <MDBCardBody>
                                                <MDBCardText onClick={()=>handleShow('exp')} style={{ cursor: "pointer" }}>
                                                    <div className="d-flex flex-row justify-content-center">
                                                        <div>
                                                            Add Experience
                                                        </div>
                                                        <div className="ml-2">
                                                            <MDBIcon icon="plus" />
                                                        </div>
                                                    </div> 
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </div>
                                </MDBCol>
                                <MDBCol md="10" lg="9">
                                    <div className="ml-5">
                                        <h4 className="font-weight-bold">
                                            Secure Account
                                        </h4>
                                        <MDBInput type="password" name="oldPassword" value="oldpasswordhere" label="Current password" outline className="w-100" />
                                        <MDBInput type="password" name="newPassword" value="newpasswordhere" className="w-100" outline label="New Password"/>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol lg="3" md="2">
                                    <div className="mt-5 mb-2">
                                        <h4 className="font-weight-bold text-center">
                                            Skills
                                        </h4>  
                                    </div>
                                    <div>
                                        {   !profile ? <div className="text-center">No Skills available yet</div> :
                                            profile.skills.map((value,index)=>(
                                             <MDBBadge onClick={()=>deleteSkill(value)} className="p-2 m-1 mr-1" color="info">{value}</MDBBadge>
                                        ))}
                                        {/* <MDBBadge className="p-2 m-1 mr-1" color="info">StrapiJS</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="warning">GatsbyJS</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="danger">GraphQL</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="light">Redux</MDBBadge>
                                        <MDBBadge className="p-2 m-1 mr-1" color="dark">Machine Learning</MDBBadge> */}
                                        <MDBBadge style={{ cursor: 'pointer', display: !profile ? 'none' : 'inline' }} onClick={()=>handleShow('skills')} className="p-2 m-1 mr-1" color="default">Add skills</MDBBadge>
                                    </div>
                                </MDBCol>
                                <MDBCol lg="9" md="10">
                                    <div className="ml-5">
                                        <h4 className="font-weight-bold">
                                            Work Information
                                        </h4>
                                        <MDBInput type="text" name="company" value={company} onChange={(e)=>onChange(e)} label="Your company" outline className="w-100" />
                                        <MDBInput type="text" name="status" value={status} onChange={(e)=>onChange(e)} label="Your job status" outline className="w-100" />
                                        <MDBInput style={{ display: profile === null ? 'inline' : 'none' }} type="text" name="skills" value={skills} onChange={(e)=>onChange(e)} label={profile === null ? "Your Skills" : ''} outline className="w-100" />
                                        <MDBInput type="textarea" rows="3" name="bio" value={bio} onChange={(e)=>onChange(e)} label="Your Bio" outline className="w-100" />
                                        <MDBInput type="text" name="website" value={website} onChange={(e)=>onChange(e)} label="Your website" outline className="w-100" />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="2">

                                </MDBCol>
                                <MDBCol md="10">
                                    <div style={{ marginLeft: "15%" }}>
                                        <MDBBtn type="submit" size="sm" color="success">
                                            {profile==null ? 'save changes': 'update profile'}
                                        </MDBBtn>
                                        <MDBBtn onClick={()=>deleteAccount()} size="sm" color="danger" type="button">
                                            Delete Account
                                        </MDBBtn>
                                    </div>
                                </MDBCol> 
                            </MDBRow>
                            </form>
                        </>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>   

            {/* Add Profile Picture Modal, Add Experience & Add Skills Starts */}

            
            <MDBModal centered size="md" isOpen={show}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
                        <MDBIcon icon="times" />
                    </div>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                    <form onSubmit={exp ? (e)=>newExperience(e) : exp===null ? (e)=>changeAvatar(e) : (e)=>createNewSkills(e) }>
                        <div>
                            <h4 className="h4-reponsive font-weight-bold">
                                {!modalTitle ? 'blank title': modalTitle }
                            </h4>
                        </div>
                        <div>
                            <img src={modalImage} className="w-75" alt={!exp ? "add skills": exp===null ? "upload pic": "add experience"}/>
                        </div>
                        <div>
                            <p className="grey-text">
                                We just need a few things from you, let's get this shit started up lorem ipsum
                            </p>
                        </div>
                        <>
                            {exp ? 
                            (
                            <>
                                <div style={{ display: displayExp === 1 ? 'inline' : 'none' }} className="company-container">
                                    <div>
                                        <h5 className="h5-responsive font-weight-bold">
                                            Company Details
                                        </h5>
                                    </div>
                                    <div id="jobCompany">
                                        <div style={{ width: "200%"}}>
                                            <MDBInput name="job_company" value={job_company} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="The Company Name" />
                                        </div>
                                        <div style={{ width: "200%"}}>
                                            <MDBInput name="job_location" value={job_location} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="Company's Location" />
                                        </div>
                                    </div>
                                </div>
                                <div id="jobInformation" style={{ display: displayExp === 2 ? 'inline' : 'none'  }} className="job-container">
                                    <div>
                                        <h5 className="h5-responsive font-weight-bold">
                                            Job Title
                                        </h5>
                                    </div>
                                    <div style={{ width: "200%"}}>
                                        <MDBInput name="title" value={title} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="The Job Title" />
                                    </div>
                                
                                    <div style={{ width: "200%"}}>
                                        <MDBInput name="job_description" value={job_description} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="Job Description" />
                                    </div>
                                </div>
                                <div id="jobDuration" style={{ display: displayExp === 3 ? 'inline' : 'none' }} className="job-status">
                                    <div>
                                        <h5 className="h5-responsive font-weight-bold">
                                            Job Duration
                                        </h5>
                                    </div>
                                    <div style={{ width: "200%"}}>
                                        <MDBInput name="from" value={from} onChange={(e)=>onChangeExperiences(e)} outline type="date" label="Date Started" />
                                    </div>
                                    <div style={{ width: "200%"}}>
                                        <MDBInput name="to" value={to} onChange={(e)=>onChangeExperiences(e)} outline type="date" label="Date Ended" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <MDBBtn type="button" style={{ display: displayExp === 3 ? "none" : "inline" }} onClick={()=>setDisplayExp(displayExp+1)} size="sm">
                                        next step
                                    </MDBBtn>
                                </div>
                            </>
                            ):
                            exp===null ? 
                            (
                            <>
                                <div style={{ width: "200%" }}>
                                    <MDBInput style={{ width: "100%" }} outline type="text" label="Add Image " />
                                </div>
                            </>
                            )
                            :(
                            <>
                                <div style={{ width: "200%"}}>
                                    <MDBInput 
                                    outline type="text"
                                    name="newSkills"
                                    value={newSkills}
                                    onChange={e =>setSkills({newSkills:e.target.value})}
                                    label="Tell me more about your skills" />
                                </div>
                            </>
                            )}
                        </>
                        <div>
                            <MDBBtn style={{ display: displayExp!==3 ? "none" : "inline" }} type="submit" size="sm">
                                {exp ? 'save experience': exp===null ? 'upload image' :'save skills'}
                            </MDBBtn>
                        </div>
                    </form>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal> 
            

            {/* Add Profile Picture Modal, Add Experience & Add Skills Ends */}

            {/* Onboarding Step One */}
            <MDBModal side position="top-left" size="sm" isOpen={showStepOne}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <img src={imageUpload} className="w-100" alt="onboarding team"/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Step One
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Get yourself a photo for your profile picture.
                            </p>
                        </div>
                        <div>
                            <MDBBtn onClick={()=>{
                                    setShowStepOne(false)
                                    setShowStepTwo(true)
                                }} size="sm">
                                agree to disagree
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
            {/* Onboarding Step two */}
            <MDBModal side position="bottom-right" size="sm" isOpen={showStepTwo}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <img src={write} className="w-100" alt="onboarding team"/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Step Two 
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Make sure to put in the correct information asked
                            </p>
                        </div>
                        <div>
                            <MDBBtn onClick={()=>{
                                setShowStepTwo(false)
                                setShowStepThree(true)
                                }} size="sm">
                                agree to disagree
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
            {/* Onboarding Step Three */}
            <MDBModal side position="bottom-left" size="sm" isOpen={showStepThree}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <img src={portfolio} className="w-100" alt="onboarding team"/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Step Three 
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Below your profile picture, you can add experiences as well as your skills overtime
                            </p>
                        </div>
                        <div>
                            <MDBBtn onClick={()=>{
                                setShowStepThree(false)
                                setShowStepFour(true)
                                }} size="sm">
                                agree to disagree
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
            {/* Onboarding Step Four */}
            <MDBModal side position="top-right" size="sm" isOpen={showStepFour}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <img src={social} className="w-100" alt="onboarding team"/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Step Four 
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Connect with social accounts for your profile (optional)
                            </p>
                        </div>
                        <div>
                            <MDBBtn onClick={()=>{
                                setShowStepFour(false)
                                setShowStepFive(true)
                                }} size="sm">
                                agree to disagree
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
            {/* Onboarding Step Five */}
            {/* Final Step of Onboarding */}
            <MDBModal centered size="md" isOpen={showStepFive}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <MDBAnimation count={4} type="shake">
                                <img src={congrats} className="w-100" alt="onboarding team"/>
                            </MDBAnimation>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Congratulations, you made it!
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Hit on save changes to create your own profile
                            </p>
                        </div>
                        <div>
                            <MDBBtn onClick={()=>{
                                setShowStepFive(false)
                                }} size="sm">
                                agree to disagree
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>

            <MDBContainer>
                <MDBModal isOpen={available} toggle={()=>setAvailable(!available)} centered>
                    <MDBModalBody>
                    <div className="p-5">
                        <div className="text-center">
                        <div>
                            <Lottie
                            options={{
                                animationData: pageConstruction
                            }}
                            />
                        </div>
                        <div>
                            <p className="grey-text">
                            This feature is under construction & not yet finished, still preparing it. Please bear with us.
                            </p>
                        </div>
                        <div>
                            <button onClick={()=>setAvailable(!available)} className="newsletter-subscription-button z-depth-1">I understand</button>
                        </div>
                        </div>
                    </div>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        </>
    )
}

Profile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    addExperience: PropTypes.func.isRequired,
    addSkills: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile, addExperience, addSkills, deleteSkill, deleteAccount })(withRouter(Profile))
