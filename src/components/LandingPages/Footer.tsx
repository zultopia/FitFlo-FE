import React from "react";
import { Link } from "@heroui/link";

import { TwitterIcon } from "@/components/icons";

// Phone icon component
const PhoneIcon = ({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    stroke="currentColor"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.286 3 6V5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

// Email icon component
const EmailIcon = ({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    stroke="currentColor"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

// Location icon component
const LocationIcon = ({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    stroke="currentColor"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

// Facebook icon component
const FacebookIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
      fill="currentColor"
    />
  </svg>
);

// Instagram icon component
const InstagramIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
      fill="currentColor"
    />
  </svg>
);

// Dribbble icon component for the fourth icon in the screenshot
const DribbbleIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.42 8.82C17.94 10.92 18.16 13.08 18.16 13.11C18.1 13.11 15.82 13.58 13.48 13.58C13.44 13.5 13.41 13.42 13.38 13.35C13.36 13.32 13.36 13.29 13.34 13.26C13.59 12.69 13.85 12.13 14.12 11.58C15.37 10.34 16.27 9.17 16.42 8.82ZM12 4C14.03 4 15.9 4.67 17.36 5.85C17.23 6.17 16.42 7.26 15.23 8.43C14.29 7.57 13.3 6.88 12.26 6.37C11.67 6.09 11.06 5.89 10.45 5.77C10.24 5.72 10.05 5.68 9.84 5.66C10.05 5.63 10.26 5.6 10.5 5.58C11 5.53 11.5 5.5 12 5.5V4ZM8.89 6.5C9.24 6.5 10.26 6.53 11.74 6.89C12.47 7.1 13.18 7.4 13.87 7.76C14.5 8.07 15.09 8.44 15.67 8.87C15.96 9.08 16.24 9.31 16.51 9.55C15.43 10.79 14.46 12.08 13.59 13.43C12.99 13.43 12.45 13.46 11.97 13.53C10.46 13.72 9.34 14.21 8.68 14.56C7.41 15.22 6.67 15.82 6.67 15.82C6.65 15.79 6.63 15.77 6.61 15.74C5.9 14.7 5.49 13.48 5.49 12.16V12C5.49 12 6.9 11.35 8.89 11.05C9.31 11 9.74 10.95 10.19 10.93C10.21 10.97 10.23 11.01 10.24 11.05C10.28 11.14 10.31 11.22 10.35 11.3C9.97 11.33 9.6 11.36 9.25 11.41C7.92 11.61 6.94 11.89 6.29 12.1C6.31 12.16 6.33 12.21 6.35 12.27C6.65 13.18 7.15 14 7.8 14.68C7.9 14.59 9.77 13.24 12.31 12.87C12.31 12.87 12.45 12.85 12.46 12.84C13.31 15.15 13.44 17.1 13.47 17.47C12.99 17.62 12.5 17.71 12 17.71C7.71 17.71 4.29 14.29 4.29 10C4.29 9.53 4.34 9.07 4.43 8.63C4.52 8.24 4.66 7.85 4.83 7.49C5.83 6.74 7.16 6.5 8.89 6.5ZM12 20C10.63 20 9.33 19.65 8.2 19.03C8.31 18.48 8.91 16.46 10.23 13.6C10.23 13.6 10.25 13.57 10.26 13.55C11.41 13.35 12.67 13.28 14.07 13.37C15.06 13.43 15.96 13.55 16.79 13.75C16.19 16.43 14.32 18.61 11.89 19.66C11.91 19.4 11.93 19.12 11.95 18.82C12.05 17.52 12.16 15.99 12.32 14.47C12.66 14.58 12.83 14.67 12.83 14.67C13.21 14.86 13.45 15.11 13.56 15.42C13.7 15.83 13.55 16.26 13.28 16.53C13.06 16.75 12.75 16.89 12.46 16.89C12.38 16.89 12.31 16.88 12.24 16.85C11.73 16.69 11.4 16.09 11.56 15.57C11.65 15.27 11.87 15.04 12.16 14.92C12.16 14.95 12.16 14.98 12.15 15.01C12.12 15.22 12.06 15.52 11.82 15.76C11.66 15.92 11.43 16.01 11.2 16C11.06 16 10.92 15.96 10.82 15.89C10.56 15.71 10.46 15.4 10.52 15.08C10.58 14.79 10.79 14.57 11.07 14.46C11.15 14.43 11.23 14.41 11.31 14.4V14.68C11.24 14.73 11.17 14.78 11.13 14.87C11.04 15.04 11.1 15.25 11.27 15.36C11.34 15.4 11.41 15.41 11.48 15.38C11.65 15.3 11.68 15.08 11.68 14.96C11.76 15.03 11.82 15.12 11.84 15.23C11.86 15.36 11.82 15.51 11.72 15.61C11.64 15.69 11.53 15.73 11.42 15.73C11.15 15.73 10.93 15.5 10.93 15.22C10.93 15.13 10.96 15.05 11 14.97C11.3 14.85 11.41 14.8 11.46 14.77C11.47 14.9 11.48 15.03 11.5 15.16C11.52 15.16 11.53 15.16 11.55 15.16C11.61 15.16 11.67 15.13 11.7 15.09C11.77 15.01 11.78 14.89 11.74 14.79C11.69 14.67 11.56 14.6 11.44 14.62C11.35 14.64 11.27 14.71 11.24 14.8C10.46 14.9 9.82 15.05 9.41 15.16C9.43 15.08 9.44 15 9.46 14.92C9.79 13.42 10.31 11.77 11.02 9.96C11.27 9.31 11.53 8.69 11.82 8.08C12.03 7.66 12.24 7.26 12.46 6.88C13.37 7.34 14.23 7.92 15.05 8.63C14.15 9.63 13.08 10.97 11.91 12.74C11.3 12.79 10.76 12.87 10.28 12.97C10.27 12.91 10.26 12.85 10.25 12.79C10.21 12.62 10.17 12.44 10.14 12.27C10.6 12.18 11.13 12.12 11.72 12.09C11.81 12.11 11.91 12.11 12 12.11C13.28 12.11 14.52 11.94 15.69 11.67C16.03 11.58 16.37 11.48 16.69 11.36C16.7 11.58 16.71 11.79 16.71 12C16.71 12.09 16.71 12.18 16.7 12.27C16.64 13.15 16.44 13.99 16.12 14.77C15.13 14.56 14.05 14.41 12.93 14.36C12.83 14.35 12.73 14.35 12.64 14.35C12.58 14.35 12.53 14.35 12.48 14.35C12.39 14.35 12.3 14.36 12.22 14.36C12.3 14.64 12.38 14.94 12.46 15.23C12.52 15.45 12.58 15.67 12.64 15.88C12.62 15.98 12.6 16.09 12.57 16.22C12.49 16.59 12.35 17.12 12.29 17.15C12.29 16.7 11.93 16.33 11.47 16.33C11.31 16.33 11.16 16.38 11.03 16.47C10.74 16.67 10.6 17.03 10.69 17.37C10.76 17.65 10.97 17.88 11.25 17.97C11.35 18 11.45 18.02 11.55 18.02C11.85 18.02 12.14 17.87 12.32 17.63C12.44 17.46 12.53 17.25 12.59 17.01C12.67 16.68 12.75 16.29 12.84 15.83C13.14 17.55 13.41 18.92 13.6 19.74C13.08 19.91 12.54 20 12 20ZM18.92 16.17C18.26 17.77 17.11 19.12 15.66 20C15.57 19.79 15.24 18.86 14.9 17.38C16.07 17.11 17.14 16.71 18.15 16.17C18.41 16.06 18.67 15.94 18.92 15.81C18.95 15.93 18.97 16.05 18.99 16.17H18.92Z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <img alt="FitFlo Logo" className="h-14 mb-2" src="/logoicon.svg" />
            <p className="text-gray-600">
              FitFlo - Your personal health companion.
            </p>
            <p className="text-gray-600">
              Helping you track symptoms and manage healthcare.
            </p>
            <p className="mt-4 text-gray-600">Made with ❤️ in Indonesia.</p>
          </div>

          {/* Right side content wrapper */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:ml-auto">
            {/* Contact Information */}
            <div className="mb-6 md:mb-0">
              <p className="text-gray-600 mb-2 text-right">
                <EmailIcon className="inline-block h-5 w-5 mr-2" />
                hello@fitflo.com
              </p>
              <p className="text-gray-600 text-right">
                <LocationIcon className="inline-block h-5 w-5 mr-2" />
                Jakarta, Indonesia
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-right">
              <div>
                <h5 className="text-gray-800 font-medium mb-4">Product</h5>
                <ul>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-800 font-medium mb-4">Company</h5>
                <ul>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-800 font-medium mb-4">Legal</h5>
                <ul>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-600 hover:text-blue-500" href="#">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; 2024 FitFlo - All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link className="text-gray-600 hover:text-blue-500" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="text-gray-600 hover:text-blue-500" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="text-gray-600 hover:text-blue-500" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
