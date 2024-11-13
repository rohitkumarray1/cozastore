import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/cozastore/images/bg-01.jpg")' }} className='h-[400px] bg-cover bg-center flex items-center justify-center'>
        <h2 className='text-4xl font-bold text-white'>Contact</h2>
      </div>

      <div className='grid md:grid-cols-2 p-5 my-14'>
        <div className='p-5 md:p-10 pt-14 border-2'>
          <h2 className='text-2xl pb-8 text-center'>Send Us A Message</h2>
          <div className=' border-2 flex items-center gap-4 pl-4 mb-4'>
            <TfiEmail className='text-xl text-[#666] rounded' />
            <input className='outline-none py-3 w-[90%]' type="text" placeholder='Your Email Address' />
          </div>
          <textarea className='min-h-[200px] w-full p-5 outline-none border-2' placeholder='How Can We Help?'></textarea>
          <button className='w-full h-[46px] mt-4 bg-[#222] text-[#fff] rounded-full hover:bg-[#c5aa6a] transition-all duration-500'>SUBMIT</button>
        </div>
        <div className='p-5 md:p-10 border-2'>
          <div className='flex gap-6 md:w-[300px] mb-8'>
            <IoLocationOutline className='text-4xl' />
            <div>
              <p className='text-xl'>Address</p>
              <p className='text-[#666] pt-2'>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            </div>
          </div>
          <div className='flex gap-6 md:w-[300px] mb-8'>
            <IoCallOutline className='text-2xl' />
            <div>
              <p className='text-xl'>Lets Talk</p>
              <p className='text-[#717fe0] pt-2'>+1 800 1236879</p>
            </div>
          </div>
          <div className='flex gap-6 md:w-[300px]'>
            <MdOutlineMailOutline className='text-2xl' />
            <div>
              <p className='text-xl'>Sale Support</p>
              <p className='text-[#717fe0] pt-2'>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <iframe
          className='w-full border-2'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4098768376743!2d77.10689677469654!3d28.707294380683166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0122b819c2c7%3A0x2b9078ff03b6391e!2sJeetech%20Academy%20%7C%20Best%20Computer%20%7C%20Data%20Science%20%7C%20Data%20Analytics%20Training%20Classes%20Delhi%20Rohini%20Pitampura!5e0!3m2!1sen!2sin!4v1730541398095!5m2!1sen!2sin"
          loading="lazy"
          height={500}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Contact