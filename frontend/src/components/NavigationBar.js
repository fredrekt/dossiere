import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
// import SideNav from './Admin/SideNav'
// import Home from './Client/Home'
import { Redirect } from 'react-router-dom'
// import App from './Client/App'


const NavigationBar = ({ auth: { isAuthenticated, loading } }) => {
    const guestNavbar = <Navbar/>
    const adminNavbar = ( <Redirect to="/admin" />)
    return (
        <>
            { !loading && (
                <>
                    { isAuthenticated ? adminNavbar : guestNavbar }
                </>
            ) }
        </>
    )
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(NavigationBar)
