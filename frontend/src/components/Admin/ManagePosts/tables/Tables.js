import React from 'react'
import PropTypes from 'prop-types'
import { MDBTable, MDBTableBody, MDBTableHead,
    MDBIcon, MDBBtn } from 'mdbreact';
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deletePost } from '../../../../actions/post'

const Tables = ({ data, deletePost }) => {
    const tableData = data.map((datas)=>

        <>
            <tr>
                <td>{datas._id}</td>
                <td>{datas.title}</td>
                <td>{datas.views.length === 0 ? 'No views yet' :datas.views.length}</td>
                <td>{datas.likes.length === 0 ? 'No likes yet' : datas.likes.length}</td>
                <td>{datas.comments.length === 0 ? 'No comments yet': datas.comments.length}</td>
                <td><Moment format="MMM DD, YYYY">{datas.date}</Moment></td>
                <td><MDBBtn onClick={(e)=>{
                    e.preventDefault()
                    deletePost(datas._id)
                    }} color="danger" size="sm"><MDBIcon far icon="trash-alt" className="danger-text"/></MDBBtn></td>
            </tr>
        </>
    )
    return (
        <>
            <MDBTable hover>
            <MDBTableHead>
                <tr>
                <th>Article ID</th>
                <th>Title</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Comments</th>
                <th>Date Published</th>
                <th>Action</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <>
                    {tableData}
                </>
            </MDBTableBody>
            </MDBTable>
        </>
    )
}

Tables.propTypes = {
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, { deletePost })(Tables)
