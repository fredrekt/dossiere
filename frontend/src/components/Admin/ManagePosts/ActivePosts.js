import React, { useEffect, useState } from 'react';
import { MDBModal, MDBModalBody, MDBBtn, MDBContainer, 
  MDBTable, MDBTableBody, MDBTableHead, MDBProgress } from 'mdbreact';
import AdminTitle from '../../AdminTitle';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPosts } from '../../../actions/post'
import Tables from './tables/Tables';
import error from '../../../img/binoculars-vector.jpg'
import TableLoader from './tables/loaderTable';

const ActivePosts = ({ getPosts, post: { posts, loading } }) => {

  useEffect(()=>{
    getPosts()
  },  [getPosts])

  const [ show, setShow ] = useState(true)

  const adminTitle = [{
    id: 3,
    title: "Articles, Blogs & Posts",
    icon: "camera-retro",
    className: "mt-2 ml-2",
    subTitle: "This is an example of your overview, made by fred and designed by fred and the components of this project."
  }]

  const sampleData = [{
    _id: 1,
    title: "Hello World",
    date: "AUG 2020",
    views: [ '1', '2'],
    likes: [],
    comments: []
  },
  {
    _id: 2,
    title: "Introduction to JavaScript",
    date: "JUNE 2020",
    views: [ '1', '2'],
    likes: [],
    comments: []
  }
  ]

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

  return loading ? 
    ( 
    <div style={{ marginTop: "0%" }}>
      <AdminTitle adminTitle={loadingAdminTitle}/>
      <MDBContainer style={{ marginLeft: '-18%', marginTop: '-10%' }}>
        <TableLoader/>
      </MDBContainer>
    </div> 
    ) 
    : 
    (
      <>
        <AdminTitle adminTitle={adminTitle}/>
        {posts.length === 0 ? (
          <>
            <MDBModal centered size="md" isOpen={show}>
                <MDBModalBody style={{ padding: "10%" }}>
                    <MDBContainer className="d-flex flex-column text-center justify-content-center">
                        <div>
                            <img src={error} className="w-100" alt="onboarding team"/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "900" }} className="h4-responsive">
                                Oopss! You don't have any published articles.
                            </h4>
                        </div>
                        <div>
                            <p className="grey-text">
                                Need to write and publish your own posts, articles & blogs. 
                                Be creative and write well!
                            </p>
                        </div>
                        <div>
                          <Link className="white-text" to="/create-post"> 
                            <MDBBtn color="danger" onClick={()=>setShow(false)} size="sm">
                              i understand 
                            </MDBBtn>
                          </Link>
                        </div>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>
          </>
        )
        :
        <Tables data={posts}/>
        }
    </>
  );
}


ActivePosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})


export default connect(mapStateToProps, { getPosts } )(ActivePosts);