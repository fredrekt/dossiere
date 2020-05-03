import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'

class Dashboard extends Component {
    render(){
        return(
            <>
              <MDBContainer>
                <div className="card text-white bg-primary mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-secondary mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Secondary Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-success mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Success Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-danger mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Danger Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-warning mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-info mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Info Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card bg-light mb-3" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Light Panel title</h5>
                        <p className="card-text">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-dark" style={{"max-width": "20rem;"}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Dark Panel title</h5>
                        <p className="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
                    </div>
                    </div>
                </MDBContainer>
            </>
        )
    }
}

export default Dashboard
