import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <header className="nk-header">
            <div className="header-main">
                <div className="container">
                    <div className="header-wrap d-flex justify-content-between">
                        <a className="header-logo" href="/">
                            <h3>Kazi.</h3>
                        </a>							
                        <div className="header-nav-toggle">
                            <button className="nk-menu-toggle"> 
                                <em className="nk-menu-on icon ni ni-menu"></em>
                                <em className="nk-menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className="nk-nav-menu justify-content-end"> 
                            <ul className="nk-nav-list"data-aos="fade-down" data-aos-delay="100">
                                <li className="nk-nav-item"><a href="#home" className="nk-nav-link">Home</a></li>
                                <li className="nk-nav-item"><a href="#about" className="nk-nav-link">About</a></li>
                                <li className="nk-nav-item"><a href="#services" className="nk-nav-link">What I do</a></li>
                                <li className="nk-nav-item"><a href="#skills" className="nk-nav-link">Skills</a></li>
                                <li className="nk-nav-item"><a href="#portfolio" className="nk-nav-link">Portfolio</a></li>
                                <li className="nk-nav-item"><a href="#resume" className="nk-nav-link">Resume</a></li>
                                <li className="nk-nav-item"><a href="#contact" className="nk-nav-link">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="nk-nav-overlay"></div>
                    </div>
                </div>
            </div>
        </header>
    )
  }
}
export default Header;
