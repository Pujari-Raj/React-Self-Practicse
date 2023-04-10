import React from 'react'

export default function banners() {
    return (
        <div>

            {/* <!---hero-banner--> */}
            <section id="top" className="bg-bgbody ">
                <div className="container mx-auto md:mx-0 flex flex-col mt-14 pt-10 lgm:flex-row justify-between items-center px-5 xl:px-20">
                    <div className="banner-container-left mx-auto flex flex-col justify-between items-start mt-20 md:text-left lg:text-left">
                        <h1 className="text-darkgreen text-[55px] xs:text-[30px] max-w-full md:text-[40px] lg:max-w-[18ch] md:max-w-[18ch] mb-8 font-bold">The easiest way to sell online in India</h1>
                        <p className="text-lg sm:text-xl mb-8 font-normal text-gray-600">Try one of the most powerful platforms on the market for free. No technical knowledge needed.</p>
                        <form action="" className="flex flex-col md:flex-row gap-4 md:gap-4 justify-between items-center ">
                            <input type="email" className="py-4 px-3 w-[250px] md:w-[270px] rounded border-solid border shadow-[0_0_0_1px_rgba(0,0,0,0.3)] appearance-none focus:outline-4 focus:outline-[#004C3F]" name="" placeholder="Enter your email address" id="" />
                            <input type="submit" className="py-4 px-8 w-[250px] bg-[#008060] rounded text-white font-bold hover:bg-[#004C3F] transition ease-in-out" value="Try for Free" />
                        </form>
                        <p className="mt-4 mb-3 text-xs leading-5 font-medium text-gray-600">Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                    </div>
                    <div className="banner-container-right max-w-full self-start">
                        <img src="./assets/hero.webp" className="w-[750px]" alt="" />
                    </div>
                </div>
            </section>

            {/* <!---Bring-Business---> */}
            <section className="bring-business bg-darkgreen text-white pt-20 ">
                <div className="container flex flex-col mx-auto px-5 xl:px-16  md:px-8 sm:px-4 xs:px-2">
                    <div className="content-container flex items-start flex-col pb-12">
                        <h1 className="text-[55px] xs:text-[30px] max-w-full md:text-[40px] mb-8 font-medium">Bring your business online</h1>
                        <div className="content-container-inner flex flex-col lgm:flex-row justify-between w-full mb-6">
                            <p className="text-[14px]">Create an ecommerce website backed by powerful tools that help you find
                                customers, drive sales, and manage your day-to-day.</p>
                            <a href="#" className=" font-bold">Explore more examples
                                <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow.svg" alt="" srcset="" />
                            </a>
                        </div>
                    </div>

                    <div className="businesses-cards grid w-full gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-16">
                        <div className="business-card flex flex-col gap-2">
                            <img className="w-[250px]" src="assets/food and drink.webp" alt="" srcset="" />
                            <a href="#" className="font-medium hover:underline hover:underline-offset-1">FOOD AND DRINK</a>
                            <h3>Blue Tokai</h3>
                        </div>
                        <div className="business-card flex flex-col gap-2">
                            <img className="w-[250px]" src="assets/jwellery.webp" alt="" srcset="" />
                            <a href="#" className="font-medium hover:underline hover:underline-offset-1">JEWELRY</a>
                            <h3>Quirksmith</h3>
                        </div>
                        <div className="business-card flex flex-col gap-2">
                            <img className="w-[250px]" src="assets/electronics.webp" alt="" srcset="" />
                            <a href="#" className="font-medium hover:underline hover:underline-offset-1">ELECTRONICS</a>
                            <h3>Crossbeats</h3>
                        </div>
                        <div className="business-card flex flex-col gap-2 md:hidden lg:flex">
                            <img className="w-[250px]" src="assets/beauty.webp" alt="" srcset="" />
                            <a href="#" className="font-medium hover:underline hover:underline-offset-1">BEAUTY</a>
                            <h3>Mcaffeine</h3>
                        </div>
                        <div className="business-card hidden flex  gap-2 flex-col md:hidden lgm:flex">
                            <img className="w-[250px]" src="assets/fashion.webp" alt="" srcset="" />
                            <a href="#" className="font-medium hover:underline hover:underline-offset-1">FASHION</a>
                            <h3>Bunnai</h3>
                        </div>
                    </div>
                </div>

                {/* <!---take-best-section---> */}
                <section className="take-best">
                    <div className="container flex flex-col mx-auto xl:px-16 md:px-8 sm:px-4 xs:px-2 pb-12">
                        <div className="content-heading">
                            <h2 className="text-2xl sm:text-[30px] mb-8 sm:mb-14">Take the best path forward</h2>
                        </div>

                        <div className="take-best-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="card flex flex-col justify-between gap-2">
                                <img className="w-[30px]" src="assets/start business online.png" alt="" srcset="" />
                                <h2 className="text-xl font-semibold">Start an online business</h2>
                                <p className="font-medium">Create a business, whether you’ve got a fresh idea or are
                                    looking for a new way to make money.</p>
                            </div>
                            <div className="card flex flex-col justify-between gap-2">
                                <img className="w-[30px]" src="assets/move business online.png" alt="" srcset="" />
                                <h2 className="text-xl font-semibold">Move your business online</h2>
                                <p className="font-medium">Turn your retail store into an online store and keep serving
                                    customers without missing a beat</p>
                            </div>
                            <div className="card flex flex-col justify-between gap-2">
                                <img className="w-[30px]" src="assets/switch to shopify.png" alt="" srcset="" />
                                <h2 className="text-xl font-semibold">Switch to Shopify</h2>
                                <p className="font-medium">Bring your business to Shopify, no matter which ecommerce
                                    platform you’re currently using.</p>
                            </div>
                            <div className="card flex flex-col justify-between gap-2">
                                <img className="w-[30px]" src="assets/shopify expert.png" alt="" srcset="" />
                                <h2 className="text-xl  font-semibold">Hire a Shopify expert</h2>
                                <p className="font-medium">Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* <!---Ecommerce-Platform---> */}
            <section className="ecom-platform">
                <div className="ecom-platform-content text-center mt-20 mb-20 ">
                    <h2 className="text-lg font-medium md:text-xl lg:text-3xl">With you wherever you’re going</h2>
                    <div className="mx-auto lg:max-w-[75ch]">
                        <p className="text-gray-600 text-xs  md:text-lg">One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</p>
                    </div>
                </div>
                {/* <!---Sell everywhere-section--> */}
                <div className="container flex flex-col-reverse lgm:flex-row md:items-start mx-auto">
                    <div className="ecom-platform-left w-full lgm:w-1/2">
                        <video src="assets/sell-animation.webm" autoplay loop muted></video>
                    </div>
                    <div className="ecom-platform-right flex flex-col xs:px-6 gap-8 lgm:mt-16 lgm:w-1/2">
                        <h2 className="text-lg font-medium md:text-xl lg:text-3xl">Sell everywhere</h2>
                        <p className="lg:max-w-[48ch]">Use one platform to sell products to anyone, anywhere—in person with Point of Sale and
                            online through your website, social media, and online marketplaces.</p>
                        <a href="#" className="font-bold text-darkgreen text-lg">Explore ways to sell
                            <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                        </a>
                    </div>
                </div>

                {/* <!--Market your business-section--> */}
                <div className="container flex flex-col-reverse gap-4 justify-between items-start lgm:items-center lgm:flex-row md:items-start mb-10 mx-auto px-5 xl:px-8">
                    <div className="ecom-platform-right flex flex-col  gap-8 mt-10 lgm:w-1/2">
                        <h2 className="text-lg font-medium md:text-xl lg:text-3xl">Market your business</h2>
                        <p>Take the guesswork out of marketing with built-in tools that help you create,
                            execute,and analyze digital marketing campaigns</p>
                        <a href="#" className="font-bold text-darkgreen text-lg">Explore how to market your business
                            <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200"
                                src="assets/right-arrow - green.svg" alt="" srcset="" />
                        </a>
                    </div>
                    <div className="ecom-platform-left w-full lgm:w-1/2">
                        <img src="assets/market your business.webp" className="" alt="" srcset="" />
                    </div>
                </div>

                {/* <!---Manage everything-section---> */}
                <div className="container flex flex-col-reverse gap-4 justify-between items-start lgm:items-center lgm:flex-row md:items-start mx-auto mb-12">
                    <div className="ecom-platform-left w-full lgm:w-1/2">
                        <img src="assets/manage everything.png" alt="" srcset="" />
                    </div>
                    <div className="ecom-platform-right flex flex-col xs:px-6 gap-8 lgm:mt-16 lgm:w-1/2">
                        <h2 className="text-lg font-medium md:text-xl lg:text-3xl">Manage everything</h2>
                        <p className="lg:max-w-[48ch]">Gain the insights you need to grow—use a single dashboard
                            to manage orders, shipping, and payments anywhere you go.</p>
                        <a href="#" className="font-bold text-darkgreen text-lg">Explore how to manage your business
                            <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                        </a>
                    </div>
                </div>
            </section>

            {/* <!---Explore-more-section---> */}

            <section className="explore-more px-8 py-8 xl:px-20 bg-green">
                <div className="container mb-10">
                    <div className="">
                        <h2 className="text-2xl lg:text-[30px] mb-16 text-darkgreen">Explore more from Shopify in india</h2>
                    </div>
                    <div className="inner-container flex flex-col-reverse md:flex-row bg-white">
                        <div className="inner-container-left lg:pl-6 px-6 flex flex-col items-start justify-evenly xs:p-[2rem] lgm:w-1/2">
                            <h4 className="text-lg mb ">START</h4>
                            <h2 className="font-semibold text-xl max-w-[450px]">Launch your store with the help of a Shopify Expert</h2>
                            <p className="text-gray-600  max-w-[490px]">Find hundreds of experts from India ready to help you get your store up and running,
                                from choosing a theme to building a fully customized site.</p>
                            <a href="#" className="font-bold text-darkgreen text-lg">Browse Experts in India
                                <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                            </a>
                        </div>
                        <div className="inner-container-right lgm:w-1/2 md:w-2/3">
                            <img src="assets/explore more.webp" className="h-[100%]" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!---Independent-Business---> */}
            <section className="globe xl:px-16 md:px-8 xs:px-4">
                <div className="container mt-10">
                    <div className="globe-content flex flex-col">
                        <h2 className="text-2xl lg:text-[30px] mb-6">Empowering independent business owners everywhere</h2>
                        <p className="text-gray-600 text-[24px] mb-6">Millions of businesses in <strong>175 countries</strong>
                            around the world have made over<strong> $496 billion USD </strong>in sales using Shopify.</p>
                        <a href="#" className="font-bold text-darkgreen text-lg mb-8">Learn more about Shopify
                            <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                        </a>
                    </div>
                    <div className="globe-img">
                        <img src="assets/globe.webp" alt="" srcset="" />
                    </div>
                </div>
            </section>

            {/* <!---Testimonals-section---> */}
            <section className="testimonals-section xl:px-16 md:px-8 xs:px-6 sm:px-8 mt-20 mb-20">
                <div className="container flex flex-col md:flex-row">
                    <div className="testimonals-left md:w-1/2">
                        <img src="assets/testmonial image.webp" className="h-[100%] w-[100%] object-cover" alt="" srcset="" />
                    </div>
                    <div className="testimonals-right md:w-1/2 bg-darkgreen p-8 text-center text-white flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-between items-center md:w-[70%]">
                            <p className="text-2xl font-bold mb-10">“Shopify was my knight in shining armor when I exhausted every other possibility of getting my online store up and running.
                                It was stunningly easy to use, with more features and plug-ins that I didn't even know I wanted.”</p>
                            <img src="assets/testi signature.avif" className="w-[150px]" alt="" srcset="" />
                            <p className="mt-4 font-bold text-xl">Alicia | Alicia Souza</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--Brands--> */}
            <section className="brands xl:px-4 md:px-8 xs:px-6 sm:px-8 mb-16">
                <div className="container flex justify-evenly flex-wrap items-center gap-4">
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/bazaao.webp" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/jhon jacobs.webp" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/kylie.avif" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/nush.avif" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/yoga bar.avif" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/star struck.webp" alt="" srcset="" />
                    </div>
                    <div className="brand-card">
                        <img className="w-[110px]" src="assets/m caffeine.avif" alt="" srcset="" />
                    </div>
                </div>
            </section>

            {/* <!--help-support--> */}
            <section className="help-support bg-bgbody mb-10">
                <div className="container flex flex-col md:flex-row mx-auto">
                    <div className="help-support-left mx-8 mt-24 w-1/2">
                        <h2 className="text-2xl font-bold">Get the help you need, every step of the way</h2>
                        <div className="help-support-cards flex flex-col md:grid md:grid-cols-2 mt-10 gap-6">
                            <div className="card flex flex-col gap-4">
                                <h2 className="text-lg font-medium">Shopify support</h2>
                                <p>Contact support 24/7, whether you’re troubleshooting issues or looking for business advice.</p>
                                <a href="#" className="font-bold text-darkgreen text-lg mb-8">Contact Support
                                    <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                                </a>
                            </div>
                            <div className="card flex flex-col gap-4">
                                <h2 className="text-lg font-medium">Shopify App Store</h2>
                                <p>Add features and functionality to your business with 6,000+ apps that integrate directly with Shopify.</p>
                                <a href="#" className="font-bold text-darkgreen text-lg mb-8">Visit the Shopify Store
                                    <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                                </a>
                            </div>
                            <div className="card flex flex-col gap-4">
                                <h2 className="text-lg font-medium">Shopify Experts Marketplace</h2>
                                <p>Hire a Shopify expert to help you with everything from store setup to SEO.</p>
                                <a href="#" className="font-bold text-darkgreen text-lg mb-8">Explore the Shopify Experts MarketPlace
                                    <img className="inline w-[22px] transition transform hover:translate-x-1 ease-in-out duration-200" src="assets/right-arrow - green.svg" alt="" srcset="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="help-support-right xs:px-4 md:px-0 md:w-1/2">
                        <img className="h-[100%] w-[100%] object-cover" src="assets/get the help you need 1600.webp" alt="" srcset="" />
                    </div>
                </div>
            </section>

            {/* <!---Free-Trial---> */}
            <section className="free-trial">
                <div className="container mt-20 mb-20 mx-auto sm:px-4 xs:px-2">
                    <div className="free-trial-content flex flex-col gap-6 justify-between items-center">
                        <h2 className="font-bold text-2xl">Start your business journey with Shopify</h2>
                        <p className="text-gray-600 text-xl md:px-8 lg:px-0 md:text-[1em] lg:text-xl">Try Shopify for free, and explore all the tools and services you need to
                            start, run, and grow your business.</p>
                        <a href="#" className="text-gray-700 text-lg   px-4 py-2 bg-[#008060] rounded text-white font-bold hover:bg-[#004C3F] transition ease-in-out">Try for Free </a>
                        <div className="flex flex-row justify-center md:justify-end w-full sm:justify-self-center">
                            <a href="#" className="text-darkgreen text-lg font-bold">Back to Top <img className="w-[22px] inline transition transform hover:-translate-y-6 ease-in-out duration-300" src="assets/up arrow.svg" alt="" srcset="" /></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
