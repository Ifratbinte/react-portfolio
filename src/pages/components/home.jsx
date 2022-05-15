import React, { Component } from 'react'
import Typed from "react-typed";

const textLines = [
    `I'm Kazi Ifrat Sultana`
  ];
  const App = () => (
    <div style={{ fontSize: "32px", fontFamily: "Roboto Mono", }}>
        <Typed strings={textLines} typeSpeed={60} />
    </div>
    
  );

class Home extends Component {
  render() {
    return (
        <section id="home">
          <div className="hero-wrap">
            <div className="hero-mask opacity-8 bg-dark"></div>
            <div className="hero-bg parallax"></div>
            <div className="hero-content section d-flex fullscreen">
              <div className="container my-auto">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="text-7 font-weight-500 text-white mb-2 mb-md-3">Hey, there!</p>
                    
                    <Typed strings={textLines} typeSpeed={60} />
                    {App}
                    {/* <Type /> */}

                    <h2 className="text-16 font-weight-600 text-white mb-2 mb-md-3"><span className="typed"></span></h2>
                    <p className="text-5 text-light mb-4">Dhaka, Bangladesh</p>
            <a href="#portfolio" className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2">Portfolio</a>
                  </div>
                </div>
              </div>
              <a href="#about" className="scroll-down-arrow text-white smooth-scroll"><span className="animated"><i className="fa fa-chevron-down"></i></span></a> </div>
          </div>
        </section>
    )
  }
}
export default Home;