import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import DarkMode from "./DarkMood";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const token = localStorage.getItem("token");

  return (
     <div className="shadow-md   duration-200 relative z-40">
      
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
             <p className="ml-6">Book<span className="bg-purple-400 px-2 py-1 rounded-sm">Store</span></p>  
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block mr-8">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500   "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* profile & dashboard */}
            <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img
                src={currentUser.photoURL || avatarImg}
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </button>
           
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-40">
                <ul className="py-2">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
              </>
            ) : token ? (
              <Link to="/dashboard" className="border-b-2 border-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

            {/* order button */}
            <Link
            to="/cart"
            className="bg-purple-400 p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="h-5 w-5 text-bold" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
