import React, { useState } from 'react'
import {  MDBInput, MDBContainer, MDBBtn, 
    MDBModal, MDBModalBody, MDBIcon
 } from 'mdbreact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../actions/post'
import FBLogin from './Admin/FBLogin'
import groupchat from '../img/group-chat-vector.jpg'

const CreateComment = ({ postId, addComment }) => {

    const [ comment, setComment ] = useState('')

    const [ show, setShow ] = useState(false)

    return (
        <>
            <MDBContainer>
                <form onSubmit={(e)=>{
                        e.preventDefault()
                        addComment( postId, {comment})
                        setComment('')
                        setShow(false)
                    }}>
                    <div style={{ marginLeft: "5%" }} className="w-100">
                        <MDBInput required name="comment" value={comment} onChange={(e)=>setComment(e.target.value)} label="Write what you want to say about this article" outline type="textarea" rows="5"/>
                        <MDBBtn onClick={()=>setShow(true)} className="center-text ml-0" size="sm">post comment</MDBBtn>
                    </div>

                    <MDBModal isOpen={show} toggle={()=>setShow(false)} centered>
                        <MDBModalBody style={{ padding: "10%" }}>
                            <div className="text-center">
                                <h4 className="h4-responsive font-weight-bold">
                                    Publish your comment, your comment; your choice.
                                </h4>
                            </div>
                            <div className="text-center">
                                <img src={groupchat} className="w-75" alt=""/>
                            </div>
                            <div style={{ alignItems: "center" }} className="d-flex flex-column">
                                <div className="d-flex flex-column">
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
                                    <MDBBtn color="light" size="sm" outline>
                                        <div className="grey-text">
                                            Login to your account
                                        </div>
                                    </MDBBtn>
                                    <MDBBtn type="submit" color="light" size="sm" outline>
                                        <div className="grey-text">
                                            As guest
                                        </div>
                                    </MDBBtn>
                                </div>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </form>
            </MDBContainer>
        </>
    )
}

CreateComment.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CreateComment)
