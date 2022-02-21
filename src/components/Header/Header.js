import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div >
            <div className="justify-center items-center flex bgImageDiv">
               <div className='text-center'>
               <h1 className='text-3xl sm:text-base pb-5 font-bold'>BEST FOOD WAITING FOR YOUR BELLY</h1>
                <div className='search-wrap'>
                   <div className='search-input'>
                       <input className='' type="text" />
                   </div>
                   <div className='search-btn'>
                       <span>Search</span>
                   </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Header;