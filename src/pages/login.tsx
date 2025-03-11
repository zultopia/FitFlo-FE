import { FcGoogle } from "react-icons/fc";
import Logo from "/logo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "@heroui/link";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className="absolute top-[-600px] left-[-300px] w-[1118px] h-[1118px] bg-[#2094C4] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      ></div>

      <div
        className="absolute bottom-[-600px] right-[-300px] w-[1118px] h-[1118px] bg-[#A3D6DC] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      ></div>
      
      <div
        className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-10 rounded-xl shadow-lg text-center border border-white"
        style={{
          opacity: "0.9",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Link className="flex justify-center items-center gap-1" color="foreground" href="/">
          <img alt="Logo" className="w-[80px] sm:w-[100px]" src={Logo} />
        </Link>
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Login</h2>

        <div className="mt-6 space-y-4">
          <div className="text-left">
            <label className="text-gray-600 text-sm">Email/Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
              placeholder="Enter your email or phone number"
            />
          </div>
          <div className="text-left relative">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
        </div>

        <div className="mt-4 text-right">
          <a href="/forgetpassword" className="text-sm text-primary hover:underline">
            Forgot Password?
          </a>
        </div>

        <button className="w-full mt-5 bg-primary text-white py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base">
          <FcGoogle className="mr-2 text-lg" />
          <span className="text-gray-700">Google Account</span>
        </button>

        <div className="mt-5 text-gray-600 text-sm">
          Don't have an account? {" "}
          <a href="/register" className="text-primary font-semibold hover:underline">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;