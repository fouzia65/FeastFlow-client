
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Update = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const {_id, name, image, quantity, expiry, notes} = data
      const handleUpdateFood = e =>{
         e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());
      
       const data = {...taskData,  ownerEmail : user.email , status : 'available', ownerName : user.displayName, ownerPhoto : user.photoURL}
        fetch(`https://server-side-topaz.vercel.app/update/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res =>{res.json()}).then(data =>{
            console.log(data)
                Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your have successfully update a task",
                            showConfirmButton: false,
                            timer: 1500
                        });
        })
        
      
            
    }
    return (
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Food Donation</h2>
      <form onSubmit={handleUpdateFood} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          defaultValue={name}
         
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Food Image URL"
          defaultValue={image}
         
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="Food Quantity (e.g. 5 plates)"
          defaultValue={quantity}
        
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          defaultValue={location}
         readOnly
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="datetime-local"
          name="expiry"
          defaultValue={expiry}
          readOnly
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes"
         defaultValue={notes}
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

export default Update;