import React, { Component } from 'react'

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Service from './components/services'
import Skills from './components/skills'
import Portfolio from './components/portfolioIsotop'
import Resume from './components/resume'
import Contact from './components/contact'
import Footer from './components/footer'

class Index extends Component {
  render() {
    return (
      <div>
          {/* <div className="preloader">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div> */}
        <div id="main-wrapper"> 
            <Header />
            <div id="content" role="main"> 
              <Home />
              <About />
              <Service />
              <Skills />
              <Portfolio />
              <Resume />
              <Contact />
            </div>
            <Footer />
        </div>
{/* <!-- Back to Top -->  */}
{/* <a id="back-to-top" className="rounded-circle" data-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i className="fa fa-chevron-up"></i></a>  */}
      </div>
    )
  }
}

export default Index;
