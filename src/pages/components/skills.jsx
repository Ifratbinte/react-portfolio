import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
        <section id="skills" className="section">
            <div className="container px-lg-5"> 
            <div className="position-relative d-flex text-center mb-5">
                <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Skills</h2>
                <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">Skills<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
            </div>
            
            <div className="row">
                <div className="col-lg-11 mx-auto">
                <div className="skills">
                    <div className="skills-box">
                    <img src="assets/images/icons/html.svg" alt="" />
                    <p className="skill-name">HTML5</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/css.svg" alt="" />
                    <p className="skill-name">CSS3</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/bootstrap.svg" alt="" />
                    <p className="skill-name">Bootstrap</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/sass.svg" alt="" />
                    <p className="skill-name">SASS</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/js.svg" alt="" />
                    <p className="skill-name">JavaScript</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/react.svg" alt="" />
                    <p className="skill-name">React</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/git.svg" alt="" />
                    <p className="skill-name">Git</p>
                    </div>
                    <div className="skills-box">
                    <img src="assets/images/icons/npm.svg" alt="" />
                    <p className="skill-name">npm</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
  }
}
export default Skills
