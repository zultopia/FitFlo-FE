import { useState } from "react";
// Update the logo import to use direct relative path
import Logo from "../assets/logoicon.svg";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from 'yup';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
    birthDate: "",
    height: "",
    weight: "",
    medicalHistory: "",
  });
  
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailSchema = Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types in email field
    if (name === 'email') {
      setEmailError('');
    }
  };

  const validateEmail = async () => {
    try {
      await emailSchema.validate(formData.email);
      // If no error is thrown, the email is valid
      alert("Email verification sent!");
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setEmailError(err.message);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    const isEmailValid = await validateEmail();
    if (isEmailValid && step === 1) {
      setStep(2);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-[-600px] left-[-300px] w-[1118px] h-[1118px] bg-[#2094C4] rounded-full blur-[150px] opacity-60"></div>
      <div className="absolute bottom-[-600px] right-[-300px] w-[1118px] h-[1118px] bg-[#A3D6DC] rounded-full blur-[150px] opacity-60"></div>

      <div className="w-full max-w-[600px] bg-white p-6 sm:p-10 rounded-xl shadow-lg text-center border border-white opacity-90 mt-16 sm:mt-20 md:mt-24 lg:mt-12 mb-16 sm:mb-20 md:mb-24 lg:mb-12">
        <Link className="flex justify-center items-center gap-1" href="/">
          {/* Make the logo more visible with higher z-index */}
          <img 
            alt="Logo" 
            className="w-[100px] md:w-[180px] z-10 relative" 
            src={Logo} 
            onError={(e) => {
              console.error("Logo failed to load");
              e.currentTarget.style.border = "1px solid red";
            }}
          />
        </Link>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
          {step === 1 ? "Create Your Account" : "Personal Information"}
        </h2>

        {step === 1 ? (
          <div className="mt-6 space-y-4">
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Email Address</label>
              <div className="flex gap-2">
                <div className="flex-grow">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${emailError ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                </div>
                <Button 
                  color="primary" 
                  size="sm"
                  onClick={validateEmail}
                  className="h-[40px] whitespace-nowrap"
                >
                  Verify Email
                </Button>
              </div>
            </div>
            
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Password</label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full"
                endContent={
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </button>
                }
              />
            </div>

            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Confirm Password</label>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full"
                endContent={
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </button>
                }
              />
            </div>

            <Button
              color="primary"
              className="w-full"
              onClick={handleSubmit}
            >
              Register
            </Button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">Or sign up with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <Button
              variant="bordered"
              className="w-full"
              startContent={<FcGoogle className="text-xl" />}
            >
              Google Account
            </Button>

            <div className="mt-5 text-gray-600 text-sm">
              Already have an account? {" "}
              <Link href="/login" className="text-primary text-sm font-semibold hover:underline">
                Log in
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Full Name</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Birthdate</label>
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2 text-left">
                <label className="text-gray-600 text-sm block mb-1">Height (cm)</label>
                <Input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Height"
                />
              </div>
              <div className="w-1/2 text-left">
                <label className="text-gray-600 text-sm block mb-1">Weight (kg)</label>
                <Input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Weight"
                />
              </div>
            </div>
            <div className="text-left">
              <label className="text-gray-600 text-sm block mb-1">Medical History</label>
              <Input
                type="text"
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                placeholder="Enter any relevant medical history"
              />
            </div>

            <Button
              color="primary"
              className="w-full"
            >
              Complete Registration
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;