import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio" className="section bg-light">
        <div className="container px-lg-5"> 
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Portfolio</h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">My Work<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
          </div>
          
          {/* <!-- Filter Menu --> */}
          <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4">
            <li className="nav-item"> <a data-filter="*" className="nav-link active" href="/">All</a></li>
            <li className="nav-item"> <a data-filter=".portfolio" href="/" className="nav-link">Portfolio</a></li>
            <li className="nav-item"> <a data-filter=".business" href="/" className="nav-link">Business</a></li>
            <li className="nav-item"> <a data-filter=".ecommerce" href="/" className="nav-link">Ecommerce</a></li>
            <li className="nav-item"> <a data-filter=".blog" href="/" className="nav-link">Blog</a></li>
          </ul>
          {/* <!-- Filter Menu end --> */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter">
              <div className="col-sm-6 col-lg-4 business">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/bitcoin.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className=" stretched-link" href="https://github.com/Ifratbinte/Bitcoin"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Cryptocurrency HTML website templates</h5>
                        <span className="text-light">Business</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 portfolio">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/kazi.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/PortfolioTheme"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Portfolio HTML Template</h5>
                        <span className="text-light">Portfolio</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ecommerce">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/aems.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/AgEM-System"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Agricultural Ecommerce</h5>
                        <span className="text-light">Ecommerce</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 artwork ecommerce">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/easybuy.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/EasyBuy"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">EasyBuy</h5>
                        <span className="text-light">Ecommerce</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ecommerce">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/skin-care.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/skin-care-ecommerce"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Skin Care</h5>
                        <span className="text-light">Ecommerce</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 business">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/twist.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/twist"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Agency Landing</h5>
                        <span className="text-light">Business</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 portfolio">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/valon.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/valon"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">WeMates</h5>
                        <span className="text-light">Portfolio</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 blog">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/sports.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/SportsPlus"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Sports plus</h5>
                        <span className="text-light">Blog</span> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 artwork ecommerce">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded"> <img className="img-fluid d-block" src="assets/images/sms.png" alt="" />
                    <div className="portfolio-overlay"> 
                      <a className="stretched-link" href="https://github.com/Ifratbinte/shopManagement"></a>
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400">Shop Management</h5>
                        <span className="text-light">Ecommerce</span> </div>
                    </div>
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
export default Portfolio;
