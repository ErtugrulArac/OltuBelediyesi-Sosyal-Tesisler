import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-28 max-md:py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-6xl max-md:text-4xl leading-[70px] font-bold text-gray-900 mb-4">Sizin için en kaliteli hizmeti sunuyoruz</h1>
          <p className="text-gray-700 max-md:text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded">İletişim</button>
            <a href='https://oltu.bel.tr/' className="bg-[#8B38CB] text-white py-2 px-4 rounded">Belediyemiz</a>
          </div>
          <div className="flex space-x-4 mt-8">
           <a className='max-md:size-7' href="https://www.facebook.com/p/Oltu-Belediyesi-Sosyal-Tesisleri-100083250535453/"><img src="facebook.svg" alt="facebook" /></a>
           <a className='max-md:size-7' href="https://x.com/oltubelediyesi"><img src="x.svg" alt="twitter" /></a>
           <a className='max-md:size-7' href="https://www.instagram.com/oltubelediye/"><img src="instagram.svg" alt="instagram" /></a>
          </div>
        </div>
        <div className="relative">
          <img  src="/main.jpg" alt="Restaurant" className="rounded-lg shadow-lg w-full max-w-lg mx-auto md:max-w-none"/>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;