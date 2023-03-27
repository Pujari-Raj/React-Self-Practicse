import React from "react";

function footer() {
    return (
        <>
            <div className="footer-socials">
                <div className="logo">
                    <img srcSet="./assets/Logo.svg" alt="logo" />
                </div>
                <div className="socials">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </>
    );
}

export default footer;