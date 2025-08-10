import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const FoodDetails = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { name, image, quantity, notes, expiry, ownerName, ownerEmail, ownerPhoto, status, _id, location } = data
    const handleRequest = () => {
        if(user){
            axios.patch(`https://server-side-topaz.vercel.app/request/${_id}`, {}, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            console.log(res.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(err =>{
            console.log(err)
        } )
        }
        else{

            return navigate('/signIn')
        }
    }
    return (
        <div className="max-w-4xl mx-auto p-5 my-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg space-y-6">
            <h1 className="text-3xl font-bold text-center mb-5 text-green-700 uppercase">Food Details</h1>

            <img src={image} alt={name} className="w-full rounded-2xl shadow-md" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold capitalize">{name}</h2>
                    <p><span className="font-semibold">Quantity:</span> {quantity}</p>
                    <p><span className="font-semibold">Location:</span> {location}</p>
                    <p><span className="font-semibold">Expiry:</span> {new Date(expiry).toLocaleString()}</p>
                    <p><span className="font-semibold">Status:</span> <span className={`uppercase font-bold ${status === "available" ? "text-green-600" : "text-red-600"}`}>{status}</span></p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3">
                    <img src={ownerPhoto} alt={ownerName} className="w-28 h-28 rounded-full border-4 border-green-500 shadow-lg" />
                    <p className="font-bold">{ownerName}</p>
                    <p className="text-gray-600">{ownerEmail}</p>
                </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-xl shadow-inner">
                <h3 className="font-semibold mb-2">Additional Notes:</h3>
                <p className="text-gray-700">{notes}</p>
            </div>

            <button onClick={handleRequest} className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all duration-300">
                Request Food
            </button>
        </div>
    );
};

export default FoodDetails;