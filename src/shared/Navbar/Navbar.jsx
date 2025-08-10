import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "signOut successfully",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    const link = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/availableFood'}>Available Foods</NavLink>

        {user && <>
            <NavLink to={'/addFoods'}>Add Food </NavLink>
            <NavLink to={'/myFood'}>Manage My Foods</NavLink>
            <NavLink to={'/myRequest'}>My Food Request</NavLink>
        </>}


    </>

    return (
        <div class="navbar sticky bg-gray-400/50 backdrop-blur-md top-0 z-50 shadow-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 space-x-3 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className='flex'>
                    <a class="btn btn-ghost text-xl">FeastFlow </a>
                    <img src="https://i.postimg.cc/6Qt1wr9t/p5.png" className='w-[5%]' alt="" />
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu text-black space-x-2 menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div class="navbar-end gap-2 mr-6">
                {
                    user ? <button onClick={handleSignOut} className='btn'>signOut</button> : <>
                        <NavLink to={'/signUp'} className={'btn'}>Register</NavLink>
                        <NavLink to={'/signIn'} className={'btn bg-orange-500'}>LogIn</NavLink>
                    </>
                }

            </div>


        </div>
    );
};

export default Navbar;