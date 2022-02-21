import React, { useEffect, useState } from "react";
import foodData from "../../jsonData/data.json";
import Card from "../Card/Card";

const Body = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState('lunch')

  useEffect(()=> {
    const data = foodData;
    return setFoods(data)
  },[])

  const selectedFoods = foods.filter((food) => food.category === selectedFoodType)
    
  return (
    <div>
        <div className='text-center m-10 sm:mr-0 text-lg sm:text-base'>
            <button onClick={() => setSelectedFoodType('breakfast') } className='mr-8 sm:mr-4 duration-150 ease-linear'>
              <span className={selectedFoodType === 'breakfast' ? 'text-[#F91944] border-b-[#F91944] border-b-2' : ''}>BREAKFAST
              </span>
            </button>
            <button onClick={() => setSelectedFoodType('lunch')}  className='mr-8 sm:mr-4 duration-150 ease-linear'>
                <span className={selectedFoodType === 'lunch' ? 'text-[#F91944] border-b-red-600 border-b-2' : ''}>LUNCH
                </span>
            </button>
            <button onClick={() => setSelectedFoodType('dinner')} className='mr-8 duration-150 ease-linear'> 
              <span className={selectedFoodType === 'dinner' ? 'text-[#F91944] border-b-red-600 border-b-2' : ''}>DINNER
              </span>
            </button>
        </div>

      <div className="flex justify-evenly flex-wrap mx-16">
        {selectedFoods.map((food) => (
          <Card key={food.id} food={food}></Card>
        ))}
      </div>
      <div className="flex justify-center m-5 ">
        <button className="py-2 px-7 border-2 border-gray-400 bg-gray-400 rounded-md font-[550] text-white">CHECKOUT YOUR FOOD</button>
      </div>
    </div>
  );
};

export default Body;
