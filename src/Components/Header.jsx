import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';
import { useContext } from 'react';
import { Store } from '../Store/Store';

const Header = () => {

    const location = useLocation();

    const { cartProductQuantity, wishlistQuantity } = useContext(Store)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShowSearchBox, setisShowSearchBox] = useState(false);
    const inputRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            setisShowSearchBox(false)
            setIsMenuOpen(false)
        };

        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setisShowSearchBox(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header>
                <div className='hidden px-4  bg-[#252424] md:flex items-center justify-between'>
                    <p className='text-[#b2b2b2] text-sm'>Free shipping for standard order over $100</p>
                    <div>
                        <ul className='font-poppins text-[#b2b2b2] text-[12px] flex'>
                            <li className='px-6 py-2 border-l-[1px] border-r-[1px] border-[#ffffff8a]'>
                                <a href="#">Help & FAQs</a>
                            </li>
                            <li className='px-6 py-2 border-l-[1px] border-r-[1px] border-[#ffffff8a]'>
                                <a href="#">My Account</a>

                            </li>
                            <li className='px-6 py-2 border-l-[1px] border-r-[1px] border-[#ffffff8a]'>
                                <a href="#">EN</a>
                            </li>
                            <li className='px-6 py-2 border-l-[1px] border-r-[1px] border-[#ffffff8a]'>
                                <a href="#">USD</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className={`static md:fixed w-full py-5 md:py-7  flex ${isScrolled ? 'bg-white shadow-md top-0' : 'bg-transparent'} transition-all duration-300 z-30 ${location.pathname !== '/' && 'bg-white'}`}>
                <nav className='w-full flex items-center justify-between px-5'>
                    <div className='z-20'>
                        <NavLink to='/'>
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="Logo" />
                        </NavLink>
                    </div>
                    <div
                        className={`md:static absolute left-0 w-full bg-[#c5aa6a] transition-all duration-700 ${isMenuOpen ? 'top-16' : 'top-[-100%]'
                            } md:translate-x-0 md:bg-transparent md:h-auto md:w-auto md:flex md:items-center z-20`}
                    >
                        <ul className={`flex flex-col md:flex-row gap-4 md:gap-6 font-poppins font-[500] text-sm text-[#ecebf7] md:text-[#333] p-5 md:p-0`}>
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'text-[#fff] md:text-[#c5aa6a]' : 'transition-all duration-300 hover:text-[#c5aa6a]'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/men'
                                    className={({ isActive }) => isActive ? 'text-[#fff] md:text-[#c5aa6a]' : 'transition-all duration-300 hover:text-[#c5aa6a]'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    MEN'S
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/women'
                                    className={({ isActive }) => isActive ? 'text-[#fff] md:text-[#c5aa6a]' : 'transition-all duration-300 hover:text-[#c5aa6a]'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    WOMEN"S
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/babycollection'
                                    className={({ isActive }) => isActive ? 'text-[#fff] md:text-[#c5aa6a]' : 'transition-all duration-300 hover:text-[#c5aa6a]'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    BabyCollection
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => isActive ? 'text-[#fff] md:text-[#c5aa6a]' : 'transition-all duration-300 hover:text-[#c5aa6a]'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='flex gap-5 text-2xl'>
                        <div>
                            <IoMdSearch onClick={() => setisShowSearchBox(!isShowSearchBox)} className='cursor-pointer hover:text-[#c5aa6a] transition-all duration-500' />
                            <div ref={inputRef} className={`${isShowSearchBox ? 'top-[80px]' : 'top-[-200%]'} absolute left-0 px-5 w-full z-[0] transition-all duration-1000`}>
                                <input ref={inputRef} className='border-2 w-full py-2 pl-4 text-sm outline-none border-[#c5aa6a] rounded' type="text" placeholder='Search...' />
                            </div>
                        </div>
                        <div className='relative'>
                            <NavLink to='/cart'>
                                <IoMdCart className='cursor-pointer hover:text-[#c5aa6a] transition-all duration-500' />
                                <span className='absolute bg-[#c5aa6a] px-[6px] left-3 top-[-18px] text-[#fff] text-sm'>{cartProductQuantity}</span>
                            </NavLink>
                        </div>
                        <div className='relative'>
                            <NavLink to='wishlist' >
                            <FaRegHeart className='cursor-pointer hover:text-[#c5aa6a] transition-all duration-500' />
                            <span className='absolute bg-[#c5aa6a] px-[6px] left-3 top-[-18px] text-[#fff] text-sm'>{wishlistQuantity}</span>
                            </NavLink>
                        </div>
                        <div className='block md:hidden'>
                            <button className='m-0 p-0' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    );
};

export default Header;