import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    return (
        <section id="contact" className="section bg-light">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Contact</h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">I'm available in<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-6 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
              <h2 className="mb-3 text-5 text-uppercase">Address</h2>
              <p className="text-3 mb-4">Khilkhet, 1229<br />
                Airport Road<br />Dhaka, Bangladesh </p>
            </div>
            <div className="col-md-6 col-xl-6 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0 ">
              <h2 className="mb-3 text-5 text-uppercase">Contact Info</h2>
              <p className="text-3 mb-1"><span className="text-primary text-4 mr-2"><i className="fa fa-phone"></i></span>(+88) 01831-305640</p>
              <p className="text-3 mb-1"><span className="text-primary text-4 mr-2"><i className="fa fa-envelope"></i></span>ifratbinte@gmail.com</p>
              <p className="text-3 mb-4"><span className="text-primary text-4 mr-2"><i className="fab fa-linkedin"></i></span><a href="https://www.linkedin.com/in/ifrat-kazi/">ifrat-kazi</a></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
