import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  
  return (
    <div>
      <nav className="flex justify-between items-center h-[150px] mx-auto shadow-md animated-gradient px-4 md:px-8">
        <NavLink to="/">
          <div className="ml-0 md:ml-[40px]">
            <h1 className="text-4xl font-bold uppercase tracking-wide text-white">CHITRABINDOO</h1>
          </div>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            {isMenuOpen ? '✖️' : '☰'} {/* Simple toggle icon */}
          </button>
        </div>

        <div className={`flex items-center font-medium mr-5 space-x-6 md:space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-[150px] left-0 bg-gray-800 w-full' : 'hidden md:flex'}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/genre/abstract" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <p>Abstract</p>
          </NavLink>
          <NavLink to="/genre/landscape" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <p>Landscape</p>
          </NavLink>
          <NavLink to="/genre/portrait" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <p>Portrait</p>
          </NavLink>
          <NavLink to="/genre/mythological" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <p>Mythological</p>
          </NavLink>
          <NavLink to="/cartpage" className="relative" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center">
              <FaShoppingCart className="text-white text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          color: white;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ffeb3b; /* Bright yellow for hover effect */
          text-decoration: underline; /* Optional underline effect on hover */
        }

        /* Unique Gradient Background */
        .animated-gradient {
          background: linear-gradient(45deg, #00c6ff, #0072ff, #8e2de2, #4a00e0);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }

        /* Gradient animation */
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
