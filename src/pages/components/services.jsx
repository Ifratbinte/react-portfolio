import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
        <section id="services" className="section bg-light">
        <div className="container px-lg-5"> 
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Services</h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">What I Do?<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
          </div>
          
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary bg-white shadow-sm rounded"> <i className="fa fa-layer-group"></i> </div>
                    <h3>Develop new user-facing features</h3>
                    <p className="mb-0">Always try to build user facing, friendly & flexible applications so that user can use it without any hasitance</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary bg-white shadow-sm rounded"> <i className="fa fa-file-code"></i></div>
                    <h3>Build reusable code and libraries for future use</h3>
                    <p className="mb-0"> I Use extension and global code so that easily be extended in the future.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary bg-white shadow-sm rounded"> <i className="fa fa-pencil-ruler"></i> </div>
                    <h3>Maintenance and enhancement of existing websites</h3>
                    <p className="mb-0">Having quite experience in backend (PHP) so that I can work flexibly in existing projects. </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary bg-white shadow-sm rounded"> <i className="fa fa-desktop"></i> </div>
                    <h3>Version Control</h3>
                    <p className="mb-0">I'm compitable with Git so that can tracking changes of codes & collaborates with mates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Services;
