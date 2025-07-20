import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row  gap-3 h-[30%]'>
            <div className='grid grid-cols-2 w-[40%] h-[20%]'>
                <img className='w-[100%] h-[100%]' src="https://i.postimg.cc/zfXCgxFn/20230529-SEA-Egg-Fried-Rice-Amanda-Suarez-hero-c8d95fbf69314b318bc279159f582882.webp" alt="" />
                <img className='w-[100%] h-[100%]' src="https://i.postimg.cc/Cx0HFhZr/Coconut-Beef-Curry-3.webp" alt="" />
                <img className='w-[100%] h-[60%]' src="https://i.postimg.cc/ZKt6cbLY/Fresh-Fruit-Salad-2.jpg" alt="" />
                <img className='w-[100%] h-[60%]' src="https://i.postimg.cc/Ss9Zfnsn/food-28.png" alt="" />
            </div>
            <div className='flex w-[50%] h-[20%] flex-col gap-8'>
                <h1 className='text-4xl'>Our Features</h1>
                <div>
                    <h1 className='text-2xl'>Unique Recipes</h1>
                    <p>unique recipes blending tradition with innovation—each dish
                        tells a tale through unexpected ingredients, heartfelt origins, and bold flavors.
                        From heritage twists to modern fusions, every recipe invites discovery,
                        connection, and a memorable cooking experience at home.</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Interactive Cooking Timelines</h1>
                    <p>Follow step-by-step timelines with real-time tips, adapting
                        to your pace for an engaging cooking journey.</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Seasonal Ingredient Suggestions</h1>
                    <p>Get tailored ingredient swaps based on seasonal
                        availability, enhancing flavor and sustainability.</p>
                </div>
            </div>
        </div>
    );
};

export default About;