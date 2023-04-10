import React from 'react'

export default function footer() {
  return (
    <div>

    <footer class="web-footer bg-[#002E25]">
    {/* <!---footer-nav---> */}
    <div class="container mx-auto  px-5 xl:px-20">
        <div class="footer-nav text-white border-b-[1px]">
            <ul class="flex flex-wrap md:flex-row gap-6">
                <li class=" hover:border-b-2 leading-[4rem]"><a href="#" class="">About</a></li>
                <li class="hover:border-b-2 leading-[4rem]"><a href="#" class="">Careers</a></li>
                <li class="hover:border-b-2 leading-[4rem]"><a href="#" class="">Press and Media</a></li>
                <li class="hover:border-b-2 leading-[4rem]"><a href="#" class="">Shopify Plus</a></li>
                <li class="hover:border-b-2 leading-[4rem]"><a href="#" class="">Sitemap</a></li>
            </ul>
        </div>

        {/* <!---footer-mid---> */}
        <div class="footer-mid flex flex-col md:flex-row gap-8">
            {/* <!---Online store--> */}
            <div class="online-store mt-4">
                <h2 class="font-bold text-white">ONLINE STORE</h2>
                <div class="grid  md:flex flex-row items-start gap-4">
                    <div class="text-gray-400">
                        <ul class="flex flex-col gap-2 mt-4">
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Sell online</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Features</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Examples</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Website Builde</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Online retail</a></li>
                        </ul>
                    </div>
                    <div class="text-gray-400">
                        <ul class="flex flex-col gap-2 mt-4">
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Ecommerce website</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Domain names</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Themes</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Shopping cart</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">E-commerce hosting</a></li>
                        </ul>
                    </div>
                    <div class="text-gray-400">
                        <ul class="flex flex-col gap-2 mt-4">
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Mobile commerce</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Ecommerce software</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Online store builder</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Dropshipping Business</a></li>
                            <li class=""><a href="#" class="hover:text-[#EDEADE]">Store themes</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!---Point of sale---> */}
            <div class="footer-mid-2 grid md:flex gap-8">     
                <div class="mt-4 flex flex-col text-gray-400">
                    <div>
                        <h2 class="font-bold text-white">POINT OF SALE</h2>   
                    </div>
                    <div class="flex flex-col gap-2">
                        <a href="#" class="hover:text-[#EDEADE]">Point of Sale</a>
                        <a href="#" class="hover:text-[#EDEADE]">Features</a>
                    </div>          
                </div>
                {/* <!--Support---> */}
                <div class="mt-4 flex flex-col text-gray-400">
                    <div>
                        <h2 class="font-bold text-white">SUPPORT</h2>   
                    </div>
                    <ul class="flex flex-col gap-2 mt-4">
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">24/7 support</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Shopify Help Center</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Shopify Community</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">API Documentation</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Free tools</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Free stock photos</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Websites for sale</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Logo Maker</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Business name generator</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Research</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Legal</a></li>
                    </ul>
                </div>

                <div class="mt-4 flex flex-col text-gray-400 ">
                    <div>
                        <h2 class="font-bold text-white">SHOPIFY</h2>   
                    </div>
                    <ul class="flex flex-col gap-2 mt-4">
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Contact</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Partner program</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Affiliate Program</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">App developers</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Investors</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Blog topics</a></li>
                        <li class=""><a href="#" class="hover:text-[#EDEADE]">Community Events</a></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* <!---start with footer-social--> */}
    </div>
    <hr class="my-6 border-t-1 border-[#6b7177]"/>

    <div class="container mx-auto  px-5 xl:px-20">
        <div class="footer-socials py-6 flex flex-col gap-6 md:flex-row justify-between">
            <div class="social-icons flex gap-6">
                <a href=""><img class="w-[22px]" src="assets/fb.png" alt="" srcset=""/></a>
                <a href=""><img class="w-[22px]" src="assets/twitter.png" alt="" srcset=""/></a>
                <a href=""><img class="w-[22px]" src="assets/youTube.png" alt="" srcset=""/></a>
                <a href=""><img class="w-[22px]" src="assets/instagram.png" alt="" srcset=""/></a>
                <a href=""><img class="w-[22px]" src="assets/linkedIn.png" alt="" srcset=""/></a>
                <a href=""><img class="w-[22px]" src="assets/pinterest.png" alt="" srcset=""/></a>
            </div>
            <div class="social-content flex gap-2 text-gray-400">
                <a href="" class="hover:text-[#EDEADE]">Terms of Service</a>
                <a href="" class="hover:text-[#EDEADE]">Privacy Policy</a>
                <div class="flex items-center gap-2">
                    <img src="assets/globe_location_map_world_icon.svg" class="w-[28px]" alt="" srcset=""/>
                    <span>India</span>
                    <img src="assets/caret_down_icon.svg" class="w-[15px]" alt="" srcset=""/>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}
