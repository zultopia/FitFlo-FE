import { Link } from "react-router-dom";

import deviceCTA from "@/assets/deviceCTA.png";
import { IoIosCall } from "react-icons/io";

const CTASection = () => {
  return (
    <div className="pb-14 pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 to-gray-100 rounded-[2rem] border border-gray-200/50 overflow-hidden px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 p-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-gray-900">
                Join 100+ patients<br className="hidden md:block" /> already improving with FitFlo
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We built the complete health monitoring<br className="hidden md:block" /> platform, so you don't have to worry
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition duration-300 text-center"
                  to="/register"
                >
                  Sign up now
                </Link>
                <Link
                  className="bg-slate-200 text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-slate-300 transition duration-300 text-center flex items-center justify-center gap-2"
                  to="/contact"
                >
                  Contact Us <IoIosCall className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 p-8 flex justify-center md:justify-end">
              <img
                alt="FitFlo Dashboard"
                className="max-w-full h-auto rounded-lg shadow-xl transform translate-y-20"
                src={deviceCTA}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
