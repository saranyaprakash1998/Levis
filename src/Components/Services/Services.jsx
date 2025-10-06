import DotIcon from "../DotIcon/doticon";
import { FaHandsHoldingChild, FaHandsHoldingCircle } from "react-icons/fa6";
import { IoMdBusiness } from "react-icons/io";
import { BsCarFrontFill } from "react-icons/bs";

export default function Services() {
  return (
    <section className="bg-zinc-100 py-16 px-6 md:px-12 lg:px-20">
      
      <div className="text-center flex flex-col items-center max-w-2xl mx-auto mb-10">
        <nav className="flex items-center gap-2 text-emerald-600 text-sm mb-2">
          <DotIcon />
          <h4>SERVICES</h4>
        </nav>
        <h2 className="text-3xl md:text-4xl text-emerald-900 font-semibold leading-snug">
          Comprehensive <b>insurance</b> services
        </h2>
        <p className="text-gray-600 mt-4">
          Our comprehensive insurance services are designed to provide you with peace of mind,
          no matter your needs.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
      
        <div className="bg-white rounded-t-3xl rounded-br-3xl p-8 shadow-md hover:bg-emerald-800 group transition-all duration-300 flex flex-col justify-between text-center">
          <div className="flex  mb-6">
            <div className="text-[40px] text-white bg-emerald-600 p-3 rounded-full group-hover:bg-white group-hover:text-emerald-800 transition-all duration-300">
              <FaHandsHoldingChild />
            </div>
          </div>
          <h3 className="text-emerald-800 font-semibold text-lg group-hover:text-white mb-4">
            Health Insurance
          </h3>
          <p className="text-gray-500 group-hover:text-white text-sm mb-6">
            Health insurance provides comprehensive coverage for medical expenses.
          </p>
          <a
            href="#"
            className="text-emerald-600 font-semibold group-hover:text-white transition-all duration-300"
          >
            Learn More →
          </a>
        </div>

        
        <div className="bg-white rounded-t-3xl rounded-br-3xl p-8 shadow-md hover:bg-emerald-800 group transition-all duration-300 flex flex-col justify-between text-center">
          <div className="flex  mb-6">
            <div className="text-[40px] text-white bg-emerald-600 p-3 rounded-full group-hover:bg-white group-hover:text-emerald-800 transition-all duration-300">
              <FaHandsHoldingCircle />
            </div>
          </div>
          <h3 className="text-emerald-800 font-semibold text-lg group-hover:text-white mb-4">
            Life Insurance
          </h3>
          <p className="text-gray-500 group-hover:text-white text-sm mb-6">
            Secure your family's financial future with our life insurance plans.
          </p>
          <a
            href="#"
            className="text-emerald-600 font-semibold group-hover:text-white transition-all duration-300"
          >
            Learn More →
          </a>
        </div>

      
        <div className="bg-white rounded-t-3xl rounded-br-3xl p-8 shadow-md hover:bg-emerald-800 group transition-all duration-300 flex flex-col justify-between text-center">
          <div className="flex mb-6">
            <div className="text-[40px] text-white bg-emerald-600 p-3 rounded-full group-hover:bg-white group-hover:text-emerald-800 transition-all duration-300">
              <IoMdBusiness />
            </div>
          </div>
          <h3 className="text-emerald-800 font-semibold text-lg group-hover:text-white mb-4">
            Business Insurance
          </h3>
          <p className="text-gray-500 group-hover:text-white text-sm mb-6">
            Protect your business assets with our tailored insurance coverage.
          </p>
          <a
            href="#"
            className="text-emerald-600 font-semibold group-hover:text-white transition-all duration-300"
          >
            Learn More →
          </a>
        </div>

       
        <div className="bg-white rounded-t-3xl rounded-br-3xl p-8 shadow-md hover:bg-emerald-800 group transition-all duration-300 flex flex-col justify-between text-center">
          <div className="flex  mb-6">
            <div className="text-[40px] text-white bg-emerald-600 p-3 rounded-full group-hover:bg-white group-hover:text-emerald-800 transition-all duration-300">
              <BsCarFrontFill />
            </div>
          </div>
          <h3 className="text-emerald-800 font-semibold text-lg group-hover:text-white mb-4">
            Car Insurance
          </h3>
          <p className="text-gray-500 group-hover:text-white text-sm mb-6">
            Drive with confidence knowing your car is fully protected.
          </p>
          <a
            href="#"
            className="text-emerald-600 font-semibold group-hover:text-white transition-all duration-300"
          >
            Learn More →
          </a>
        </div>

      </div>
    </section>
  );
}
