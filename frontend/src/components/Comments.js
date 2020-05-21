import React from 'react'
import { MDBBox, MDBIcon, MDBBtn } from 'mdbreact'
import pp from '../img/fred.jpg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'

const Comments = ({ postId, comments: { _id, user, comment, date }, auth }) => {
    return (
        <>
          <MDBBox className="pt-4 pb-4" display="flex">
              <MDBBox display="flex">
                {/* <MDBIcon size="3x" icon="user-circle" /> */}
                <div className="comment-avatar">
                  <img src={pp} alt=""/>  
                </div>              
              <MDBBox flex="column" display="flex" className="ml-3">
                <MDBBox alignItems="center" display="flex" justifyContent="between">
                  <div className="comment-author">
                    Fred Garingo
                  </div>
                  <div className="comment-reply">
                    <MDBBtn color="info" outline size="sm">
                      Reply
                    </MDBBtn>
                  </div>
                </MDBBox>
                <div className="comment-date mt-0">
                  <Moment format="MMM DD, YYYY" fromNow>
                    {date}
                  </Moment>
                  AUG 28, 2019 20:29
                </div>
                <div className="comment-content mt-3">
                {comment ? comment : 
                ("Nam id pretium lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus.")
                }
                </div>
              </MDBBox>
              </MDBBox>
          </MDBBox>  
        </>
    )
}

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {  })(Comments)
