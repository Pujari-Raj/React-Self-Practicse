import React from 'react'

export default function footer() {
  return (
    <div>
         
  <section className="footer">
    <hr className="border-t-1"/>
    <div className="container px-3.5 grid md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-6 mx-auto mt-20">
      <div className="footer-logo">
        <img src="./assets/logo-footer.svg" alt="" srcset=""/>
      </div>
 
      <div className=" md:block md:col-span-1 lg:col-span-1 xl:col-span-2">
        <h2 className="title-font font-medium text-lg">Products</h2>
        <nav className="list-none mb-10">
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Microphones</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Headphones</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Interfaces and Mixers</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Accessories</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Software</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Apparel</a>
            </li>
        </nav>
      </div>

      <div className=" md:block md:col-span-1 lg:col-span-1 xl:col-span-2">
        <h2 className="title-font font-medium text-lg">Support</h2>
        <nav className="list-none mb-10">
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Contact RØDE</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Service Centre</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Warranty</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Where to Buy</a>
            </li>
        </nav>
      </div>

      <div className=" md:block md:col-span-1 lg:col-span-1 xl:col-span-2">
        <h2 className="title-font font-medium text-lg">Company</h2>
        <nav className="list-none mb-10">
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">About RØDE</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">News and Info</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Job Opportunities</a>
            </li>
        </nav>
        <h2 className="title-font font-medium text-lg">Account</h2>
        <nav className="list-none mb-10">
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Manage your Accoun</a>
            </li>
            <li className="mt-3">
                <a href="#" className="text-gray-800 hover:text-gray-500 ">Create Accoun</a>
            </li>
        </nav>
      </div>
      
      <div className="flex flex-col  lg:items-end  md:mb-8 md:col-span-3 lg:col-span-2 xl:col-span-4">
        <h2 className="capitalize text-3xl">subscribe to our latest news and offers</h2>
        <div className="blog-btn mt-4 mb-4 mx-auto">
          <a href="#" className="font-bold text-white bg-[#ad9970] hover:text-[#ad9970] hover:bg-white 
          hover:border-[#ad9970] border border-transparent rounded-full px-6 py-1 transition ease-in">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>

    {/* <!---footer-bottom--> */}
    <div className="border-t px-4 pt-4 pb-10 mx-auto flex flex-col lg:flex-row justify-between">
      <p className="text-gray-700 text-sm lg:order-1 order-3 font-medium">© 2022 RØDE All Rights Reserved.</p>
      <a href="#" className="text-base text-gray-500 lg:order-2">Privacy Policy 
        <span className="mx-3"> | </span>Terms & Conditions
      </a>

      <div className="xl:space-x-8 lg:space-x-5 md:space-x-20 space-x-5 lg:order-3 my-7 lg:my-0">

        <a href="#">
            <i className="fa-brands fa-facebook text-[#ad9970] text-2xl"></i>
        </a>

        <a href="#">
            <i className="fa-brands fa-twitter text-[#ad9970] text-2xl"></i>
        </a>

        <a href="#">
            <i className="fa-brands fa-instagram text-[#ad9970] text-2xl"></i>
        </a>

        <a href="#">
            <i className="fa-brands fa-youtube text-[#ad9970] text-2xl"></i>
        </a>

        <a href="#">
            <i className="fa-brands fa-tiktok text-[#ad9970] text-2xl"></i>
        </a>
      </div>
    </div>

  </section>

    </div>
  );
}
