import React from 'react'

export default function navbar() {
    // console.log('hey');
    return (
        <div>
            <section className="navbar">
                <nav className="bg-bgbody px-5 xl:px-20 menu flex min-h-[75px] flex-row justify-between items-center mx-auto fixed top-0 left-0 right-0 transition-all ease-in-out duration-200 z-20">
                    <div className="menu-left flex flex-row justify-between items-center gap-[25px]">
                        <a href="/"><img className="w-[110px]" src="assets/Shopify_logo_2018.svg" alt="" srcset="" /></a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Start <img src="assets/arrow_down_icon.svg" className="inline-block w-[19px]" alt="" srcset="" /></a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Sell <img src="assets/arrow_down_icon.svg" className="inline-block w-[19px]" alt="" srcset="" /></a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Market <img src="assets/arrow_down_icon.svg" className="inline-block w-[19px]" alt="" srcset="" /></a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Manage <img src="assets/arrow_down_icon.svg" className="inline-block w-[19px]" alt="" srcset="" /></a>
                    </div>
                    <div className="menu-right flex flex-row items-center gap-6">
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Pricing</a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Learn <img src="assets/arrow_down_icon.svg" className="inline-block w-[19px]" alt="" srcset="" /></a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block">Log In </a>
                        <a href="/" className="text-gray-700 text-lg hidden lgm:block px-4 py-2 bg-[#008060] rounded text-white font-bold hover:bg-[#004C3F] transition ease-in-out">Try for Free </a>
                        <img src="/assets/menu_icon.svg" alt="menu" className="visible lgm:hidden" />
                    </div>
                </nav>
            </section>

        </div>
    )
}
