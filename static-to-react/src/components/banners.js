import React from "react";

function banners() {
    return (

        <>
            <section className="hero-banner">
                <div className="hero-banner-left">
                    <img src="assets/Untitled design (35).png" alt="" />
                </div>
                <div className="hero-banner-right">
                    <h5>Hello I'm Arthur</h5>
                    <h2>Visual Designer</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio illo repudiandae quaerat provident cum
                        eveniet adipisci recusandae officiis aspernatur.</p>
                    <button className="btn">ABOUT ME</button>
                </div>
            </section>


            <section className="services-banner">
                <div className="demo-bg"></div>
                <div className="services-cards">
                    <div className="card">
                        <img src="assets/card-01.svg" alt="" />
                        <h3>UI Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="card card-red">
                        <img src="assets/card-02.svg" alt="" />
                        <h3>Product Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="card">
                        <img src="assets/card-03.svg" alt="" />
                        <h3>Branding</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="acheivements-banner">
                    <div className="banner-exp">
                        <h1>12</h1>
                        <p>Years Experience</p>
                    </div>
                    <div className="banner-highlights">
                        <div className="banner-highlight1">
                            <div className="card">
                                <h2>60+</h2>
                                <p>Clients</p>
                            </div>
                            <div className="card">
                                <h2>08</h2>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className="banner-highlight2">
                            <div className="card">
                                <h2>122+</h2>
                                <p>Completed Projects</p>
                            </div>
                            <div className="card">
                                <h2>10</h2>
                                <p>Acheivements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-proj">
                <div className="featured-desc">
                    <div className="featured-heading">
                        <h1>FEATURED PROJECTS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <button className="btn">ABOUT ME</button>
                </div>
                <div className="featured-projects-cards">
                    <div className="featured-projects-1">
                        <div className="card">
                            <div className="img-card">
                                <img src="assets/Screenshot 2022-06-25 131915.jpg" alt="" />
                            </div>
                            <div className="card-desc">
                                <h4>The Vintage</h4>
                                <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-card">
                                <img src="assets/Screenshot 2022-06-25 132031.jpg" alt="" />
                            </div>
                            <div className="card-desc">
                                <h4>Foodasa</h4>
                                <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="featured-projects-2">
                        <div className="card">
                            <div className="img-card">
                                <img src="assets/Screenshot 2022-06-25 133016.jpg" alt="" />
                            </div>
                            <div className="card-desc">
                                <h4>Marco Accent</h4>
                                <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-card">
                                <img src="assets/Screenshot 2022-06-25 133426.jpg" alt="" />
                            </div>
                            <div className="card-desc">
                                <h4>Mozaik</h4>
                                <a href="#">KNOW MORE <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-banner">
                <div className="contact-banner-left">
                    <div className="contact-desc">
                        <h1>Let's work together on <br></br> your next project</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas aliquam pariatur, eos cumque dolorum alias quis
                            debitis maxime?</p>
                    </div>
                    <div className="contact-btn">
                        <button className="btn">CONTACT</button>
                    </div>
                </div>
            </section>

            <section className="footer-nav-banner">
                <ul className="footer-nav-items">
                    <li className="nav-item"><a href="#">HOME</a></li>
                    <li className="nav-item"><a href="#">ABOUT</a></li>
                    <li className="nav-item"><a href="#">PROJECTS</a></li>
                    <li className="nav-item"><a href="#">CONTACT</a></li>
                </ul>
            </section>
        </>
    );
}

export default banners;