import React from 'react'
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardBody, MDBCardText, MDBInput, 
    MDBBtn, MDBIcon } from 'mdbreact'

const CreatePost = () => {
    return (
        <MDBContainer className="create-post-container">
            <h2>
                Select a preview    
            </h2> 
            <p className="grey-text">
                Your article/blog will be based on the preview you chose
            </p>
            <MDBRow>
                <MDBCol md="3">
                    <a href="#!">
                        <input type="radio"/>
                        <MDBCard className="card-hover">
                            <MDBCardBody>
                                <MDBCardText>
                                    Priview One
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
                    <MDBInput type="textarea" label="Write your article content" rows="10" />
                </MDBCol>
            </MDBRow>
            {/* <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
            </div> */}
            <div className="mt-5">
                <h2>
                    Select how many sections you want
                </h2>
                <p className="grey-text">
                    Choose below to add to your sections
                </p>
            </div>
            <MDBRow>
                <MDBCol md="6">
                    <select className="browser-default custom-select">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </MDBCol>
                <MDBCol md="3">
                    <MDBBtn size="sm" className="mt-1">
                        +
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput label="Section Title"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput type="textarea" label="Write your section content" rows="10" />
                </MDBCol>
            </MDBRow>
            <MDBBtn size="md" color="primary">
            <MDBIcon className="mr-1" icon="pencil-alt"/>Publish Article
            </MDBBtn>
        </MDBContainer>
    )
}

export default CreatePost
