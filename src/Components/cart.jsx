import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8  shadow-lg text-center max-w-md w-full mb-20">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">There are no items in your cart.</p>
        <Link
          to="/"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
