import React, { useState, useContext, useEffect } from 'react';
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { Store } from '../Store/Store';
import Product from './Product';
import { useLocation } from 'react-router-dom';

const Products = ({ filteredProducts }) => {

    const location = useLocation();
    const [isShowSearchBox, setisShowSearchBox] = useState(false);
    const { productsData } = useContext(Store);
    const [productsCategory, setProductCategory] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        if (!filteredProducts) {
            setProductCategory(productsData)
        }
    }, [productsData, filteredProducts])

    const handleCategory = (category) => {
        setActiveCategory(category)
        if (category === 'All') {
            setProductCategory(productsData);
        } else {
            const filteredProductsCategory = productsData.filter(product => product.category === category)
            setProductCategory(filteredProductsCategory)
        }
    }

    const handelSearch = (e) => {
        setSearchQuery(e.target.value)
    };

    const productsToDisplay = filteredProducts || productsCategory;
    const filteredProductsBySearch = productsToDisplay.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
            {location.pathname === '/' ? (
                <div className={`flex flex-wrap justify-center md:justify-between relative px-5`}>
                    <div className='flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 py-3'>
                        <button onClick={() => handleCategory('All')}
                            className={`${activeCategory === 'All' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            All Products
                        </button>
                        <button onClick={() => handleCategory('Women')}
                            className={`${activeCategory === 'Women' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            Women
                        </button>
                        <button onClick={() => handleCategory('Men')}
                            className={`${activeCategory === 'Men' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            Men
                        </button>
                        <button onClick={() => handleCategory('Bag')}
                            className={`${activeCategory === 'Bag' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            Bag
                        </button>
                        <button onClick={() => handleCategory('Shoes')}
                            className={`${activeCategory === 'Shoes' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            Shoes
                        </button>
                        <button onClick={() => handleCategory('Watches')}
                            className={`${activeCategory === 'Watches' ? ' text-[#c5aa6a]' : ''} font-semibold hover:text-[#c5aa6a] transition-all duration-300`}>
                            Watches
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex gap-2 rounded items-center justify-center border-[1px] min-w-[94px] h-[40px] cursor-pointer hover:bg-[#c5aa6a] hover:text-white transition-all duration-500'>
                            <IoFilterOutline />
                            Filter
                        </div>
                        <div className={`${isShowSearchBox && 'bg-[#cfcdc934]'} flex gap-2 rounded items-center justify-center border-[1px] min-w-[94px] h-[40px] cursor-pointer hover:bg-[#c5aa6a] hover:text-white transition-all duration-500`} onClick={() => setisShowSearchBox((prev) => !prev)}>
                            {isShowSearchBox ? <IoMdClose /> : <IoMdSearch />}
                            Search
                        </div>
                    </div>
                    <div className={`${isShowSearchBox ? 'block opacity-100' : 'hidden opacity-0'} w-full flex items-center pl-3 gap-2 my-3 transition-all duration-1000 border-2`}>
                        <IoMdSearch />
                        <input className='w-full outline-none py-2' type="text" placeholder='Search...'
                            value={searchQuery} onChange={(e) => handelSearch(e)}
                        />

                    </div>
                </div>
            ) : ''
            }

            <div className={`${location.pathname !== '/' && 'mt-20'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4`}>
                {filteredProductsBySearch.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>

            <div className='text-center my-12'>
                <button className='bg-[#e6e6e6] h-[46px] w-[179px] rounded-full text-sm text-[#222] hover:bg-[#222] hover:text-[#fff] transition-all duration-500'>LOAD MORE</button>
            </div>
        </>
    );
};



export default Products;
