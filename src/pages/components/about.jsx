import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
        <section id="about" className="section">
        <div className="container px-lg-5"> 
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">About Me</h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">Know Me More<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
          </div>
          
          <div className="row">
            <div className="col-lg-12 text-center text-lg-left">
              <h2 className="text-7 font-weight-600 mb-3">I'm <span className="text-primary">Kazi Ifrat Sultana</span></h2>
              <p>Going on 3+ years of working experience on Frontend Development. I’m working as a frontend developer exploring the development world. I use Bootstrap, Flex, SASS, Javascript, React.js & jQuery applications for development. I'm a quick learner. Currently, I am working with React.js.</p>
  
              <p>In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default About;
