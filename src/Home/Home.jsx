import React from 'react';
import Banner from './Banner';
import Card from './Card';
import FeaturedFood from './FeaturedFood/FeaturedFood';

import About from './About';


const Home = () => {
    
    
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <FeaturedFood ></FeaturedFood>
            <About></About>
           
        </div>
    );
};

export default Home;