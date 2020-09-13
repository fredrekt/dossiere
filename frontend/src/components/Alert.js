import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MDBContainer } from 'mdbreact'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

toast.configure()

const showToastError = ( toastMsg ) => {
    toast.error(toastMsg)
}
const showSuccessToast = (toastMsg) => {
    toast.success(toastMsg)
}
const Alert = ({ alerts }) => 
    alerts !== null && 
    alerts.length > 0 && 
    alerts.map(alert => (
    <MDBContainer>
        {/* <MDBAlert dismiss key={alert.id} color={alert.alertType} >
            {alert.msg}
        </MDBAlert> */}
        {alert.alertType === "success" ? showSuccessToast(alert.msg) : showToastError(alert.msg)}
        {/* {toast}.{alert.alertType}({alert.msg}) */}
    </MDBContainer>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
