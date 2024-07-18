import React from 'react'
import Right from './right'
import Mb from "@/components/about/mb"


const index = () => {
    return (
        <div className='bg-white text-black max-md:py-8 mt-20 py-16'>
          <div className='xl:w-[66%] flex justify-between items-center max-lg:flex-col max-lg:w-[90%] max-xl:w-[90%]  m-auto'>
            <img className='w-[40%] max-md:w-[100%]' src="resim.webp" alt="menu" />
            <Right />
          </div>
          <Mb />
        </div>
    )
}

export default index