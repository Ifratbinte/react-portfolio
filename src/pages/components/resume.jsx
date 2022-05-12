import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
        <section id="resume" className="section">
        <div className="container px-lg-5"> 
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Summary</h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">Resume<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
          </div>
          
          <div className="row"> 
            {/* My Experience */}
            <div className="col-md-6">
              <h2 className="text-6 font-weight-600 mb-4">Job Experience</h2>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">February, 2021 - April, 2022</p>
                <h3 className="text-5">Frontend Developer</h3>
                <p className="text-danger">Softnio</p>
                <ul className="mb-0">
                  <li>Developed Multipurpose Admin Panel using dart-sass & Gulp.js</li>
                  <li>Worked on conceptual app like PMS, CMS, LMS, CRM, HMS, HRM, Investment panel</li>
                  <li>Worked on Cryptocurrency Theme</li>
                  <li>Worked with Theme mode and RTL</li>
                </ul>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">Novermber, 2020 - January, 2021</p>
                <h3 className="text-5">Frontend Developer</h3>
                <p className="text-danger">Planethack Limited</p>
                <ul className="mb-0">
                  <li>Worked Admin Panel & Ecommerce User Interface using Bootstrap & SASS</li>
                  <li>Develop on beautyhacks conceptual app -  Purler Management System</li>
                </ul>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">July, 2020 - October, 2020</p>
                <h3 className="text-5">Trainer of Web Design & Development</h3>
                <p className="text-danger">Learning & Earning Development Project</p>
                <p className="mb-0">LEDP is a government project under ICT division. I was a trainer on the job position of Web design & Development.</p>
              </div>
            </div>
            {/* My Education */}
            <div className="col-md-6">
              <h2 className="text-6 font-weight-600 mb-4">My Education</h2>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">2016 - 2020</p>
                <h3 className="text-5">BSc. in Computer Science & Engineering</h3>
                <p className="text-danger">Britannia University</p>
                <p className="mb-0">CGPA - 3.54</p>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">2013 - 2014</p>
                <h3 className="text-5">Higher Secondary Certificate</h3>
                <p className="text-danger">Chandina Womens Collage and University</p>
                <p className="mb-0">GPA - 4.75</p>
              </div>
              <div className="bg-white border rounded p-4 mb-4">
                <p className="badge badge-primary text-2 font-weight-400">2011 - 2012</p>
                <h3 className="text-5">Secondary School Certificate</h3>
                <p className="text-danger">Chandina Dr. Firoza Pilot Girls High School</p>
                <p className="mb-0">GPA - 5.00</p>
              </div>
            </div>
          </div>
          {/* <!-- My Skills --> */}
              <h2 className="text-6 font-weight-600 mt-4 mb-4">Technical Skills</h2>
          <div className="row">
            <div className="col-md-4 col-md-offset-2">
              <p className="text-dark font-weight-600 text-left mb-2">Frequently Uses Tools </p>
              <div className="tools-skills">
                <ul>
                  <li>Windows</li>
                  <li>Git</li>
                  <li>Taiga</li>
                  <li>Responsive Web Design Tester</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Resume;
