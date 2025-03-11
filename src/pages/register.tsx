import { useState } from "react";
import Logo from "/logo.svg";
import { Link } from "@heroui/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
    birthDate: "",
    height: "",
    weight: "",
    medicalHistory: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <div
            className="absolute top-[-600px] left-[-300px] w-[1118px] h-[1118px] bg-[#2094C4] rounded-full blur-[150px] opacity-60"
        ></div>
        <div
            className="absolute bottom-[-600px] right-[-300px] w-[1118px] h-[1118px] bg-[#A3D6DC] rounded-full blur-[150px] opacity-60"
        ></div>

        <div
            className="w-[730px] h-[700px] bg-white p-10 rounded-xl shadow-lg text-center border border-white"
            style={{
            opacity: "0.8",
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0)",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
            }}
        >

        <Link className="flex justify-center items-center gap-1" href="/">
          <img alt="Logo" className="w-20" src={Logo} />
        </Link>

        <h2 className="text-xl font-semibold text-gray-900 mt-4">
          {step === 1 ? "Create Your Account" : "Personal Information"}
        </h2>

        {step === 1 ? (
          <div className="mt-6 space-y-4">
            <div className="text-left">
              <label className="text-gray-600 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              />
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              />
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              />
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">Or sign up with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
              <FcGoogle className="mr-2 text-xl" />
              <span className="text-gray-700">Google Account</span>
            </button>

            <div className="mt-5 text-gray-600 text-sm">
              Already have an account? {" "}
              <Link href="/login" className="text-blue-600 font-semibold hover:underline">
                Log in
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="text-left">
              <label className="text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              />
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Birthdate</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white" />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2 text-left">
                <label className="text-gray-600 text-sm">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                />
              </div>
              <div className="w-1/2 text-left">
                <label className="text-gray-600 text-sm">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                />
              </div>
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm">Medical History</label>
              <input type="text" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white" />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Complete Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;