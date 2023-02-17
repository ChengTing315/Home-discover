import React from 'react';
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 text-gray-700'>
      <div className='flex flex-col'>
        <div>
           Powered by Zillion and Google Map API
        </div>
      </div>
    </div>
  );
};

export default Footer;
