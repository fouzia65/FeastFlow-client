import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './Context/AuthContext';

const RequestCard = ({dt}) => {
    const {user} = useContext(AuthContext)
    const {  expiry,location,requestedBy, status, _id} = dt 
    const handleRemoveRequest = () => {
        axios.patch(`https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/requestRemove/${_id}`, {}, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            console.log(res.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "updated",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    return (
           <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{requestedBy}</h2>

        <div className="text-gray-600">
          <p><span className="font-semibold text-gray-800">Pickup Location:</span> {location}</p>
          <p><span className="font-semibold text-gray-800">Expire Date:</span> {expiry}</p>
          <p><span className="font-semibold text-gray-800">Expire Date:</span> {status}</p>
          
        </div>

        <button onClick={handleRemoveRequest} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-all duration-300">
         Remove request
        </button>
      </div>
    </div>
    );
};

export default RequestCard;