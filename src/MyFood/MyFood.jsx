import React, {  use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import MyPosted from './MyPosted';


const MyFood = () => {
    const {user} = use(AuthContext)
    
    const [food , setFood] = useState([])
    
    
    useEffect(() =>{
        axios.get('https://server-side-topaz.vercel.app/myFood' ,{
             headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
        }).then(res => setFood(res.data))
    },[user])
    if(food.length == 0){
        return <p className='text-4xl'>you have posted nothing</p>
    }
 
    return (
        <div>
            {
                food.map(fd => <MyPosted  key={fd._id} fd={fd} setFood={setFood} food={food}></MyPosted> )
            }

        </div>
    );
};

export default MyFood;