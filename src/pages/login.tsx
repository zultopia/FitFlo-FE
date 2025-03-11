import { FcGoogle } from "react-icons/fc";
import Logo from "/logo.svg";
import { Link } from "@heroui/link";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      <div
        className="absolute top-[-600px] left-[-300px] w-[1118px] h-[1118px] bg-[#2094C4] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      ></div>

      <div
        className="absolute bottom-[-600px] right-[-300px] w-[1118px] h-[1118px] bg-[#A3D6DC] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      ></div>
      
      <div
        className="w-[730px] h-[624px] bg-white p-10 rounded-xl shadow-lg text-center border border-white"
        style={{
          opacity: "0.8",
          borderWidth: "1px",
          borderColor: "rgba(0, 0, 0, 0)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Link
            className="flex justify-center items-center gap-1"
            color="foreground"
            href="/"
        >
            <img alt="Logo" className="w-[100px]" src={Logo} />
        </Link>
        
        <h2 className="text-xl font-semibold text-gray-900 mt-4">Login</h2>

        <div className="mt-6 space-y-4">
          <div className="text-left">
            <label className="text-gray-600 text-sm">Email/Telephone Number</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder=""
            />
          </div>
          <div className="text-left">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder=""
            />
          </div>
        </div>

        <div className="mt-4 text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forget Password
          </a>
        </div>

        <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle className="mr-2 text-xl" />
          <span className="text-gray-700">Google Account</span>
        </button>

        <div className="mt-5 text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;