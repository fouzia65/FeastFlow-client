import React from 'react';
import CountUp from 'react-countup';

const Count = () => {
    return (
        <div className='flex flex-col  gap-2   mt-10'>
            <div className=' flex flex-col justify-center items-center '>
                <div className='flex items-center'>
                    <CountUp start={0} end={5} duration={10} className='md:text-3xl md:font-extrabold' ></CountUp>

                    <div>
                        <span className='text-black font-bold text-3xl'>K +</span>
                    </div>
                </div>
                <p className='md:text-2xl text-gray-400 md:font-extrabold'>Food items</p>
            </div>
            <div className=' flex flex-col justify-center items-center '>
                <div className='flex items-center'>
                    <CountUp start={0} end={200} duration={10} className='md:text-3xl md:font-extrabold' ></CountUp>

                    <div>
                        <span className='text-black font-bold text-3xl'>+</span>
                    </div>
                </div>
                <p className='md:text-2xl text-gray-300 md:font-extrabold'>Restaurants</p>
            </div>
            <div className=' flex flex-col justify-center items-center '>
                <div className='flex items-center'>
                    <CountUp start={0} end={3} duration={10} className='md:text-3xl md:font-extrabold' ></CountUp>

                    <div>
                        <span className='text-black font-bold text-3xl'>K +</span>
                    </div>
                </div>
                <p className='md:text-2xl text-gray-300 md:font-extrabold'>Happy customer</p>
            </div>
           
        </div>
    );
};

export default Count;