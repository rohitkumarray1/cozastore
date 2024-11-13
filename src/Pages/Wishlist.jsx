import React, { useContext } from 'react';
import { Store } from '../Store/Store';
import { MdModeEdit } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

const Wishlist = () => {
    const { wishlistProducts, handleAddtoCart, handelRemove } = useContext(Store);

    return (
        <div className='mt-20 px-5'>
            <div className='flex items-center gap-4'>
                <h2 className='font-semibold text-2xl'>My Wishlist</h2>
                <MdModeEdit className='text-sl' />
            </div>
            <div className='grid grid-cols-4 md:grid-cols-6 border-y-2 py-4 mt-6 md:py-6 text-[#666] text-sm md:text-xl gap-4'>
                <p className='hidden : md:block'></p>
                <p>Product Image</p>
                <p>Product Name</p>
                <p>Discounted Price</p>
                <p className='hidden : md:block'>Stock Status</p>
                <p>Actions</p>
            </div>

            {wishlistProducts.map((product, index) => {
                const discountAmount = product.price * (product.discount_percentage / 100);
                const discountedPrice = product.price - discountAmount;

                return (
                    <div key={index} className='grid grid-cols-4 md:grid-cols-6 border-b-2 py-4 md:py-5 text-sm md:text-base gap-4 items-center'>
                        <div className='pl-12 cursor-pointer' onClick={() => handelRemove(product.id)}>
                            <LiaTimesSolid />
                        </div>
                        <div>
                            <img className='w-16' src={product.images[0]} alt={product.name} />
                        </div>
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <div>
                            <p>{Math.floor(discountedPrice.toFixed(2))}</p>
                        </div>
                        <div>
                            <p>In Stock</p>
                        </div>
                        <div>
                            <button onClick={() => {
                                handleAddtoCart(product)
                            }} className='bg-[#563328] font-semibold text-sm px-4 py-3 rounded text-white'>Add To Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Wishlist;