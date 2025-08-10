import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const AddFood = () => {
  const { user } = useContext(AuthContext)
  
  const [food, setFood] = useState({
    name: '',
    image: '',
    quantity: '',
    location: '',
    expiry: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...food, ownerEmail: user.email, status: 'available', ownerName: user.displayName, ownerPhoto: user.photoURL }
    
    axios.post('https://server-side-topaz.vercel.app/addFood', data).then(res => {
      console.log(res);
        
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added food",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(err => console.log(err))
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Food Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Food Image URL"
          value={food.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="Food Quantity (e.g. 5 plates)"
          value={food.quantity}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          value={food.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="datetime-local"
          name="expiry"
          value={food.expiry}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={food.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;