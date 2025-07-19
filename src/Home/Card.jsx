import React from 'react';
import Count from './Count';
import { PiStarThin } from 'react-icons/pi';
import Reviewer from './Reviewer';

const Card = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2  mt-4'>
            <div className='flex justify-center items-center gap-4'>
                <Count></Count>
                <img className='w-[40%] h-[70%] rounded-4xl' src="https://i.postimg.cc/cLGWvRLY/kid-eating-burger-home.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <Reviewer></Reviewer>
                
                <h1 className='flex text-3xl font-bold'>500+ happy customer</h1>
                <p className='flex justify-center items-center gap-2'> <PiStarThin className='text-orange-600' />4.8 <span>(</span> 420 reviews <span>)</span></p>
            </div>
            <div className='flex flex-row justify-center gap-2 items-center'>
                
                    <img className='w-[60%] h-[70%] rounded-4xl' src="https://i.postimg.cc/PrBLtXFx/Healthier-Slow-Cooked-Spicy-Beef-Curry-tall1-4.webp" alt="" />
                
                <div >
                    <h1 className='text-3xl font-bold'>Best delicious Food</h1>
                    <p className='text-gray-600'>We are now your partner with <br /> the  best collection of <br /> delicious food . order now</p>
                </div>
            </div>
        </div>
    );
};

export default Card;