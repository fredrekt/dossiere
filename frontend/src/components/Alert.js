import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MDBAlert, MDBContainer } from 'mdbreact'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

toast.configure()

const showToast = ( toastMsg ) => {
    toast.error(toastMsg)
}
const Alert = ({ alerts }) => 
    alerts !== null && 
    alerts.length > 0 && 
    alerts.map(alert => (
    <MDBContainer>
        {/* <MDBAlert dismiss key={alert.id} color={alert.alertType} >
            {alert.msg}
        </MDBAlert> */}
        {showToast(alert.msg)}
    </MDBContainer>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
