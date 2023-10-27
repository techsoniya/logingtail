// import React from 'react'

// const LoginForm = () => {
//   return (
//     <form>
//         <div className='mb-3'>
//             <label className='font-medium mb-2 flex'>Email</label>
//             <input type="text" placeholder='Enter your email' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
//         </div>
//         <div className='mb-3'>
//             <label className='font-medium mb-2 flex'>Password</label>
//             <input type="tepassword" placeholder='Enter your password' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
//         </div>
//         <div className='flex justify-between mb-6'>
//             <label>
//                 <input type='checkbox' className='mr-2'/>
//                 Remember me
//             </label>
//             <span>Forgot password?</span>

//         </div>
//         <button className='block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded '>Login</button>
//         <div className='mt-4 text-center'>
//             Don't have an account yet?<span className='text-blue-700 cursor-pointer'>Sign Up</span>
//         </div>

//     </form>
//   )
// }

// export default LoginForm



import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import bgimage from './ii/1.jpg'

// import { useAuth } from "../components/Auth/auth";

const LoginForm = () => {
  // const { login, userID } = useAuth();
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const newUser = {
      email_id: email_id,
      password: password,
    };

    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", newUser);

      const accessToken = response.data.authToken;
      console.log(accessToken);

      // Store the accessToken in a cookie
      document.cookie = `accessToken=${accessToken}; path=/; secure; samesite=Lax`;

      alert("User logged in successfully");
    } catch (error) {
      console.error("Login failed:", error.response);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* <Navbar /> */}
      
  
        <form
          className="w-96 bg-gray-100 p-6 rounded shadow-outline shadow-2xl" style={{
            backgroundImage: `url(${bgimage})`, // Apply background image here
            backgroundSize: 'cover', // Adjust the size as needed
            backgroundRepeat: 'no-repeat', // Do not repeat the image
          }}>
            
            
          <div className="mb-3 ">
            <label className="font-medium mb-2 flex">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-md bg-transparent border-gray-400 p-3"
              name="email_id"
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="font-medium mb-2 flex">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md bg-transparent border-gray-400 p-3"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between mb-6">
            <label>
              <input type="checkbox" className="mr-2 text-gray-100" />
              Remember me
            </label>
            <span>Forgot password?</span>
          </div>
          <button
            className="block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="mt-4 text-center">
            Don't have an account yet?
            <span className="text-blue-700 cursor-pointer">Login</span>
          </div>
        </form>
        
     
      
      
      {/* <Footer /> */}
    </>
  );
};

export default LoginForm;

