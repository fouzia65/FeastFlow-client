import React from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';
import { IoLocationSharp, IoMail } from 'react-icons/io5';

const Connect = () => {
    return (
        <div>
            <div className='md:flex md:justify-center md:items-center gap-8 ' >
                <div >
                    <h1 className='font-bold text-3xl my-4'>Contact us</h1>
                    <p className='mb-6'>If you have any questions  or want to get free estimate for your mold situation contact us with via email or phone call . we will  be very happy to help you</p>
                    <p className='flex'><FaPhoneFlip /> : 470-601-1911 </p>
                    <p className='flex'><IoMail /> : contacrt@hmold.com </p>
                    <p lassName='flex'><IoLocationSharp /> : 2271 Rodao, GA 30047</p>
                    <p className='flex'><IoIosTime /> : Monday - Friday</p>
                </div>
                <div className='w-[50%]'>
                    <img src="https://i.postimg.cc/2yxTD2xc/138917-mobile-using-girl-black-phone.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Connect;