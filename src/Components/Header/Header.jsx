import { useState } from "react";
import Button from "../Buttons/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md relative">
      
      <div className="flex justify-between items-center py-4 px-5 sm:px-7 bg-white">
        
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        
        <nav className="hidden lg:flex gap-10 items-center">
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">
            Home
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">
            About Us
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">
            Services
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">
            Pages
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 font-semibold">
            Contact Us
          </a>
          <Button>Get A Quote</Button>
        </nav>

        
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-emerald-800 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-teal-800 z-50 flex flex-col px-7 py-6 transition-all duration-300">
         
          <div className="flex justify-start mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white bg-white/10 rounded-lg p-2"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

         
          <nav className="flex flex-col gap-6 text-left">
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              Home
            </a>
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              About Us
            </a>
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              Services
            </a>
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              Pages
            </a>
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              Contact Us
            </a>
            <a href="#" className="text-white font-semibold hover:text-emerald-400">
              Get A Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
