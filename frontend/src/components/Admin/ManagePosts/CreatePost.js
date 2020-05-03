import React from 'react'
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardBody, MDBCardText, MDBInput, 
    MDBBtn, MDBIcon } from 'mdbreact'

const CreatePost = () => {
    return (
        <MDBContainer>
            <h2>
                Select a preview    
            </h2> 
            <p className="grey-text">
                Your article/blog will be based on the preview you chose
            </p>
            <MDBRow>
                <MDBCol md="3">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/bs-stepper">
                        <MDBCard className="card-hover">
                            <MDBCardBody>
                                <MDBCardText>
                                    Preview One
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol md="3">
                    <a target="_blank" href="#preview2">
                        <MDBCard className="card-hover">
                            <MDBCardBody>
                                <MDBCardText>
                                    Preview Two
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol md="3">
                    <a target="_blank" href="#preview3">
                        <MDBCard className="card-hover">
                            <MDBCardBody>
                                <MDBCardText>
                                    Preview Three
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
            </MDBRow>
            <div className="mt-5">
                <h2>
                    Enter Article/Blog Title
                </h2>
                <p className="grey-text">
                    Choose wisely on naming the article/blog
                </p>
            </div>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput label="Article Title"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput type="textarea" label="Material textarea" rows="10" />
                </MDBCol>
            </MDBRow>
            {/* <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
            </div> */}
            <MDBBtn size="md" color="primary">
            <MDBIcon className="mr-1" icon="pencil-alt"/>Publish Article
            </MDBBtn>
        </MDBContainer>
    )
}

export default CreatePost
