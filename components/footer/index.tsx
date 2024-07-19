import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black max-md:text-center text-white py-8">
      <div className="container  mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 flex flex-col max-md:items-center md:mb-0">
            <img src="/sosyallogobeyaz.png" alt="Logo" className="w-36  mb-4" />
            <p className="text-sm">
              © 2024 Oltu Belediyesi. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-bold mb-4">Belediyemiz</h4>
              <ul>
                <li><a href="https://oltu.bel.tr/" className="text-sm hover:underline">Hakkımızda</a></li>
                <li><a href="https://oltu.bel.tr/iletisim" className="text-sm hover:underline">İletişim</a></li>
                <li><a href="https://oltu.bel.tr/haberler" className="text-sm hover:underline">Haberler</a></li>
              </ul>
            </div>
            <div className='max-md:hidden'>
              <h4 className="text-lg font-bold mb-4">Sosyal Tesis</h4>
              <ul>
                <li><a href="/hakkimda" className="text-sm hover:underline">Hakkımızda</a></li>
                <li><a href="/iletisim" className="text-sm hover:underline">İletişim</a></li>
                <li><a href="https://oltu.bel.tr/iletisim" className="text-sm hover:underline">FAQs</a></li>
              </ul>
            </div>
            <div className='flex flex-col max-md:items-center'>
              <h4 className="text-lg font-bold mb-4">Sosyal Medya</h4>
              <ul className="flex w-64 max-md:justify-center space-x-4">
                <li><a href="https://www.facebook.com/p/Oltu-Belediyesi-Sosyal-Tesisleri-100083250535453/" className="hover:underline"><img src="facebookbeyaz.svg" alt="Facebook" className="h-6" /></a></li>
                <li><a href="https://www.instagram.com/oltubelediye/" className="hover:underline"><img src="instagrambeyaz.svg" alt="Instagram" className="h-6" /></a></li>
                <li><a href="https://x.com/oltubelediyesi" className="hover:underline"><img src="xbeyaz.svg" alt="Twitter" className="h-6" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 mt-6 text-center">
          <p className="text-sm">Website designed by <a href="https://arlanmedya.com/" className="text-blue-500 hover:underline">Arlan Medya</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;