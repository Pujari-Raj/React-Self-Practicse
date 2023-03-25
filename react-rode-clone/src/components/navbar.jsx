import React from 'react'

export default function navbar() {
    return (
        <div>
        <section className="navbar">
            <div className="nav-top xl:border-b">
            <div className="container  px-1 py-2 flex justify-between mx-auto items-center">

                <div className="nav-top-left flex gap-2 items-center">
                    <a href="#" className=" xl:hidden">
                        <i className="fa-solid fa-bars"></i>
                    </a>
                    <a href="#">
                        <img className="" src="assets/logo-Location.svg" alt="" srcset="" />
                    </a>
                    <a href="#">
                        <span className="text-sm text-gray-500">EN</span>
                        <i className="fa-solid fa-caret-down text-gray-500"></i>
                    </a>
                </div>

                <div className="nav-top-mid  xl:hidden">
                    <a href="">
                        <img className="w-[100px]" src="assets/logo-website.svg" alt="" />
                    </a>
                </div>

                <div className="nav-top-right hidden xl:flex">
                    <a href="#">
                        <img className="" src="assets/logo-user.svg" alt="" srcset="" />
                    </a>
                </div>

                <div className="nav-top-right-search xl:hidden">
                    <a href="">
                        <img className="w-4 lg:w-5" src="assets/logo-search.svg" alt="" srcset="" />
                    </a>
                </div>

            </div>
            </div>

            <div className="nav-main hidden xl:flex">
                <div className="container mx-auto py-2 ">
                <div className="navbar flex justify-between items-center">
                    <div className="nav_web_logo">
                        <a href="#">
                            <img className="w-[100px]" src="assets/logo-website.svg" alt="" srcset="" />
                        </a>
                    </div>
                    <div className="nav_web_links">
                        <ul className="flex gap-6">
                            <li><a href="#">PRODUCTS</a></li>
                            <li><a href="#">USER GUIDES</a></li>
                            <li><a href="#">SOLUTIONS</a></li>
                            <li><a href="#">APPAREL</a></li>
                            <li><a href="#">SUPOORT</a></li>
                        </ul>
                    </div>
                    <div className="nav_searchbar">
                        <a href="">
                            <img className="" src="assets/logo-search.svg" alt="" srcset="" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
}
