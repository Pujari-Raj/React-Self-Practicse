import React from 'react';
import './css/banners.css'; 
// import {Link} from 'react-router-dom';

export default function banners() {
  return (
    <div>
            {/* <!--Pre-Launch-Banner---> */}
    <section className="hero-banner">
      <div className="pre_launch_banner flex flex-col items-center justify-center">
        <div className="hero-banner-mobileview lg:hidden">
          <img className="max-h-full w-[100vw]" src="assets/hero-banners/RODEX_Prelaunch_small.jpg" alt=""/>
        </div>

        <div className="pre_lanuch_banner_content lg:ml-[50%] bg-black lg:bg-transparent flex flex-col items-center gap-4 pb-[10px]">
          <img className="max-h-full w-[100vw] mx-auto" src="assets/rode-x-text.svg" alt="" srcset=""/>
          <a href="/" className="font-bold text-black bg-red-600 xl:bg-black xl:text-red-800  border border-transparent rounded-full px-6 py-1 ">
            BUY NOW
          </a>
        </div>
      </div>
    </section>

    {/* <!--hero-banner--> */}
    <section className="hero-banner">
        <div className="hero-banner-1-img bg-black flex flex-col items-center justify-center">
            <div className="hero-banner-mobileview lg:hidden">
              <img className="max-h-full w-[100vw]" src="assets/hero-banners/hero-1-mobile.jpg" alt="" srcset=""/>
            </div>

            <div className="hero-banner-1-content mx-auto mb-[10px]">
              <div className="text-white px-4 mx-auto lg:ml-[50%] text-center">
                <img src="assets/hero-banners/hero-banner-logo.svg" alt="" srcset=""/>
                <h1 className="font-medium text-2xl mt-4 mb-4">The Revolution Is here</h1>
                <p className="text-zinc-500">The RØDECaster Pro II is the world's most powerful all-in-one audio solution for 
                  streamers, podcasters, musicians, and creators. Take your content to the next level.</p>
  
                <div className="hero-banner-btns mt-4 flex gap-4 justify-center items-center">
                  <a href="/" className="font-semibold flex items-center text-[#C2A571]">
                    LEARN MORE<i className="fa-solid fa-angle-right ml-2"></i>
                  </a>
                  <a href="/" className="font-bold text-white bg-[#ad9970] hover:text-[#ad9970] hover:bg-white 
                  border border-transparent rounded-full px-6 py-1 transition ease-in">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
        </div> 
    </section>

    {/* <!--hero-banner-2--> */}
    <section className="hero-banner">
        <div className="hero-banner-2-img bg-white flex flex-col items-center justify-center">
          <div className="hero-banner-mobileview lg:hidden ">
            <img className="max-h-full w-[100vw]" src="assets/hero-banners/hero-banner-2-mobile.png" alt="" srcset=""/>
          </div>  
          
          <div className="hero-banner-1-content mx-auto mt-[10px] mb-[10px]">
            <div className="text-white px-4 mx-auto lg:mr-[50%] text-center ">
              <img src="assets/hero-banners/hero-banner-logo-2.svg" alt="" srcset=""/>
              <h1 className="font-medium text-xl mt-4 mb-4 text-black">Your Search For The Perfect Headphones Is Over</h1>
              <p className="text-zinc-500">Experience sound like never before with the NTH-100s. Exceptional sonic performance, superior comfort and iconic looks that inspires creativity.</p>

              <div className="hero-banner-btns mt-4 flex gap-4 justify-center items-center">
                <a href="/" className="font-semibold flex items-center text-[#C2A571]">
                  LEARN MORE<i className="fa-solid fa-angle-right ml-2"></i>
                </a>
                <a href="/" className="font-bold text-white bg-[#ad9970] hover:text-[#ad9970] hover:bg-white 
                border border-transparent rounded-full px-6 py-1 transition ease-in">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>       
        </div> 
    </section>
  
    {/* <!--hero-banner-3---> */}
    <section className="hero-banner">
      <div className="hero-banner-3-img bg-white flex flex-col items-center justify-center">
        <div className="hero-banner-mobileview lg:hidden">
          <img className="max-h-full w-[100vw]" src="assets/hero-banners/hero-3-mobile.jpg" alt="" srcset=""/>
        </div>  
        
        <div className="hero-banner-1-content  mx-auto mt-[10px]">
          <div className="text-white px-4 mx-auto lg:ml-[50%] text-center ">
            <img src="assets/hero-banners/hero-banner-logo-2.svg" alt="" srcset=""/>
            <h1 className="font-medium text-xl mt-4 mb-4 text-black">Studio-Quality Recording, Made Simple</h1>
            <p className="text-zinc-500">The NT-USB is a studio-quality USB condenser microphone that offers impeccable audio, 
              elegant looks and premium features, all in an easy-to-use form factor, the NT-USB will have you sounding like a pro in seconds.</p>

            <div className="hero-banner-btns mt-4 flex gap-4 justify-center items-center">
              <a href="/" className="font-semibold flex items-center text-[#C2A571]">
                LEARN MORE<i className="fa-solid fa-angle-right ml-2"></i>
              </a>
              <a href="/" className="font-bold text-white bg-[#ad9970] hover:text-[#ad9970] hover:bg-white 
              border border-transparent rounded-full px-6 py-1 transition ease-in">
                BUY NOW
              </a>
            </div>
          </div>
        </div>       
      </div> 
  </section>

  {/* <!--Explore section----> */}
  <section className="Explore-section">
    <div className="text-center">
      <h2 className="text-3xl my-8">Explore The RØDE Range</h2>
    </div>

    <div className="explore-container container px-2 xl:px-12 md:px-8 py-10 mx-auto">
      <div className=" flex flex-col relative justify-center items-center">
      
      <div>
        <a href="/" classname="absolute top-0 h-full opacity-40 
        hover:bg-[#484848] ease-in-out delay-100">
        </a><a href="/">
          <img src="assets/products/microphones.png" alt="" srcSet />            
        </a>
      </div>
        
        <a href="/" className="absolute">
          <h2 className="lg:text-6xl text-white uppercase font-semibold">
            microphones</h2>
        </a>
      </div>
    </div>

    <div className="explore-container container px-2 xl:px-12 md:px-8 py-10 mx-auto ">
      <div className=" flex flex-col relative justify-center items-center">
      <div>
        <a href="/" classname="absolute top-0  h-full opacity-40 hover:bg-[#484848] ease-in-out delay-100">
        </a>
        <a href="/">
          <img src="assets/products/interfaces&mixers.jpg" alt="" srcSet />            
        </a>
      </div>
        
        <a href="/" className="absolute">
          <h2 className="lg:text-6xl text-white uppercase font-semibold">interfaces & mixers</h2>
        </a>
      </div>
    </div>

     <div className="explore-container container px-2 py-10 xl:px-12 md:px-8 mx-auto ">
      <div className=" flex flex-col relative justify-center items-center">
        <div>
        <a href="/" className="absolute top-0  h-full opacity-40 hover:bg-[#484848] ease-in-out delay-100">
        </a>
          <a href="/">
            <img src="assets/products/softwares.png" alt="" srcset=""/>            
          </a>    
        </div>
    
        <a href="/" className="absolute">
          <h2 className="lg:text-6xl text-white uppercase font-semibold">software</h2>
        </a>
      </div>
    </div>

    <div className="explore-container container px-2 py-10 xl:px-12 md:px-8 mx-auto ">
      <div className=" flex flex-col relative justify-center items-center">
        <div>
          <a href="/" className="absolute top-0  h-full opacity-40 hover:bg-[#484848] ease-in-out delay-100">
          </a>
            <a href="/">
              <img src="assets/products/accessories.png" alt="" srcset=""/>            
            </a>  
        </div>
        
        <a href="/" className="absolute">
          <h2 className="lg:text-6xl text-white uppercase font-semibold">accessories</h2>
        </a>
      </div>
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold my-4 text-[#ad9970]">Latest From The RØDE Blog</h2>
    </div>
  </section>

</div>
  );
}
