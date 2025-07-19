import React from 'react';
import { BsStars } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';



const Banner = () => {
    return (
        <div>
            <div className='flex flex-row justify-center bg-black p-6 gap-3'>
                <div className='w-[60%] mt-8 '>
                    <h1 className='font-bold text-white text-3xl md:ml-10 md:text-7xl '><span className='flex items-center '>Collection of <img className='w-[80px] h-[30px] md:w-[160px] md:h-[70px] rounded-2xl' src="https://i.postimg.cc/63FG7sws/Side-view-Nicks-Authentic-Italian-Spaghetti.jpg" alt="" /></span>  Delicious Food</h1>
                    <p className='text-gray-500 flex mb-16 mt-3 justify-end'>we have a collection of all kinds of delicious food <br /> here . choose any food you like Buy it now. </p>
                    <div className='flex justify-around  gap-8 '>
                        <img className='rounded-b-full rounded-t-full  w-[30%]' src="https://i.postimg.cc/Jz35H5p6/Bhuna-khichuri-RECIPE.jpg" alt="" />
                        <BsStars className='mt-8 text-4xl' size={80} />
                        <button className="btn mt-4 btn-neutral w-[20%] bg-orange-600 hover:bg-orange-500  ml-20 rounded-3xl">  <span className='flex items-center gap-2'> <HiOutlineArrowNarrowRight size={40} /></span> </button>
                    </div>

                </div>
                <div className='w-[50%] md:w-[40%]  flex justify-center '>
                    <div className='rounded-b-full flex md:mt-18 justify-center p-3 gap-3 items-center rounded-t-full h-[90%] w-[70%] md:h-[90%] md:w-[80%] md:border-6 border-orange-500'>

                        <img className='rounded-b-full rounded-t-full h-[60%] w-[100%] md:h-[100%] md:w-[100%]' src="https://i.postimg.cc/HxnL463p/f15f8ac34450abab7253e9a60f22c236.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;