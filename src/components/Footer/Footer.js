import React from 'react';
import logo from '../../data/logo2.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='mx-20'>
               <div className='p-10 flex'>
                    <div className='w-[650px]'>
                            <img className='w-40' src={logo} alt="" />
                    </div>
                    <div className='text-white px-8'>
                        <ul className='leading-relaxed'>
                            <li><a href="#/">About online food</a></li>
                            <li><a href="#/">Read our blog</a></li>
                            <li><a href="#/">Sign up to deliver</a></li>
                            <li><a href="#/">Add your restaurant</a></li>
                        </ul>
                    </div>
                    <div className='text-white px-8'>
                        <ul className='leading-relaxed'>
                            <li><a href="#/">Get help</a></li>
                            <li><a href="#/">Read FAQs</a></li>
                            <li><a href="#/">View all cities</a></li>
                            <li><a href="#/">Restaurants near me</a></li>
                        </ul>
                    </div>
               </div>
               <div className='pb-10 text-white flex'>
                    <div className='w-[650px] text-gray-400 text-sm'>
                        <p>Copyright © 2022 | Md. Soyeb Chandani</p>
                    </div>
                    <div>
                        <ul className='leading-relaxed flex'>
                            <li className='mr-4'>Privacy Policy</li>
                            <li className='mr-4'>Terms of Use</li>
                            <li className='mr-4'>Pricing</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;