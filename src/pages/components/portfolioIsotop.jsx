import React, { useState } from 'react'
import PortfolioContent from './protfolioContent'

const PortfolioIsotop = () => {

    //get data from protfolioContent
    const [items, setItems] = useState(PortfolioContent);

    const filterItem = (cateItems) => {
        const updatedItems = PortfolioContent.filter((currentElement) => {
            return currentElement.category === cateItems
        });
        setItems(updatedItems);
    }

    return (
        <>
            <section id="portfolio" className="section bg-light">
                <div className="container px-lg-5"> 
                    <div className="position-relative d-flex text-center mb-5">
                        <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">Portfolio</h2>
                        <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">My Work<span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span> </p>
                    </div>

                    {/* <!-- Filter Menu --> */}
                    <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4">
                        <li className="nav-item"> <a href="/" className="nav-link active" onClick={() => filterItem('portfolio')}>All</a></li>
                        <li className="nav-item"> <a href="/" className="nav-link" onClick={() => filterItem('portfolio')}>Portfolio</a></li>
                        <li className="nav-item"> <a href="/" className="nav-link" onClick={() => filterItem('business')}>Business</a></li>
                        <li className="nav-item"> <a href="/" className="nav-link" onClick={() => filterItem('ecommerce')}>Ecommerce</a></li>
                        <li className="nav-item"> <a href="/" className="nav-link" onClick={() => setItems(PortfolioContent)}>Blog</a></li>
                    </ul>

                    {/* Filter item section */}
                    <div className="portfolio popup-ajax-gallery">
                        <div className="row portfolio-filter">
                            {/* filter item loop */}
                            {
                                items.map((elem) => {
                                    const {id, image, name, githubLink, type} = elem;
                                    return(
                                        <div className="col-sm-6 col-lg-4 business">
                                            <div className="portfolio-box rounded my-3">
                                                <div className="portfolio-img rounded"> <img className="img-fluid d-block" src={image}/>
                                                    <div className="portfolio-overlay"> 
                                                        <a className=" stretched-link" href={githubLink}></a>
                                                        <div className="portfolio-overlay-details">
                                                            <h5 className="text-white font-weight-400">{name}</h5>
                                                            <span className="text-light">{type}</span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PortfolioIsotop;
