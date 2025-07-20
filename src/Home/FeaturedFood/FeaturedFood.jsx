import React from 'react';
import FeaturedCard from './FeaturedCard';
import {  NavLink, useLoaderData } from 'react-router';


const FeaturedFood = () => {
    const data = useLoaderData()
   
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>🍔 Top 6 Featured Food</h1>
            <p  className='text-center w-[80%] mx-auto mb-10'>Discover our Top 6 Featured Foods — handpicked for freshness, flavor, and community sharing! 🍽️ Each dish is contributed by generous donors and ready for you to enjoy. From warm home-cooked meals to delightful treats, explore what’s trending and make a meaningful connection through food.
Grab your favorite before it’s gone! ⏰</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                data.map(info => <FeaturedCard key={info._id} info={info}></FeaturedCard>)
            }
        </div>
        <div className='w-[90%] text-center my-10'>

        <NavLink  to={'/availableFood'}><button className="btn btn-success w-[30%] ">See more</button></NavLink>
        </div>
        </div>
    );
};

export default FeaturedFood;