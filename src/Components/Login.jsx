import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const LoginPage = () => {
  // Close the window if opened in a new tab
  const handleClose = () => {
    if (window.opener) {
      window.close();
    } else {
      window.location.href = "/";
    }
  };

  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  const handleInputChange = (e) => setMobileNumber(e.target.value);

  const handleNextClick = () => {
    setError("");
    if (mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      if (rememberMe) {
        localStorage.setItem("rememberedUser", mobileNumber);
      }
      window.open("/", "_blank"); // Open the homepage in a new tab
    }, 1500);
  };




  return (
    <div className="fixed inset-0 bg-gray-100">
<div className="absolute inset-0 bg-white p-8 w-full max-w-md mx-auto my-8 shadow-lg rounded-lg relative"> 


        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 7v-5m0 0l-9-5m9 5l9-5"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mt-4">SIGN IN</h2>
          <p className="text-gray-600">Sign in to proceed further</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="mobile-number"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile-number"
            value={mobileNumber}
            onChange={handleInputChange}
            maxLength={10}
            placeholder="Enter your mobile number"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <button
          onClick={handleNextClick}
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
          ) : (
            "NEXT"
          )}
        </button>

      </div>
    </div>
  );
};

export default LoginPage;
