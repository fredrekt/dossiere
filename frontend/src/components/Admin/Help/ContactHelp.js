import React from 'react'
import { MDBContainer} from 'mdbreact'
import AdminTitle from '../../AdminTitle'

const ContactHelp = () => {
  const adminTitle = [{
    id: 6,
    title: "Got a Question?",
    className: "mt-2 ml-2",
    icon: "question-circle",
    subTitle: "This is an example of All your archived posts & articles are shown below, made by fred."
  }]
    return (
      <>
      <AdminTitle adminTitle={adminTitle}/>
        <MDBContainer>
        <div className="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

  {/* <!--Grid row--> */}
  <div className="row">

    {/* <!--Grid column--> */}
    <div className="col-lg-5 col-md-12 mb-0 mb-md-0">

      <h3 className="font-weight-bold">Ask me anything.</h3>

      <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
        molestiae
        numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

      <p><span className="font-weight-bold mr-2">Email:</span><a href="#contactcompany">contact@mycompany.com</a></p>
      <p><span className="font-weight-bold mr-2">Phone:</span><a href="#contactnumber">+48 123 456 789</a></p>

    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-lg-7 col-md-12 mb-4 mb-md-0">

      {/* <!--Grid row--> */}
      <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-6">

          {/* <!-- Material outline input --> */}
          <div className="md-form md-outline mb-0">
            <input type="text" id="form-first-name" className="form-control"/>
            <label for="form-first-name">First name</label>
          </div>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-6">

          {/* <!-- Material outline input --> */}
          <div className="md-form md-outline mb-0">
            <input type="text" id="form-last-name" className="form-control"/>
            <label for="form-last-name">Last name</label>
          </div>

        </div>
        {/* <!--Grid column--> */}

      </div>
      {/* <!--Grid row--> */}

      {/* <!-- Material outline input --> */}
      <div className="md-form md-outline mt-3">
        <input type="email" id="form-email" className="form-control"/>
        <label for="form-email">E-mail</label>
      </div>

      {/* <!-- Material outline input --> */}
      <div className="md-form md-outline">
        <input type="text" id="form-subject" className="form-control"/>
        <label for="form-subject">Subject</label>
      </div>

      {/* <!--Material textarea--> */}
      <div className="md-form md-outline mb-3">
        <textarea id="form-message" className="md-textarea form-control" rows="3"></textarea>
        <label for="form-message">How we can help?</label>
      </div>

      <button type="submit" className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>

    </div>
    {/* <!--Grid column--> */}

  </div>
  {/* <!--Grid row--> */}


</section>
{/* <!--Section: Content--> */}


</div>
        </MDBContainer>
        </>
    )
}

export default ContactHelp
