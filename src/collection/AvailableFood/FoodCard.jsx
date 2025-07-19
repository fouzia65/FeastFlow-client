import React from 'react';
import { Link } from 'react-router';


const FoodCard = ({ info }) => {
    const { name, image, quantity, location, expiry, notes, ownerName, ownerEmail, ownerPhoto, status } = info;
    return (
        <div className="max-w-sm static bg-black-300/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg  transition hover:scale-105 duration-300">
            <img src={image} alt={name} className="w-full h-52 object-cover" />

            <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                {/* <p className="text-black text-sm">📍 <span className="font-medium">{location}</span></p> */}
                <p className="text-black text-sm">🍽️ Quantity: <span className="font-medium">{quantity}</span></p>
                <p className="text-black text-sm">⏰ Expiry: {new Date(expiry).toLocaleString()}</p>
                {/* <p className="text-black text-sm italic">"{notes}"</p> */}

                <div className="flex items-center gap-4 mt-4">
                    <img src={ownerPhoto} alt={ownerName} className="w-12 h-12 rounded-full border-2 border-white/40" />
                    <div>
                        <p className="text-black font-semibold">{ownerName}</p>
                        <p className="text-black text-xs">{ownerEmail}</p>
                    </div>
                </div>
                <div className='flex justify-around items-center'>

                    <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-lime-500 shadow-md">
                        {status.toUpperCase()}
                    </div>
                    <Link to={'/viewDetails'}>
                       <button>

                       </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;