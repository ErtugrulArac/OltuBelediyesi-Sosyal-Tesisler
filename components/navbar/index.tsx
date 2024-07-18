import React from 'react'

const index = () => {
  return (
    <div className='w-[80%]    text-center max-lg:w-[90%] m-auto'>
       <div className='flex items-center justify-between max-md:justify-center py-5'>
        <a href="/"><img className='w-44' src="sosyallogo.png" alt="" /></a>
        <div className='flex font-bold max-md:hidden gap-10'>
        <a className='text-lg' href="/hakkimda">Hakkımda</a>
        <a className='text-lg' href="/iletisim">İletişim</a>
        <a className='text-lg' href="https://oltu.bel.tr/">Oltu Belediyesi</a>
        </div>
       </div>
    </div>
  )
}

export default index