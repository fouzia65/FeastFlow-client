
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPosted = ({fd, setFood , food}) => {
    
    const { name, image, quantity,  expiry , _id} = fd;
 const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-topaz.vercel.app/myFood/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(data => {
                    
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingTask = food.filter(task => task._id !== id)
                       
                        setFood(remainingTask)
                    }
                })

            }
        });

    }
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table w-[90%] mx-auto border rounded-lg">
                <thead className="bg-green-500 text-white">
                    <tr>
                        <th className="p-3 text-left">Food Image</th>
                        <th className="p-3 text-left">Food Name</th>
                        <th className="p-3 text-left">Quantity</th>
                        <th className="p-3 text-left">Expiry Date</th>
                        <th className="p-3 text-left">Edit</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="hover:bg-gray-100 transition">
                        <td className="p-3">
                            <img src={image} alt={name} className="w-20 h-20 object-cover rounded-md" />
                        </td>
                        <td className="p-3 font-semibold">{name}</td>
                        <td className="p-3">{quantity}</td>
                        <td className="p-3">{expiry}</td>
                        <td className="p-3 space-x-3">
                            <Link to={`/update/${_id}`}><button>update</button></Link>
                            <button onClick={() => handleDelete(_id)}>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyPosted;