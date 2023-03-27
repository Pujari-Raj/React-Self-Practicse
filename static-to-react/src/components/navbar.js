import React from "react";

function home() {
    return (

        <>
            <nav className="navbar">
                <div className="logo">
                    <img srcSet="./assets/Logo.svg" alt="logo" />
                </div>
                <ul className="nav-items">
                    <li>
                        <a href="#">HOME <i className="fa-solid fa-caret-down"></i></a>
                    </li>
                    <li><a href="#">PROJECT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">OTHER PAGE <i className="fa-solid fa-caret-down"></i></a></li>
                </ul>
                <i className="fa-solid fa-bars"></i>
            </nav>
        </>
    );
}

export default home;