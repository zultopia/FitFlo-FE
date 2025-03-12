import { Link } from "@heroui/link";
import Logo from "/logoicon.svg";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

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
          <img alt="Logo" className="w-[80px] sm:w-[180px]" src={Logo} />
        </Link>
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Forgot Password</h2>
        <p className="text-gray-600 text-sm mt-2">Enter your email to reset your password</p>

        <div className="mt-6 text-left">
          <label className="text-gray-600 text-sm">Email Address</label>
          <input
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="w-full mt-5 bg-primary text-white py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition">
          Send Reset Link
        </button>

        <div className="mt-5 text-gray-600 text-sm">
          Remembered your password? {" "}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;