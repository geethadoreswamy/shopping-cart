
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "../Assets/Images/Limeroad-Logo.png";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const menuRefs = useRef({});
  const [timeoutId, setTimeoutId] = useState(null);

  const menuItems = {
    women: [
      {
        title: "Ethnic Wear",
        items: ["Kurta Kurtis", "Sarees", "Ethnic Sets", "Lehengas And Blouse"],
      },
      {
        title: "Western Wear",
        items: ["Dresses", "Tops", "Tunics", "T-Shirts", "Jeans & Jeggings"],
      },
      {
        title: "Footwear",
        items: ['flats',' heels','casual shoes','flip flops']  
      },
    ],
    men: [
      {
        title: "Top Wear",
        items: ["T-Shirts", "Shirts", "Sweatshirts", "Jackets & Coats"],
      },
      {
        title: "Bottom Wear",
        items: ["Jeans", "Trousers", "Shorts", "Track Pants"],
      },
      {
        title: "Accessories",
        items: ["Caps", "Belts", "Wallets", "Socks"],
      },
    ],
    kids: [
      {
        title: "Boys' Clothing",
        items: ["T-Shirts", "Shirts", "Jeans", "Shorts"],
      },
      {
        title: "Girls' Clothing",
        items: ["Dresses", "Tops", "Skirts", "Leggings"],
      },
      {
        title: "Footwear",
        items: ["Casual Shoes", "Sandals", "Sports Shoes"],
      },
    ],
  };

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredMenu(null);
    }, 300); // Set delay before closing the menu
    setTimeoutId(id);
  };

  return (
    <nav className="bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="LimeRoad" className="h-16 w-23" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium mr-auto ml-7">
          {["women", "men", "kids", "home", "offers", "vmart"].map((menu) => (
            <div
              key={menu}
              className="relative group"
              ref={(el) => (menuRefs.current[menu] = el)} // Reference for positioning
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${menu}`}
                className={`relative py-2 group ${
                  menu === "offers"
                    ? "text-red-500"
                    : menu === "vmart"
                    ? "text-orange-500"
                    : "text-gray-800"
                }`}
              >
                {menu.toUpperCase()}
                {/* Red Underline */}
                <span
                  className={`absolute left-0 -bottom-6 h-[3px] bg-red-500 transition-all duration-300 ${
                    hoveredMenu === menu ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>

              {hoveredMenu === menu && menuItems[menu] && (
                <div
                  className="absolute left-0 top-12 mt-2 bg-white shadow-slate-400 p-6 grid grid-cols-3 gap-8 z-50 w-[800px] pointer-events-auto"
                  style={{ zIndex: 999 }} // Increased z-index to avoid overlap issues
                  onMouseEnter={() => handleMouseEnter(menu)} // Re-enter menu on hover
                  onMouseLeave={handleMouseLeave} // Keep menu open when mouse leaves menu items
                >
                  {menuItems[menu].map((category, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded-md mb-3">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={`/${menu}/${item
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              className="text-gray-600 hover:text-gray-900 text-sm"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-lg">
          <Link
            to="/search"
            className="hover:text-gray-700 flex flex-col items-center"
          >
            <FiSearch />
            <span className="text-xs">SEARCH</span>
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-700 flex flex-col items-center"
          >
            <FiShoppingCart />
            <span className="text-xs">CART</span>
          </Link>
          <Link
            to="/profile"
            className="hover:text-gray-700 flex flex-col items-center"
          >
            <FiUser />
            <span className="text-xs">PROFILE</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
