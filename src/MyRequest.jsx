import React from 'react';
import { useLoaderData } from 'react-router';
import RequestCard from './RequestCard';

const MyRequest = () => {
    const data = useLoaderData()
    
  if(data.length == 0){
    return <p>no requested food</p>
  }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(dt =><RequestCard key={dt._id} dt={dt}></RequestCard>)
            }
        </div>
    );
};

export default MyRequest;