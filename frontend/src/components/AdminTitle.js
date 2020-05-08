import React from 'react'
import { MDBIcon, MDBProgress } from 'mdbreact'

const AdminTitle = props => {
    const admin = props.adminTitle
    const adminContent = admin.map((a =>
            <>
            <div key={a.id} className="admin-title-container">
                <div>
                    <div waves className="admin-title-card z-depth-2 p-2">
                        <MDBIcon size="2x" className={a.className} icon={a.icon} />
                    </div>
                </div>
                <div className="admin-title-content">
                    <div className="admin-title">
                        {a.title}
                    </div>
                    <div className="admin-sub-title">
                        {a.subTitle}
                    </div>
                </div>
            </div> 
            </>
        ))
    return (
        <>
            {adminContent}
        </>
    )
}

export default AdminTitle
