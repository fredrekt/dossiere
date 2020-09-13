import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardBody, MDBCardText, MDBInput, 
    MDBBtn, MDBIcon, MDBModal, MDBModalBody } from 'mdbreact'
import AdminTitle from '../../AdminTitle'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../../../actions/post'
import Lottie from 'lottie-react-web'
import pageConstruction from '../../../img/page-construction.json'

const CreatePost = ({ createPost, posts, loading, history }) => {

    const [ formData, setFormData ] = useState({
        title: '',
        topic: '',
        content: '',
        section: '',
        sectionTitle: '',
        sectionContent: ''
    })

    const [ show, setShow ] = useState(false)

    const [ Btn, setBtn ] = useState('Publish Article')

    const { title, topic, content, section, sectionTitle, sectionContent } = formData

    const adminTitle = [{
        id: 2,
        icon: "pencil-alt",
        className: "mt-2 ml-2",
        title: "Compose An Article",
        subTitle: "This is an example definition of what you're gonna do with this type of composing of an article period."
    }]

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    return (
    <>
        <AdminTitle adminTitle={adminTitle}/>
        <MDBContainer className="create-post-container z-depth-2 p-5">
            <form onSubmit={(e)=>{ 
                e.preventDefault()
                setBtn(
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) 
                createPost(formData, history)
                if(posts.error !== null ){
                    setTimeout(() =>{
                        setBtn('Publish Article')
                    },1000)
                }
                else{
                setTimeout(() =>{
                    setBtn('Publish Article')
                    setFormData({
                        title: title.length < 0 ? '': title,
                        topic: 'Choose your topic',
                        content: content.length < 0 ? '' : content,
                        section: '',
                        sectionTitle: '',
                        sectionContent: ''
                    })
                },3000)
                }

                }}>
            <h2>
                Select a preview    
            </h2> 
            <p className="grey-text">
                Your article/blog will be based on the preview you chose
            </p>
            <MDBRow>
                <MDBCol md="3">
                    <a href="#preview1" onClick={()=>setShow(true)}>
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
                    <a href="#preview2" onClick={()=>setShow(true)}>
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
                    <a href="#preview3" onClick={()=>setShow(true)}>
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
                    <MDBInput name="title" value={title} onChange={(e)=>onChange(e)}  label="Article Title"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9"> 
                    <div className="grey-text mt-3 mb-3">
                        Please select what is the topic of article is about
                    </div>
                    <div className="w-100">
                        <select name="topic" value={topic} onChange={(e)=>onChange(e)} className="browser-default custom-select">
                            <option>Choose your topic</option>
                            <option value="Blog">Blog</option>
                            <option value="News">News</option>                    
                            <option value="Showcase">Showcase</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Portfolio">Portfolio</option>
                            <option value="Work">Work</option>
                        </select>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput style={{ overflowY: "auto" }} name="content" value={content} onChange={(e)=>onChange(e)} type="textarea" label="Write your article content" rows="10" />
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
                    <select name="section" value={section} onChange={(e)=>onChange(e)} className="browser-default custom-select">
                    <option value="1">Single Section</option>
                    <option value="2">Option 1</option>
                    <option value="3">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </MDBCol>
                <MDBCol md="3">
                    <MDBBtn onClick={()=>setShow(true)} size="sm" className="mt-1">
                        +
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput name="sectionTitle" value={sectionTitle} onChange={(e)=>onChange(e)}label="Section Title"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="9">
                    <MDBInput name="sectionContent" value={sectionContent} onChange={(e)=>onChange(e)} type="textarea" label="Write your section content" rows="10" />
                </MDBCol> 
            </MDBRow>
            <MDBBtn type="submit" className="ml-0" size="md" color="default">
            <MDBIcon className="mr-1" icon="pencil-alt"/>{Btn}
            </MDBBtn>
            </form>
        </MDBContainer>

              
      <MDBContainer>
        <MDBModal isOpen={show} toggle={()=>setShow(!show)} centered>
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
                    This Feature is under construction & not yet finished, still preparing it. Please bear with us.
                    </p>
                </div>
                <div>
                    <button onClick={()=>setShow(!show)} className="newsletter-subscription-button z-depth-1">I understand</button>
                </div>
                </div>
            </div>
            </MDBModalBody>
        </MDBModal>
      </MDBContainer>

    </>
    )
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.post.posts,
    loading: state.post.loading,
    error: state.post.error
})


export default connect(mapStateToProps, { createPost })(CreatePost)
