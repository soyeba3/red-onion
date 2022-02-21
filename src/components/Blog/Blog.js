import React, { useState } from 'react';
import image1 from '../../data/Image/adult-blur-blurred-background-687824.png'
import image2 from '../../data/Image/chef-cook-food-33614.png'
import image3 from '../../data/Image/architecture-building-city-2047397.png'
import trainIcon from '../../data/ICON/Group 204.png'
import  bellIcon from '../../data/ICON/Group 1133.png'
import carIcon from '../../data/ICON/Group 245.png'

const Footer = () => {
    const [readMore, setRedMore] =useState(false)

    const readMoreBtn = () => {
        setRedMore(true)
    }
    const readLessBtn = () => {
        setRedMore(false)
    }
    
    return (
        <div className='py-5 mb-8'>
            <div className='w-[500px] ml-[100px]'>
                <h1 className='text-[32px] font-bold m-2'>Why You Choose Us</h1>
                <p>El Diablo’s cook top is nothing short of extraordinary. Located on a Spanish Island, this restaurant cooks its 
                    meals over an active volcanic hole in the ground.</p>
            </div>
            <div className='flex justify-center items-center mx-20'>
                <div className='px-4 py-4'>
                    <div className='mb-2'>
                        <img className='' src={image1} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <img className='h-8 m-4' src={trainIcon} alt="icon" />
                        <h2 className='font-Montserrat font-bold text-lg'>Fast Delivery</h2>
                    </div>
                    
                        <p className='mx-4 my-1'>For a memorable meal the quality of the service is something that guests often {
                            !readMore && <span>...</span>
                        }</p>
                        {
                            readMore &&  <span>remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>  
                        }
                    
                   {
                       readMore ?
                        <button onClick={readLessBtn} className='text-[#F91944] mx-2 cursor-pointer block'>Read less</button>
                       : <button onClick={readMoreBtn}  className='text-[#F91944] mx-2 cursor-pointer block'>Read more</button>
                   }
                </div>
                <div className='px-4'>
                    <div>
                        <img src={image2} alt="" />
                    </div> 
                    <div className='flex items-center'>
                        <img className='h-8 m-4' src={bellIcon} alt="icon" />
                        <h2 className='font-Montserrat font-bold text-lg'>A Good Auto Responder</h2>    
                    </div> 
                    <p className='mx-4 my-1'>For a memorable meal the quality of the service is something that guests often</p>
                    <button className='text-[#F91944] mx-4'>Read more...</button> 
                </div>
                <div className='px-4'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <img className='h-8 m-4' src={carIcon} alt="icon" />
                        <h2 className='font-Montserrat font-bold text-lg'>A Good Auto Responder</h2>    
                    </div> 
                    <p className='mx-4 my-1'>For a memorable meal the quality of the service is something that guests often</p>
                    
                    <button className='text-[#F91944] mx-4'>Read more...</button> 
                </div>

            </div>
        </div>
    );
};

export default Footer;