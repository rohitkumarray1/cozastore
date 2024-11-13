import React from 'react'
import { useContext } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { Store } from './Store';


const ScrollTop = () => {

  const { scrollTop } = useContext(Store)

  return (
    <div className='fixed bottom-10 right-5'>
      <div className='w-10 h-10 rounded bg-[#c5aa6acc] flex justify-center items-center cursor-pointer' onClick={scrollTop}>
        <IoIosArrowUp className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default ScrollTop