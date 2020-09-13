import React, { useState } from 'react'
import { MDBCard, MDBCardBody, MDBCol, 
    MDBContainer, MDBIcon, MDBTooltip,
    MDBModal, MDBModalBody
} from 'mdbreact'
import pp from '../../img/fred.jpg'
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react-web'
import pageConstruction from '../../img/page-construction.json'

const UserProfiles = ({profiles}) => {

    const [ flip, setFlip ] = useState(false)
    const [ show, setShow ] = useState(false)

    const toggle = () => setShow(!show)

    const userProfiles = profiles.map((profile)=>           
<>
    <MDBCol className="mt-5 mb-5" onClick={()=>setFlip(!flip)} style={{ display: !flip ? 'inline-block': 'none' }} md="3">
        <Flip right>
        <MDBCard>
            <MDBCardBody style={{ cursor: 'pointer' }} className="justify-content-center text-center hoverable">
                <div style={{ marginTop: "-30%", marginBottom: "5%" }}>
                    {/* <MDBIcon size="3x" icon="user-circle" /> */}
                    <img src={profile.profileImage ? profile.profileImage : pp} alt="" className="rounded-circle w-50 mx-auto h-50"/>
                </div>
                <h4 className="h4-responsive font-weight-bold text-capitalize">
                   {profile.firstname && profile.lastname ? `${profile.firstname} ${profile.lastname}` : "Fred Garingo"}
                </h4>
                <p className="grey-text text-capitalize">
                    {profile.status ? profile.status : "Full Javascript Developer"}
                    <br/>
                    <span>
                        {profile.location ? profile.location : "Cebu City, Philippines"}
                    </span>
                </p>
                <div className="d-flex flex-row justify-content-around">
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >
                        <a href={profile.facebook ? profile.facebook : "https://www.facebook.com/"} className="custom-floating-button-social z-depth-1">
                            <MDBIcon fab icon="facebook-f" />                            
                        </a>
                    <span>
                        Facebook Profile
                    </span>
                    </MDBTooltip>
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >
                        <a href={profile.twitter ? profile.twitter : "https://www.twitter.com/"} className="custom-floating-button-social z-depth-1">
                            <MDBIcon fab icon="twitter" />                            
                        </a>
                    <span>
                        Twitter Profile
                    </span>
                    </MDBTooltip>
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >
                        <a href={profile.linkedin ? profile.linkedin : "https://www.linkedin.com/"} className="custom-floating-button-social z-depth-1">
                            <MDBIcon fab icon="linkedin-in" />                            
                        </a>
                    <span>
                        Linkedin Account
                    </span>
                    </MDBTooltip>
                </div>
                <div className="d-flex flex-row justify-content-center mt-4 mb-2">
                    <Link to={profile.user ? `/portfolio/${profile.user._id}` : "/portfolio"} className="white-text">
                        <button className="landing-features-button z-depth-1">
                            View Portfolio
                        </button>
                    </Link>
                </div>
            </MDBCardBody>
        </MDBCard>
        </Flip>
    </MDBCol>
    <MDBCol className="mt-5 mb-5" onClick={()=>setFlip(!flip)} style={{ display: flip ? 'inline-block' : 'none' }} md="3">
        <Flip left>
        <MDBCard>
            <MDBCardBody style={{ cursor: 'pointer' }} className="justify-content-center text-center hoverable">
                <h5 className="h5-responsive font-weight-bold mt-3">
                    Skills Set
                </h5>
                <div onClick={toggle} className="d-flex flex-row justify-content-around mt-4">
                    <MDBTooltip
                            domElement
                            tag="span"
                            placement="bottom"
                        >
                        <span>
                            <MDBIcon className="yellow-text" fab icon="js" />    
                        </span>
                        <span>Javascript Dev</span>           
                    </MDBTooltip> 
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >  
                        <span>
                            <MDBIcon className="black-text" icon="code" />
                        </span>  
                        <span>
                            Programmer
                        </span>
                    </MDBTooltip>   
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >  
                        <span>
                            <MDBIcon className="danger-text" fab icon="angular" />  
                        </span>  
                        <span>
                            Angular Developer
                        </span>
                    </MDBTooltip> 
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="bottom"
                    >  
                        <span>
                            <MDBIcon className="blue-text" fab icon="react" />
                        </span>  
                        <span>
                            React Developer
                        </span>
                    </MDBTooltip>          
                </div>
                <div className="mt-4">
                    <p className="profile-users-bio">
                        <MDBIcon className="mr-2" icon="quote-left" />
                            <span className="grey-text">
                               {profile.bio ? profile.bio : "Lorem ipsum dolor sit amet dolor sit amet, ote" +
                                "consectetur, adipisci velit cupidatat proident."}
                            </span>
                        <MDBIcon className="ml-2" icon="quote-right" />
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-center mt-4 mb-2">
                    <a href={`mailto:${profile.email ? profile.email : 'dossiere@help.com'}`} className="profile-users-button z-depth-1">
                        send message
                    </a>
                </div>
            </MDBCardBody>
        </MDBCard>
        </Flip>
    </MDBCol>
</>
)
    return (
        <>
            {userProfiles}
            
            
            <MDBContainer>
                <MDBModal isOpen={show} toggle={toggle} centered>
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
                            Page is under construction & not yet finished, still preparing it. Please bear with us.
                            </p>
                        </div>
                        <div>
                            <button onClick={toggle} className="newsletter-subscription-button z-depth-1">I understand</button>
                        </div>
                        </div>
                    </div>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        </>
    )
}

export default UserProfiles
