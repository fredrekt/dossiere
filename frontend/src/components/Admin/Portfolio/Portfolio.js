import React, { useState, useEffect } from 'react'
import AdminTitle from '../../AdminTitle'
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardBody, MDBInput, MDBBtn,
    MDBProgress, MDBIcon, MDBTableHead, MDBTable, MDBTableBody
} from 'mdbreact'
import { connect } from 'react-redux'
import { createPortfolio, getOwnPortfolio, addSkill, 
    addTestimony, removeSkill, removeTestimony, 
    updatePortfolio, deletePortfolio } from '../../../actions/portfolio'
import { getCurrentProfile } from '../../../actions/profile'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const Portfolio = ({ getCurrentProfile, createPortfolio, getOwnPortfolio, updatePortfolio, addSkill, addTestimony, deletePortfolio, removeSkill, removeTestimony, portfolio: { portfolio, loading, error }, profile: { profile }, history }) => {

    const [ formData, setFormData ] = useState({
        dailyHobby: '',
        whatYouDo: '',
        whyHireMe: '',
        projectsCompleted: '',
        happyClients: '',
        skill: '',
        description: '',
        name: '',
        status: '',
        testimony: ''
    })

    const [ btn, setBtn ] = useState('Create Portfolio')

    const [ count, setCount ] = useState(0)

    const [ err, setErr ] = useState(false)

    useEffect(()=>{
        getOwnPortfolio()
        getCurrentProfile()
        if(portfolio === null){
            setFormData({
                dailyHobby: '',
                whatYouDo: '',
                whyHireMe: '',
                projectsCompleted: '',
                happyClients: '',
                skill: '',
                description: '',
                name: '',
                status: '',
                testimony: ''
            })
        }
        else{
            setFormData({
                dailyHobby: loading || !portfolio.dailyHobby ? '' : portfolio.dailyHobby,
                whatYouDo: loading || !portfolio.whatYouDo ? '': portfolio.whatYouDo,
                whyHireMe: loading || !portfolio.whyHireMe ? '': portfolio.whyHireMe,
                projectsCompleted: loading || !portfolio.projectsCompleted ? '': portfolio.projectsCompleted,
                happyClients: loading || !portfolio.happyClients ? '': portfolio.happyClients,
                skill: loading || !portfolio.skill ? '': portfolio.skill,
                description: loading || !portfolio.description ? '': portfolio.description,
                name: loading || !portfolio.name ? '': portfolio.name,
                status: loading || !portfolio.status ? '': portfolio.status,
                testimony: loading || !portfolio.testimony ? '': portfolio.testimony
            })
        }
    },[loading])

    const { 
        dailyHobby,
        whatYouDo,
        whyHireMe,
        projectsCompleted,
        happyClients,
        skill,
        description,
        name,
        status,
        testimony
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e =>{
        e.preventDefault()
        setCount(count+1)
        setBtn(
            <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
        createPortfolio(formData, history, portfolio!==null ? true: false)

        // if(error !== null){
        //     setErr(!err)
        // }
        
        setTimeout(() =>{
            setBtn('Create Portfolio')
        },3000)
    }

    const adminTitle = [{
        id: 91,
        title: "Digital Portfolio",
        className: "mt-2 ml-2",
        icon: "th-list",
        subTitle: "This is an example of All your archived posts & articles are shown below, made by fred."
    }]

    const loadingAdminTitle = [{
        id:51,
        title: "The text is still loading bear with us for a while.",
        topic: "Programming",
        className : "mt-2 ml-1",
        icon : "",
        subTitle: <>
                    <MDBProgress animated preloader value={80} className="my-2" />
                </>,
    }]

    const deleteFunction = portfolio !== null && (
        <MDBContainer className="p-5">
            <div className="mt-5">
                <h5 className="h5-responsive">
                    Remove Skill
                </h5>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>ID #</th>
                            <th>Skill</th>
                            <th>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {portfolio.selectedSkills && portfolio.selectedSkills.map((skill)=>                                
                        <tr>
                            <td>
                                {skill._id}
                            </td>
                            <td>
                                {skill.skill}
                            </td>
                            <td>
                                <MDBBtn onClick={(e)=>{
                                    e.preventDefault()
                                    removeSkill(skill._id)
                                    }} size="sm" color="danger">
                                    <MDBIcon far icon="trash-alt"/>
                                </MDBBtn>
                            </td>
                        </tr>
                        )}
                    </MDBTableBody>
                </MDBTable>
            </div>
            <div className="mt-5">
                <h5 className="h5-responsive">
                    Remove Testimony
                </h5>
                <MDBTable hover>
                    <MDBTableHead>
                    <tr>
                        <th>ID #</th>
                        <th>Name</th>
                        <th>Job Status</th>
                        <th>Action</th>
                    </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {portfolio.testimonials && portfolio.testimonials.map((testimony)=>
                        <tr>
                            <td>
                                {testimony._id}
                            </td>
                            <td>
                                {testimony.name}
                            </td>
                            <td>
                                {testimony.status}
                            </td>
                            <td>
                                <MDBBtn onClick={(e)=>{
                                    e.preventDefault()
                                    removeTestimony(testimony._id)
                                    }} size="sm" color="danger">
                                    <MDBIcon far icon="trash-alt"/>
                                </MDBBtn>
                            </td>
                        </tr>
                        )}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </MDBContainer>
    )

    return loading && portfolio === null ? (
        <>
            <AdminTitle adminTitle={loadingAdminTitle}/>
            <MDBContainer className="mt-5">
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
    ) : (
        <>
            <AdminTitle adminTitle={adminTitle}/>
            <MDBCard style={{ borderLeft: count === 0 && '4px solid #0099ff', borderTop: count === 1 && '4px solid #0099ff', borderRight: count === 2 && '4px solid #0099ff', borderBottom: count === 3 && '4px solid #0099ff' }}>
                <MDBCardBody>
                    <MDBContainer style={{ display: portfolio !== null ? 'none' : 'inline-block' }} className="p-5">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="d-flex flex-row justify-content-around text-center">
                                <div style={{ cursor: 'pointer'}} onClick={()=>setCount(0)} className="">
                                    <div className={count === 0 ? "stepper-active mx-auto" : "stepper-done mx-auto"}>
                                        {count === 0 ? '1' : <MDBIcon icon="check"/>}
                                    </div>
                                    <div style={{ color: count === 0 ? 'black' : 'grey' }} className="mt-1 font-weight-bold">
                                        Personal Information
                                    </div>
                                </div>
                                <div onClick={()=>setCount(1)} style={{ cursor: 'pointer'}}>
                                    <div className={count === 1 ? "stepper-active mx-auto" : count > 1 ? "stepper-done mx-auto" : err ? "stepper-error mx-auto" : "stepper mx-auto"}>
                                        {count <= 1 ? '2' : err ? <MDBIcon icon="times" /> : <MDBIcon icon="check" />}
                                    </div>
                                    <div style={{ color: count === 1 ? 'black' : 'grey' }} className="mt-1 font-weight-bold">
                                        Work Details
                                    </div>
                                </div>
                                <div onClick={()=>setCount(2)}  style={{ cursor: 'pointer'}}>
                                    <div className={count === 2 ? "stepper-active mx-auto" : count > 2 ? "stepper-done mx-auto" : "stepper mx-auto"}>
                                        {count <= 2 ? '3' : <MDBIcon icon="check" />}
                                    </div>
                                    <div style={{ color: count === 2 ? 'black' : 'grey' }} className="mt-1 font-weight-bold">
                                        Showcase Skills
                                    </div>
                                </div>
                                <div onClick={()=>setCount(3)} style={{ cursor: 'pointer'}}> 
                                    <div className={count === 3 ? "stepper-active mx-auto": count >=4 ? "stepper-done mx-auto" : "stepper mx-auto"}>
                                        {count <= 3 ? '4' : <MDBIcon icon="check" />}
                                    </div>
                                    <div  style={{ color: count === 3 ? 'black' : 'grey'}} className="mt-1 font-weight-bold">
                                        Testimonials
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={(e)=>onSubmit(e)}>
                        <div style={{display: count === 0 ? 'inline' : 'none'}}>
                            <div style={{ textAlign: '-webkit-center' }} className="mt-5">
                                <p className="grey-text">
                                    Tell us something about yourself
                                </p>
                                <div className="mx-auto">
                                    <MDBInput name="dailyHobby" value={dailyHobby} onChange={(e)=>onChange(e)} label="Your Daily Hobby" outline rows="2" type="textarea"/>
                                    <MDBInput name="whatYouDo" value={whatYouDo} onChange={(e)=>onChange(e)}  label="What You Do?" outline rows="2" type="textarea"/>
                                    <MDBInput name="whyHireMe" value={whyHireMe} onChange={(e)=>onChange(e)}  label="Why Hire You" outline rows="5" type="textarea"/>
                                </div>
                            </div>
                        </div>
                        <div style={{display: count === 1 ? 'inline' : 'none'}}>
                            <div style={{ textAlign: '-webkit-center' }} className="mt-5">
                                <p className="grey-text">
                                    Share something about your projects 
                                </p>
                                <MDBInput name="projectsCompleted" value={projectsCompleted} onChange={(e)=>onChange(e)}  label="How Many Projects Completed" outline type="number"/>
                                <MDBInput name="happyClients" value={happyClients} onChange={(e)=>onChange(e)}  label="How Many Happy Clients" outline type="number"/>  
                            </div>
                        </div>
                        <div style={{display: count === 2 ? 'inline' : 'none'}}>
                            <div style={{ textAlign: '-webkit-center' }} className="mt-5">
                                <p className="grey-text">
                                    Showcase your skills & talents to the world
                                </p>
                                <div style={{ display: portfolio === null ? 'inline' : 'none' }}>
                                    {/* <MDBInput name="skill" value={skill} onChange={(e)=>onChange(e)}  label="Your Skill" outline type="text"/> */}
                                    <select name="skill" value={skill} onChange={(e)=>onChange(e)} className="browser-default w-50 custom-select">
                                        <option>Choose skills</option>
                                        {profile.skills.map((optionSkill)=>
                                            <option className="text-capitalize" value={optionSkill}>{optionSkill}</option>
                                        )}
                                    </select>
                                    <MDBInput name="description" value={description} onChange={(e)=>onChange(e)} label="Skill Description" outline rows="5" type="textarea"/>
                                </div>
                            </div>
                        </div>
                        <div style={{display: count >= 3 ? 'inline' : 'none'}}>
                            <div style={{ textAlign: '-webkit-center' }} className="mt-5">
                                <p className="grey-text">
                                    Something what your clients said about you
                                </p>    
                                <MDBInput name="name" value={name} onChange={(e)=>onChange(e)}  label="Testimonial Name" outline type="text"/>
                                <MDBInput name="status" value={status} onChange={(e)=>onChange(e)}  label="Testimonial Status" outline type="text"/>
                                <MDBInput name="testimony" value={testimony} onChange={(e)=>onChange(e)}  label="Testimonial Testimony" outline rows="5" type="textarea"/>
                                <MDBBtn className={testimony.length <= 0 && "disabled"} color="success" size="sm" type="submit">
                                    {portfolio!==null ? 'Update changes' : btn}
                                </MDBBtn>
                            </div>
                        </div>                           
                        </form>
                        <div className="text-center">
                            <MDBBtn  style={{ display: count < 3 ? 'inline' : 'none'}} size="sm" color="danger" onClick={()=>setCount(count+1)}>
                                next
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                    <MDBContainer style={{ display: portfolio === null ? 'none' : 'inline-block' }} className="p-5">
                        <div className={portfolio === null && "mt-5"}>
                            <h5 className="h5-responsive">
                                Update Portfolio
                            </h5>
                        <form onSubmit={(e)=>{
                                e.preventDefault()
                                updatePortfolio(formData)
                            }}>
                            <MDBInput name="dailyHobby" value={dailyHobby} onChange={(e)=>onChange(e)} label="Your Daily Hobby" outline rows="2" type="textarea"/>
                            <MDBInput name="whatYouDo" value={whatYouDo} onChange={(e)=>onChange(e)}  label="What You Do?" outline rows="2" type="textarea"/>
                            <MDBInput name="whyHireMe" value={whyHireMe} onChange={(e)=>onChange(e)}  label="Why Hire You" outline rows="5" type="textarea"/>
                            <MDBInput name="projectsCompleted" value={projectsCompleted} onChange={(e)=>onChange(e)}  label="How Many Projects Completed" outline type="number"/>
                            <MDBInput name="happyClients" value={happyClients} onChange={(e)=>onChange(e)}  label="How Many Happy Clients" outline type="number"/>  
                            <MDBBtn type="submit" color="success" size="sm">
                                update information
                            </MDBBtn>
                            <MDBBtn style={{ display: portfolio === null ? 'none' : 'inline-block' }} size="sm" color="danger" onClick={()=>deletePortfolio(history)}>
                                Reset Portfolio
                            </MDBBtn>
                        </form>
                        </div>
                    </MDBContainer>
                    <MDBContainer style={{ display: portfolio === null ? 'none' : 'inline-block' }}  className="p-5">
                        <div className="mt-5">
                            <h5 className="h5-responsive">
                                Add Testimony
                            </h5>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                const newTestimony = {
                                    name,
                                    status,
                                    testimony
                                }
                                addTestimony(newTestimony, portfolio.user)
                                }}>
                                <MDBInput name="name" value={name} onChange={(e)=>onChange(e)}  label="Testimonial Name" outline type="text"/>
                                <MDBInput name="status" value={status} onChange={(e)=>onChange(e)}  label="Testimonial Status" outline type="text"/>
                                <MDBInput name="testimony" value={testimony} onChange={(e)=>onChange(e)}  label="Testimonial Testimony" outline rows="5" type="textarea"/>
                                <MDBBtn type="submit" color="success" size="sm">
                                    add testimony
                                </MDBBtn>
                            </form>
                        </div>
                        <div className="mt-5">
                            <h5 className="h5-responsive">
                                Add skill
                            </h5>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                const newSkill = {
                                    skill, 
                                    description
                                }
                                addSkill(newSkill, portfolio.user)
                                }}>
                                <select name="skill" value={skill} onChange={(e)=>onChange(e)} className="browser-default w-50 custom-select">
                                    <option>Choose skills</option>
                                    {profile.skills.map((s)=>
                                        <option value={s}>{s}</option>
                                    )}
                                </select>
                                <MDBInput name="description" value={description} onChange={(e)=>onChange(e)}  label="Skill Description" outline rows="5" type="textarea"/>
                                <MDBBtn type="submit" color="success" size="sm">
                                    add skill
                                </MDBBtn>
                            </form>
                        </div>
                    </MDBContainer>
                    {/* code below is commented because need to fix bug to not initiate map if value is equal to null  */}
                    {/* code works perfectly fine */}
                    {deleteFunction}
                    {/* <MDBContainer className="p-5">
                        <div className="mt-5">
                            <h5 className="h5-responsive">
                                Remove Skill
                            </h5>
                            <MDBTable hover>
                                <MDBTableHead>
                                    <tr>
                                        <th>ID #</th>
                                        <th>Skill</th>
                                        <th>Action</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {portfolio.selectedSkills.map((skill)=>                                
                                    <tr>
                                        <td>
                                            {skill._id}
                                        </td>
                                        <td>
                                            {skill.skill}
                                        </td>
                                        <td>
                                            <MDBBtn onClick={(e)=>{
                                                e.preventDefault()
                                                removeSkill(skill._id)
                                                }} size="sm" color="danger">
                                                <MDBIcon far icon="trash-alt"/>
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    )}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                        <div className="mt-5">
                            <h5 className="h5-responsive">
                                Remove Testimony
                            </h5>
                            <MDBTable hover>
                                <MDBTableHead>
                                <tr>
                                    <th>ID #</th>
                                    <th>Name</th>
                                    <th>Job Status</th>
                                    <th>Action</th>
                                </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {portfolio.testimonials.map((testimony)=>
                                    <tr>
                                        <td>
                                            {testimony._id}
                                        </td>
                                        <td>
                                            {testimony.name}
                                        </td>
                                        <td>
                                            {testimony.status}
                                        </td>
                                        <td>
                                            <MDBBtn onClick={(e)=>{
                                                e.preventDefault()
                                                removeTestimony(testimony._id)
                                                }} size="sm" color="danger">
                                                <MDBIcon far icon="trash-alt"/>
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    )}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer> */}
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

Portfolio.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    createPortfolio: PropTypes.func.isRequired,
    getOwnPortfolio: PropTypes.func.isRequired,
    updatePortfolio: PropTypes.func.isRequired,
    deletePortfolio: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired,
    addTestimony: PropTypes.func.isRequired,
    removeSkill: PropTypes.func.isRequired,
    removeTestimony: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    portfolio: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    error: state.portfolio,
    portfolio: state.portfolio,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, createPortfolio, getOwnPortfolio, updatePortfolio, addSkill, addTestimony, removeSkill, removeTestimony, deletePortfolio })(withRouter(Portfolio))
