import { FcGoogle } from "react-icons/fc";
// Update the logo import to use direct relative path
import Logo from "../assets/logoicon.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className="absolute top-[-600px] left-[-300px] w-[1118px] h-[1118px] bg-[#2094C4] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      />

      <div
        className="absolute bottom-[-600px] right-[-300px] w-[1118px] h-[1118px] bg-[#A3D6DC] rounded-full"
        style={{ opacity: "0.6", filter: "blur(150px)" }}
      />

      <div
        className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-10 rounded-xl shadow-lg text-center border border-white"
        style={{
          opacity: "0.9",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Link
          className="flex justify-center items-center gap-1"
          color="foreground"
          href="/"
        >
          {/* Make the logo more visible with higher z-index */}
          <img 
            alt="Logo" 
            className="w-[100px] sm:w-[180px] z-10 relative" 
            src={Logo} 
            onError={(e) => {
              console.error("Logo failed to load");
              e.currentTarget.style.border = "1px solid red";
            }}
          />
        </Link>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
          Login
        </h2>

        <div className="mt-6 space-y-4">
          <div className="text-left">
            <label className="text-gray-600 text-sm block mb-1">Email</label>
            <Input
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="text-left">
            <label className="text-gray-600 text-sm block mb-1">Password</label>
            <Input
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              endContent={
                <button
                  className="text-gray-500 hover:text-gray-700"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              }
            />
          </div>
        </div>

        <div className="mt-4 text-right">
          <Link
            className="text-sm text-primary hover:underline"
            href="/forgetpassword"
          >
            Forgot Password?
          </Link>
        </div>

        <Button 
          as={Link}
          href="/dashboard"
          color="primary"
          className="w-full mt-5"
        >
          Login
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <Button
          variant="bordered"
          className="w-full"
          startContent={<FcGoogle className="mr-2 text-lg" />}
        >
          <span className="text-gray-700">Google Account</span>
        </Button>

        <div className="mt-5 text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            className="text-primary text-sm font-semibold hover:underline"
            href="/register"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
