import React, { useState } from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBBtn,
    MDBInput, MDBIcon, MDBRow, MDBCol } from 'mdbreact'
import write from '../img/writing-vector.jpg'
import portfolio from '../img/portfolio-vector.jpg'
import upload from '../img/image-upload-vector.jpg'
import workSkills from '../img/work-time-vector.jpg'
import { toast } from 'react-toastify'

toast.configure()

const showToast = toastMsg => {
    toast.error(toastMsg)
}

const ProfileModal = () => {

    const [ show, setShow ] = useState(false)

    const [ element, setElement ] = useState({
        modalTitle: "",
        modalImage: null
    })

    const [ showSkills, setSkills ] = useState({
        newSkills: ''
    })

    const [ expData, setExpData ] = useState({
        job_title: '',
        job_company: '',
        job_location: '',
        job_description: '',
        job_started: '',
        job_ended: ''   
    })

    //destructuring

    const { job_title, job_company, job_location, job_description,
        job_started, job_ended } = expData

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
                setShow(true)
                setExp(null)
                setDisplayExp(3)
                setElement({ modalTitle: 'Upload picture', modalImage: upload})     
                break;
            default:
                setShow(false)
                showToast('Error, code not working!')
        }
    }

    const onChangeExperiences = e => setExpData({ ...expData, [e.target.name]: e.target.value })

    const addSkills = async e =>{
        e.preventDefault()
        const additionalSkills = await newSkills
        console.log("add skills")
        alert(additionalSkills)
        setShow(false)
    }

    const addExperience = async e =>{
        e.preventDefault()
        console.log("add experience")
        const data = await expData
        alert(data.job_company+ ' '+ data.job_location)
        setShow(false)
    }

    const changeAvatar = e =>{
        e.preventDefault()
        setShow(false)
        console.log("changed image")
    }

    return (
        <>    
        <MDBBtn size="sm" onClick={() => handleShow('exp')}>Add experience</MDBBtn>
        <MDBModal centered size="md" isOpen={show}>
            <MDBModalBody style={{ padding: "10%" }}>
                <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
                    <MDBIcon icon="times" />
                </div>
                <MDBContainer className="d-flex flex-column text-center justify-content-center">
                <form onSubmit={exp ? (e)=>addExperience(e) : exp===null ? (e)=>changeAvatar(e) : (e)=>addSkills(e) }>
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
                                    <MDBInput name="job_title" value={job_title} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="The Job Title" />
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
                                    <MDBInput name="job_started" value={job_started} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="Date Started" />
                                </div>
                                <div style={{ width: "200%"}}>
                                    <MDBInput name="job_ended" value={job_ended} onChange={(e)=>onChangeExperiences(e)} outline type="text" label="Date Ended" />
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
        <MDBBtn size="sm" onClick={() => handleShow('skills')}>add new skills</MDBBtn>
        <MDBBtn size="sm" onClick={() => handleShow('image')}>change picture</MDBBtn>
        <MDBBtn size="sm" onClick={() => handleShow()}>code error</MDBBtn>
        </>
    )
}

export default ProfileModal
