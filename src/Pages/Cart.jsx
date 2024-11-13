import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../Store/Store'
import { LiaTimesSolid } from "react-icons/lia";

const Cart = () => {

  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  const { cartProduct, cartProductQuantity, cartPrice, cartDiscount, cartDelivery, cartTotalAmount, cartSallerPrice, handelRemoveCartProduct } = useContext(Store)
  return (
    <>
      <div className='flex flex-wrap md:px-4 justify-between relative my-6 md:mt-24'>
        <div className='md:w-[600px] shadow-[0_5px_10px_rgba(91,91,91,0.3)]'>
          {cartProduct.map((product, index) => (
            <div key={index}>
              <div className='p-6 flex gap-4 relative'>
                <div>
                  <img className='w-32' src={product.images[0]} alt="" />
                </div>
                <div>
                  <h2 className='text-xl font-semibold'>{product.name}</h2>
                  <div className='py-1 flex gap-4'>
                    <p className=''>{Math.floor(cartSallerPrice)}</p>
                    <p className='line-through'>₹{product.price}</p>
                    <p className=' text-red-500'>{product.discount_percentage}% off</p>
                  </div>
                  <p className='py-1'>{product.description}</p>
                </div>
                <div className='pl-12 absolute right-5 z-50 cursor-pointer' onClick={() => handelRemoveCartProduct(product.id)}>
                  <LiaTimesSolid />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full md:w-[350px] sticky top-0 bg-[#fff] h-[90vh] p-6 shadow-[0_5px_10px_rgba(91,91,91,0.3)]'>
          <h2 className='text-xl text-[#878787] mb-4'>Price Details</h2>
          <hr />
          <div className='flex pt-4 justify-between px-2'>
            Price ({cartProductQuantity} items)
            <p>₹{cartPrice}</p>
          </div>
          <div className='flex justify-between mt-4 px-2'>
            <div className='flex flex-col gap-4'>
              <p>Discount</p>
              <p>Delivery Charges</p>
            </div>
            <div className='flex flex-col gap-4 text-right'>
              <p>- ₹{Math.floor(cartDiscount)}</p>
              <p><span className='line-through'>₹{cartDelivery}</span> Free</p>
            </div>
          </div>
          <div className='flex my-4 border-b-2 border-t-2 py-4 justify-between px-2'>
            <h2 className='text-xl'>Total Amount</h2>
            <p>{Math.floor(cartTotalAmount)}</p>
          </div>
          <p className='text-sm mt-4 text-center'>You will save ₹{Math.floor(cartDiscount)} on this order</p>

        </div>
      </div>
      <div className='fixed w-full bottom-0 z-10 bg-[#ffffff] py-6 text-right shadow-[0_5px_10px_rgba(91,91,91,0.3)]'>
        <Link to='/contact' className='bg-red-500 px-12 py-4 text-white rounded'>PLACE ORDER</Link>
      </div>
    </>
  )
}

export default Cart