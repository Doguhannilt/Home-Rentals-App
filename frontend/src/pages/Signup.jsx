import { useState } from "react"
  // Fetch
import { PostFetch } from "../fetch/Fetch";


const Signup = () => {
  
    // States
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    // Password Confirmation
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Data
    const formData = {
      name: name,
      lastname: lastname,
      email: email,
      password: password
    };
    // Fetch
    await PostFetch('http://localhost:5000/register', formData);
  }

  return (
    <div  style={{ backgroundImage: `url("/images/main.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-screen">
          <div className = "">
        <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-10 pt-40 font-bold h-full w-full ">
           
        <h2 className="text-3xl font-bold text-white">Create an Account 🌴 </h2>
        <div className="">
          {/* First Name */}
          <label className="text-white text-md font-bold flex-1 py-1">
            First Name
            <input
              className="text-white text-2xl rounded w-full h-full py-1 px-2 font-normal hover:border-none mb-2 bg-gray-500/50"
              onChange={(e) => setName(e.target.value)}
            />
           
          </label>
          {/* Last Name */}
          <label className="text-white text-md font-bold ">
            Last Name
            <input
              className="text-white text-2xl rounded w-full mt-2 h-full py-1 px-2 font-normal hover:border-none bg-gray-500/50"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        {/* Email */}
        <label className="text-white text-md font-bold flex-1">
          Email
          <input
            type="email"
            className="text-white text-2xl rounded w-full h-full py-1 px-2 font-normal hover:border-none bg-gray-500/50"
            onChange={(e) => setEmail(e.target.value)}
          />
     
        </label>
        {/* Password */}
        <label className="text-white text-md font-bold ">
          Password
          <input
            type="password"
              className="text-white text-2xl rounded w-full h-full py-1 px-2 font-normal hover:border-none bg-gray-500/50 "
              onChange={(e) => setPassword(e.target.value)}
            />
        {password.length < 6 && <p>Password must be at least 6 characters</p>}
        </label>
        {/* Confirm Password */}
        <label className="text-white text-md font-bold ">
          Confirm Password
          <input
            type="password"
              className="text-white text-2xl rounded w-full h-full py-1 px-2 font-normal hover:border-none bg-gray-500/50"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            
        </label>
        <div className = "flex gap-24 ">
        <span>
        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Register</button>

        </span>

        <span>
            <label className = "text-gray-800"><a href="/login">Do you have an account?</a></label>
        </span>
        </div>
       
      </form>
              </div>
    </div>
  )
}

export default Signup
