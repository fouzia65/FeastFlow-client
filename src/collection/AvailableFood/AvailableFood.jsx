import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from './FoodCard';

const AvailableFood = () => {
    const data = useLoaderData()
    const [columns, setColumns] = useState(false)
    const gridCols = columns ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
    console.log(data)
    return (
        <div className='top-8 space-y-3'>
            <div className='flex justify-center items-center'>
                <button onClick={() => setColumns(!columns)} className="btn btn-soft  bg-green-400 text-white my-5  btn-success">{columns ? "columns 3" : 'columns 2'}</button>
            </div>


            <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} w-[90%] mx-auto gap-8`}>
                {
                    data.map(info => <FoodCard key={info._id} info={info}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;