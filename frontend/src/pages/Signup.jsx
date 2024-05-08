
import * as Form from '@radix-ui/react-form';
import { BsUpload } from "react-icons/bs";


const Signup = () => {
  return (
      <div>
          <div>
          <form className="mx-auto max-w-md flex flex-col gap-5 mt-16 font-bold h-full w-full">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
             
            />
           
          </label>
          {/* Last Name */}
          <label className="text-gray-700 text-sm font-bold">
            Last Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
             
            />
          </label>
        </div>
        {/* Email */}
        <label className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
           
          />
     
        </label>
        {/* Password */}
        <label className="text-gray-700 text-sm font-bold ">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal "
            />
        </label>
        {/* Confirm Password */}
        <label className="text-gray-700 text-sm font-bold ">
          Confirm Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
           />
        </label>
        <div className = "flex gap-24 ">
        <span>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold txt-xl hover:bg-blue-800 rounded">
            Create an account
          </button>
        </span>

        <span>
            <label className = "text-blue-600 hover:text-blue-800">Do you have an account?</label>
        </span>
        </div>
      </form>
              </div>
    </div>
  )
}

export default Signup
