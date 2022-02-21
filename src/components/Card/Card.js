import React from 'react';

const Card = ({food}) => {
    return (
        <div className='w-[350px] rounded-lg m-4 shadow-md hover:shadow-2xl hover:rounded-lg p-5 duration-300 hover:scale-105'>
           <div className='flex justify-center items-center mb-2'>
                <img className='sm:w-[150px]' src={food.img} alt="" />
           </div>
            <div>
                <h1 className='text-center font-serif'>{food.name}</h1>
                <p className='text-center text-gray-500 font-serif'>{food.subtitle}</p>
                <p className='text-center font-extrabold '>{food.price} </p>
            </div>
        </div>
    );
};

export default Card;