"use client"
import React from 'react'
import Yantaraf from './yantaraf'

const index = () => {
    return (
        <div className='flex  justify-center items-center  gap-20  max-lg:flex-col max-md:mb-10 mb-16'>
            <div className='text-white flex flex-col gap-5'>
                <h3 className='text-5xl text-black font-fontpopins font-bold w-[600px] max-xl:text-4xl max-xl:w-[400px] max-md:w-[90%] max-md:m-auto max-md:text-2xl'>Oltu Sosyal Tesisler</h3>
                <p className='text-lg text-black w-[600px] opacity-70 mt-8 max-xl:text-base max-xl:w-[400px] max-md:w-[90%] max-md:m-auto max-md:text-sm  '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur quos temporibus ipsam iure, nesciunt eveniet iste rem hic aliquid nobis amet sint quia dolorem deserunt corporis magni, odit eligendi!
                </p>
            </div>
            <Yantaraf />
        </div>
    )
}

export default index