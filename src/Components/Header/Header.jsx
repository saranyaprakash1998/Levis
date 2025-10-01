import { useState } from "react";
import Button from "../Buttons/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md">
      <div className="flex justify-between items-center py-6 px-7">
        
        <img src="logo.png" alt="Logo" className="h-10" />

        <nav className="hidden md:flex gap-10 items-center">
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">Home</a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">About Us</a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">Services</a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">Pages</a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">Contact Us</a>
          <Button>Get A Quote</Button>
        </nav>

   
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-emerald-800 focus:outline-none"
          >
            {isOpen ? (
            
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="flex flex-col gap-5 px-7 pb-6 md:hidden bg-teal-800">
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">Home</a>
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">About Us</a>
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">Services</a>
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">Pages</a>
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">Contact Us</a>
          <a href="#" className="text-white hover:text-emerald-600 font-semibold">Get A Quote</a>
        </div>
      )}
    </div>
  );
}
