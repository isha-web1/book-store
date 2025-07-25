import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <h1 className="font-bold">
              Book<span className="text-purple-600 font-bold">Store</span>
            </h1>
          </Link>

          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <FcBusinessman
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-purple-500" : ""
                    }`}
                  />
                </button>
                {/* show dropdown */}
                {isDropdownOpen && (
                  <div  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
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
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" className="hidden sm:block">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-purple-600 p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6 text-white" />
            <span className="text-white text-sm font-semibold ml-2">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
