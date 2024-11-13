import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext } from 'react';
import { Store } from '../Store/Store';


const Product = ({ product }) => {

    const { handleAddtoCart, addCartMsg, handleWishlist, addWishlist, setAddWishlist } = useContext(Store)
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null)
    const [imageIndex, setImageIndex] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0)
    const [addedCart, setAddedCart] = useState(false)
    const discountAmount = product.price * product.discount_percentage / 100;
    const sallerPrice = product.price - discountAmount;


    const handleProductHover = (productId) => {
        setHoveredProduct(productId)
    }

    const handleProductLeave = () => {
        setHoveredProduct(null)
    }

    const handleSeletedProductId = (productId) => {
        setSelectedProductId(productId)
    }

    const handelNextImage = () => {
        if (imageIndex < product.images.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    const handelPrevImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(product.images.length - 1)
        }
    }


    return (
        <>
            <div className='p-5 text-center w-full'>
                <div className='border-4 w-full cursor-pointer overflow-hidden relative'>
                    <img className={`${hoveredProduct === product.id ? 'scale-110' : 'scale-100'} transition-all duration-1000`} src={product.images[0]} alt="product image" onMouseEnter={() => handleProductHover(product.id)} onMouseLeave={handleProductLeave} />

                    <div className={`${hoveredProduct === product.id ? 'bottom-[10%]' : 'bottom-[-100%]'} absolute transition-all duration-1000 w-full`} onMouseEnter={() => handleProductHover(product.id)}>
                        <button onClick={() => handleSeletedProductId(product.id)} className='bg-[#fff] px-8 py-[10px] text-sm font-semibold text-[#666] rounded-full hover:bg-[#222] hover:text-[#fff] transition-all duration-500'>Quick View</button>
                    </div>

                </div>
                <div className='flex items-center justify-between px-2 text-center'>
                    <div className='w-full'>
                        <p onClick={() => handleSeletedProductId(product.id)} className='text-sm text-[#999] cursor-pointer'>{`${product.name.slice(0, 25)} ${product.name.length > 25 ? '...' : ''}`}</p>
                        <div>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className='text-[gold]'>
                                    ★
                                </span>
                            ))}
                        </div>
                        <div>
                            <span className='text-[#666] text-sm'>₹{Math.floor(sallerPrice)}</span>

                        </div>
                    </div>
                    <div className='cursor-pointer' onClick={() => {
                        handleWishlist(product)
                    }}>
                        {addWishlist === product.id ?
                            <FaHeart className='text-[#717fe0] text-xl' />
                            : <FaRegHeart className='text-[#666] text-xl' />
                        }

                    </div>
                </div>
            </div>

            {selectedProductId != null && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 px-6 overflow-hidden'>
                    <div className='absolute right-10 top-2'>
                        <button onClick={() => setSelectedProductId(null)}>
                            <LiaTimesSolid className='text-3xl text-[#fff]' />
                        </button>
                    </div>
                    <div className='bg-white h-[93%] md:h-[90%] px-6 my-12 py-16 overflow-scroll md:overflow-hidden'>
                        {selectedProductId === product.id ? (
                            <div className='grid md:grid-cols-5 '>
                                <div className=' flex gap-8 col-span-3'>
                                    <div className='w-[15%] flex flex-col gap-y-8'>
                                        <img className='cursor-pointer border-2 rounded' src={product.images[0]} onClick={() => setImageIndex(0)} />
                                        <img className='cursor-pointer border-2 rounded' src={product.images[1]} onClick={() => setImageIndex(1)} />
                                        <img className='cursor-pointer border-2 rounded' src={product.images[2]} onClick={() => setImageIndex(2)} />
                                    </div>
                                    <div className='h-[90%] relative'>
                                        <img className='h-full' src={product.images[imageIndex]} />
                                        <div className='absolute w-full flex justify-between top-1/2'>
                                            <span className='bg-[#00000080] p-2 rounded cursor-pointer' onClick={handelNextImage}>
                                                <IoIosArrowBack className='text-2xl text-white' />
                                            </span>
                                            <span className='bg-[#00000080] p-2 rounded cursor-pointer' onClick={handelPrevImage}>
                                                <IoIosArrowForward className='text-2xl text-white' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <h2 className='text-3xl text-[#333] pb-4'>{product.name}</h2>
                                    <div className='flex gap-4 font-semibold items-center'>
                                        <p className='text-2xl text-[#333]'>₹{Math.floor(sallerPrice)}</p>
                                        <p className='line-through text-sm text-[#878787]'>₹{product.price}</p>
                                        <p className='text-[#ff0000]'>{product.discount_percentage}% off</p>
                                    </div>
                                    <p className='text-[#666] pt-6'>{product.description}</p>

                                    <div className='pt-8'>
                                        <span className='pr-8 text-[#666] font-semibold'>Size</span>
                                        <select className='border-2 text-[15px] text-[#444] outline-none px-4 py-[2px] font-poppins'>
                                            <option value='Chose an options' selected>Chose an option</option>
                                            {product.size.map((size, index) =>
                                                <option key={index}>Size {size}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='pt-4'>
                                        <span className='pr-6 text-[#666] font-semibold'>Color</span>
                                        <select className='border-[3px] text-[15px] text-[#444] outline-none px-4 py-[2px] font-poppins'>
                                            <option value='Chose an options' selected>Chose an option</option>
                                            {product.color.map((color, index) =>
                                                <option key={index}>{color}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mt-8 ml-16'>
                                        <span className='text-xl py-3 px-4 border-2 cursor-pointer hover:bg-[#c5aa6a] transition-all duration-500' onClick={() => setProductQuantity(productQuantity > 0 ? productQuantity - 1 : 0)}> - </span>
                                        <span className='text-xl py-3 px-4 border-2 bg-[#e6e2e2]'>{productQuantity}</span>
                                        <span className='text-xl py-3 px-4 border-2 cursor-pointer hover:bg-[#c5aa6a] transition-all duration-500' onClick={() => setProductQuantity(productQuantity + 1)}>+</span>
                                    </div>
                                    <div className='mt-12  ml-12'>
                                        <button className='bg-[#c5aa6a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#635e52] transition-all duration-1000' onClick={() => {
                                            handleAddtoCart(product)
                                            setAddedCart(true)
                                        }}>ADD TO CART</button>
                                    </div>
                                    <div className='ml-12 mt-8 flex gap-6'>
                                        <div className='cursor-pointer' onClick={() => {
                                            handleWishlist(product)
                                        }}>
                                            {addWishlist === product.id ?
                                                <FaHeart className='text-[#717fe0] text-xl' />
                                                : <FaRegHeart className='text-[#666] text-xl' />
                                            }
                                        </div>
                                        <FaFacebookF className='text-[#666] text-xl' />
                                        <FaTwitter className='text-[#666] text-2xl' />
                                        <FaGooglePlusG className='text-[#666] text-2xl' />
                                    </div>
                                </div>
                            </div>
                        ) :
                            ''
                        }
                    </div>

                    {addedCart ? <div className='absolute top-2 w-[70%]'>
                        <p className='text-white text-[12px] md:text-2xl'>{addCartMsg}</p>
                    </div> : ''}
                </div>
            )}
        </>
    )
}


export default Product