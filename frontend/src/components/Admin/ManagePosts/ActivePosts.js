import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

const BasicTable = () => {
  return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center">
          Articles & Posts 
        </h2>
        <hr width="10%"/>
        <p className="grey-text text-center">
          Overview of your posts & articles are shown below
        </p>




        <div className="container my-5 py-5">


  <section className="">

    <div className="row">

      <div className="col-lg-4 col-md-12 mb-4">

        <div className="card mt-3">

          <div className="">
          {/* <i class="fas fa-eye"></i> */}
            <i className="far fa-eye fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
            <div className="float-right text-right p-3">
              <p className="text-uppercase text-muted mb-1"><small>Views</small></p>
              <h4 className="font-weight-bold mb-0">23 000$</h4>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="progress md-progress">
              <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="card-text">Better than last week (75%)</p>
          </div>

        </div>

      </div>

      <div className="col-lg-4 col-md-6 mb-4">

        <div className="card mt-3">

          <div className="">
            <i className="fas fa-scroll fa-lg teal z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
            <div className="float-right text-right p-3">
              <p className="text-uppercase text-muted mb-1"><small>posts & articles</small></p>
              <h4 className="font-weight-bold mb-0">3534</h4>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="progress md-progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{"width": "46%"}} aria-valuenow="46" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="card-text">Worse than last week (46%)</p>
          </div>

        </div>

      </div>
      <div className="col-lg-4 col-md-6 mb-4">

        <div className="card mt-3">

          <div className="">
            <i className="fas fa-pen-fancy fa-lg purple z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
            <div className="float-right text-right p-3">
              <p className="text-uppercase text-muted mb-1"><small>Successfull Articles & Posts</small></p>
              <h4 className="font-weight-bold mb-0">656 234</h4>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="progress md-progress">
              <div className="progress-bar bg-success" role="progressbar" style={{"width": "31%"}} aria-valuenow="31" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="card-text">Better than last week (31%)</p>
          </div>

        </div>

      </div>
    </div>

  </section>



</div>






        <MDBTable hover>
        <MDBTableHead>
            <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </MDBTableBody>
        </MDBTable>
    </MDBContainer>
  );
}

export default BasicTable;