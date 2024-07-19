import React from 'react'


const index = () => {
  return (
    <div id='inceleyin' className='scroll-mt-[100px] flex mb-44 max-md:mb-20  justify-center items-center w-[80%] m-auto mt-20 max-md:mt-0 max-lg:flex-col max-lg:w-full max-xl:w-[90%]'>
      <div className=' flex items-center justify-center    m-auto max-lg:flex-col max-lg:gap-16 max-lg:w-[90%] '>
        <div className='flex flex-col gap-10 max-md:gap-6'>
          <h2 className='text-black font-fontpopins text-4xl w-[80%] font-extrabold max-lg:text-3xl max-xl:text-3xl  max-md:text-2xl max-lg:w-full'>Oltu Belediyesi Sosyal Tesislerinin İmkanları Nelerdir? </h2>
          <ul className='flex flex-col gap-3 mt-7 text-black'>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5 ' src="koksal.svg" alt="qr menü teması" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü iletişim" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non?</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü işletme hesabı" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü entegrasyon" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü hazır" /> <p className='text-xl font-medium tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Lorem ipsum dolor sit amet.lorem dolar sit lorem lorem</p>

            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center max-lg:w-[95%] max-lg:mt-10  m-auto max-lg:flex-col max-lg:gap-16 '>
        <img className='w-[550px]  max-md:object-cover max-md:w-full   rounded-md' src="sosyaltesis.gif" alt="qr menü sistemleri" />
      </div>
    </div>
  )
}

export default index