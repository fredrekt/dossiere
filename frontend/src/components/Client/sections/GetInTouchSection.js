import React, { useState } from 'react'
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

toast.configure()

const showToast = toastMsg =>{
    toast.success(toastMsg)
}

const failToast = toastMsg =>{
    toast.error(toastMsg)
}

const GetInTouchSection = ({userID, workEmail}) => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [ btn, setBtn ] = useState('Submit')

    const { name, email, subject, message  } = formData

    const onSubmit = async e =>{
        e.preventDefault()
        const config = {
            headers: { 
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post(`/api/portfolios/message/${userID}`, formData, config)
        if(res.length === 0 || res === 'undefined') failToast('Message failed to send')
        setBtn(
            <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
        setTimeout(() =>{
            showToast('Message sent')
            setBtn('Submit')
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        },1300)
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <>
        <MDBContainer fluid className="contact-container-wrapper">
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <MDBContainer className="p-5">
                            <MDBRow>
                                <MDBCol md="6">
                                    <h3 className="font-weight-bold">Get In Touch</h3>

                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                        molestiae
                                        numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

                                    <p><span className="font-weight-bold mr-2">Email:</span><a href="$contactcompany">{workEmail ? workEmail : "contact@mycompany.com"}</a></p>

                                    <p><span className="font-weight-bold mr-2">Phone:</span><a href="#contactnumber">+48 123 456 789</a></p>
                                
                                </MDBCol>
                                <MDBCol md="6">
                                    <form onSubmit={(e)=>onSubmit(e)}>
                                    <div className="contact-container">
                                        
                                        <MDBInput type="text" name="name" value={name} onChange={(e)=>onChange(e)} label="Full Name" outline className="w-100" />

                                        <MDBInput type="text" name="email" value={email} onChange={(e)=>onChange(e)} className="w-100" outline label="Your Email"/>


                                        <MDBInput type="text" name="subject" value={subject} onChange={(e)=>onChange(e)} className="w-100" outline label="Your Subject"/>


                                        <div className="md-form md-outline mb-3">
                                            <MDBInput style={{ overflow: "auto" }} type="textarea" name="message" value={message} onChange={(e)=>onChange(e)} id="form-message" label="How we can help?" className="md-textarea form-control" rows="3"/>
                                        </div>

                                        <button type="submit" className={message.length > 0 && email.length > 0 && name.length > 0 && subject.length > 0? "btn btn-default btn-sm ml-0" : "btn btn-default btn-sm ml-0 disabled"}>{btn}<i className="far fa-paper-plane ml-2"/></button>
                                    
                                    </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </MDBContainer>
        </>
    )
}

export default GetInTouchSection
