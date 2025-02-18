import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../images/Limeroad-Logo.png";

const SearchBar = ({ isVisible, inputRef, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={onClose}
          className="ml-2 text-gray-600 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [profileHovered, setProfileHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const timeoutRef = useRef(null);
  const searchInputRef = useRef(null);

  const menuItems = {
    women: [
      { title: "Ethnic Wear", items: ["Kurta Kurtis", "Sarees", "Ethnic Sets", "Lehengas And Blouse"] },
      { title: "Western Wear", items: ["Dresses", "Tops", "Tunics", "T-Shirts", "Jeans & Jeggings"] },
      { title: "Footwear", items: ["Flats", "Heels", "Casual Shoes", "Flip Flops"] },
    ],
    men: [
      { title: "Top Wear", items: ["T-Shirts", "Shirts", "Sweatshirts", "Jackets & Coats"] },
      { title: "Bottom Wear", items: ["Jeans", "Trousers", "Shorts", "Track Pants"] },
      { title: "Accessories", items: ["Caps", "Belts", "Wallets", "Socks"] },
    ],
    kids: [
      { title: "Boys' Clothing", items: ["T-Shirts", "Shirts", "Jeans", "Shorts"] },
      { title: "Girls' Clothing", items: ["Dresses", "Tops", "Skirts", "Leggings"] },
      { title: "Footwear", items: ["Casual Shoes", "Sandals", "Sports Shoes"] },
    ],
  };

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredMenu(null), 300);
  };

  const handleProfileMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProfileHovered(true);
  };

  const handleProfileMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProfileHovered(false), 300);
  };

  const handleLoginClick = () => {
    const newWindow = window.open("/login", "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    if (newWindow) newWindow.focus();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCartClick = () => {
    const newWindow = window.open("/cart", "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    if (newWindow) newWindow.focus();
  };

  const handleSearchClick = useCallback(() => {
    setIsSearchVisible(true);
    setIsNavbarVisible(false);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 10);
  }, []);

  return (
    <>
      {isNavbarVisible && (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={logo} alt="LimeRoad" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`lg:flex lg:space-x-8 lg:text-sm lg:font-medium lg:mr-auto lg:ml-7 ${
                isMobileMenuOpen ? "block" : "hidden"
              } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40`}
            >
              {["women", "men", "kids", "home", "offers", "vmart"].map((menu) => (
                <div
                  key={menu}
                  className="relative group px-4 lg:px-0 py-2 lg:py-0"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={`/${menu}`}
                    className={`relative block lg:inline-block py-2 ${
                      menu === "offers"
                        ? "text-red-500"
                        : menu === "vmart"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    {menu.toUpperCase()}
                    <span
                      className={`absolute left-0 -bottom-6 h-[3px] bg-red-500 transition-all duration-300 ${
                        hoveredMenu === menu ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {hoveredMenu === menu && menuItems[menu] && (
                    <div
                      className="absolute left-0 top-12 mt-2 bg-white shadow-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 z-50 w-full lg:w-[800px]"
                      onMouseEnter={() => handleMouseEnter(menu)}
                      onMouseLeave={handleMouseLeave}
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
                                  to={`/${menu}/${item.replace(/\s+/g, "-").toLowerCase()}`}
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

            {/* Search, Cart, Profile Icons */}
            <div className="hidden lg:flex items-center space-x-6 text-lg">
              <button
                onClick={handleSearchClick}
                className="hover:text-gray-700 flex flex-col items-center"
              >
                <FiSearch />
                <span className="text-xs mt-1">SEARCH</span>
              </button>

              {/* Cart - Opens in New Tab */}
              <button
                onClick={handleCartClick}
                className="hover:text-gray-700 flex flex-col items-center"
              >
                <FiShoppingCart />
                <span className="text-xs mt-1">CART</span>
              </button>

              {/* Profile Dropdown */}
              <div
                className="relative flex flex-col items-center"
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
              >
                <div className="relative cursor-pointer">
                  <FiUser />
                  <span className="text-xs mt-1">PROFILE</span>
                </div>

                {profileHovered && (
                  <div className="absolute top-10 right-0 bg-white shadow-lg rounded-none w-48 p-3 z-50">
                    <p className="text-xs font-semibold">WELCOME!<br /> To view account details</p>
                    <button
                      className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded-lg mt-2 text-sm hover:from-red-600 hover:to-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                      onClick={handleLoginClick}
                    >
                      LOGIN
                    </button>
                    <hr className="mt-4" />
                    <ul className="mt-3 space-y-2 text-sm">
                      <li><button onClick={handleLoginClick} className="hover:text-gray-900 text-xs w-full text-left">ORDERS</button></li>
                      <li><button onClick={handleLoginClick} className="hover:text-gray-900 text-xs w-full text-left">RETURN REPLACEMENT</button></li>
                      <li><button onClick={handleLoginClick} className="hover:text-gray-900 text-xs w-full text-left">LR CREDITS</button></li>
                      <hr className="mt-4" />
                      <li><button onClick={handleLoginClick} className="hover:text-gray-900 text-xs">CUSTOMER SUPPORT</button></li>
                      <li><Link to="/faq" className="hover:text-gray-900 text-xs">FAQ & HELP</Link></li>
                      <hr className="mt-4" />
                    </ul>
                    <button className="mt-2 py-1 px-2 bg-gray-100 text-sm">हिंदी</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}

      <SearchBar 
        isVisible={isSearchVisible} 
        inputRef={searchInputRef}
        onClose={() => {
          setIsSearchVisible(false);
          setIsNavbarVisible(true);
        }}
      />
    </>
  );
};

export default Navbar;
