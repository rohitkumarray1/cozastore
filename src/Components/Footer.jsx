import React from 'react'

import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {


    return (
        <>
            <footer className='bg-[#222] pb-8 pt-16 text-white'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 px-4'>
                    <div>
                        <h4 className='font-Montserrat font-bold pb-7'>CATEGORIES</h4>
                        <ul className='font-poppins text-[12px] text-[#b2b2b2]'>
                            <li className='pb-3'><a href="#">Women</a></li>
                            <li className='pb-3'><a href="#">Men</a></li>
                            <li className='pb-3'><a href="#">Shoes</a></li>
                            <li className='pb-3'><a href="#">Watches</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-Montserrat font-bold pb-7'>HELP</h4>
                        <ul className='font-poppins text-[12px] text-[#b2b2b2]'>
                            <li className='pb-3'><a href="#">Track Order</a></li>
                            <li className='pb-3'><a href="#">Returns</a></li>
                            <li className='pb-3'><a href="#">Shipping</a></li>
                            <li className='pb-3'><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-Montserrat font-bold pb-7'>GET IN TOUCH</h4>
                        <p className='font-poppins text-[12px] text-[#b2b2b2] leading-5'>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className='flex gap-4 pt-5 text-[#b2b2b2]'>
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-Montserrat font-bold pb-7'>NEWSLETTER</h4>
                        <input className='outline-none bg-transparent border-b-[1px] pb-2' type="text" placeholder='email@example.com' />
                        <div className='pt-5'>
                            <button className='h-[46px] font-poppins rounded-full font-semibold text-[13px] min-w-[179px] bg-[#c5aa6acc] transition-colors duration-300 hover:bg-[#fff] hover:text-[#c5aa6acc]'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className='pt-10'>
                    <div className='flex justify-center pb-4'>
                        <a href="#">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" alt="" />
                        </a>
                    </div>
                    <p className='flex items-center justify-center gap-1 font-poppins text-[12px] text-[#888]'>
                        Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by Rohit
                    </p>
                </div>
            </footer>
        </>
    )
}



export default Footer