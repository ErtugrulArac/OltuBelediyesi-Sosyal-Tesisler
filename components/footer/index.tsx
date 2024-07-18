import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black max-md:text-center text-white py-8">
      <div className="container  mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 flex flex-col max-md:items-center md:mb-0">
            <img src="/sosyallogobeyaz.png" alt="Logo" className="w-36  mb-4" />
            <p className="text-sm">
              © 2024 Mack Bear Coffee. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul>
                <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                <li><a href="#" className="text-sm hover:underline">Careers</a></li>
                <li><a href="#" className="text-sm hover:underline">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Help</h4>
              <ul>
                <li><a href="#" className="text-sm hover:underline">Contact</a></li>
                <li><a href="#" className="text-sm hover:underline">Support</a></li>
                <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
              </ul>
            </div>
            <div className='flex flex-col max-md:items-center'>
              <h4 className="text-lg font-bold mb-4">Social</h4>
              <ul className="flex w-64 max-md:justify-center space-x-4">
                <li><a href="#" className="hover:underline"><img src="facebookbeyaz.svg" alt="Facebook" className="h-6" /></a></li>
                <li><a href="#" className="hover:underline"><img src="instagrambeyaz.svg" alt="Instagram" className="h-6" /></a></li>
                <li><a href="#" className="hover:underline"><img src="xbeyaz.svg" alt="Twitter" className="h-6" /></a></li>
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