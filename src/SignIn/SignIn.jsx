import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const SignIn = () => {
    const [open, setOpen] = useState(false)
    const {signIn,  setUser,  googleSignIn  } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignIn = e =>{
      e.preventDefault()
         const form = e.target;
       const email = form.email.value
       const password = form.password.value
       signIn(email, password).then(result =>{ setUser(result.user) 
        navigate('/')
       })
    }
    const handleGoogleSignIn = () =>{
      googleSignIn().then(result => {setUser(result.user)
        navigate('/')
      })
    }
    return (
           <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        <form onSubmit={handleSignIn} className="space-y-4">
        

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
          
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>

         

         
                    <div className='relative'>
                        <label className="block text-sm  font-medium text-gray-700 mb-1">Password</label>
                        
                            <p className='cursor-pointer right-3 top-9  absolute' onClick={() => setOpen(!open)}>{open ?<FaEyeSlash size={25} />: <FaRegEye size={25} />}</p>
                            <input
                                type={open ? 'text' : 'password'}
                                name="password"

                                required
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                            />
                       
                    </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            LogIn
          </button>
     
        </form>
                <button onClick={handleGoogleSignIn}
         
          className="w-full  mt-4 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link to={'/signUp'}><a  className="text-indigo-600 font-semibold hover:underline ml-1">Register</a></Link>
        </p>
      </div>

      
    </div>
    );
};

export default SignIn;