import DotIcon from "../DotIcon/doticon";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoMdBusiness } from "react-icons/io";
import { BsCarFrontFill } from "react-icons/bs";

export default function Services(){
    return(
        <div class="bg-zinc-100 p-25">
            <div class="text-center flex flex-col items-center max-w-2xl mx-auto ">
            <nav class="flex gap-2 text-emerald-600 text-sm p-3">
                <DotIcon/>
                 <h1>SERVICES</h1>
            </nav>
            <h1 class="text-emerald-900 text-[40px]">Comprehensive <b>insurance</b> services</h1>
            <p class="text-gray-600 p-6">Our comprehensive insurance services are designed to provide you 
                with peace of mind, no matter your needs</p>
            
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-12 ">
 
            <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md hover:bg-emerald-800 group transition-all duration-300 sm:w-100 md:w-70 lg:w-70">
                <FaHandsHoldingChild class="mx-[5px] text-[50px] text-white bg-emerald-600 p-2 rounded-full no-underline  group-hover:bg-white group-hover:text-emerald-800 " />
            <h1 class="text-emerald-800 font-semibold group-hover:text-white p-8">
             HealthInsurance
            </h1>
            <p class="text-gray-500 group-hover:text-white mt-2">
            Health insurance provides comprehensive coverage for medical expenses.
            </p>
            <a href="#" class="text-emerald-600 text-xl font-semibold mt-4 inline-block group-hover:text-white p-6">
            Learn More 
            </a>
            </div>

 
            <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md hover:bg-emerald-800 group transition-all duration-300 sm:w-100 md:w-70 lg:w-70">
            <FaHandsHoldingCircle class="mx-[5px] text-[50px] text-white bg-emerald-600 p-2 rounded-full no-underline group-hover:bg-white group-hover:text-emerald-800 "/>
            <h1 class="text-emerald-800 font-semibold group-hover:text-white p-8">
            Life Insurance
            </h1>
            <p class="text-gray-500 group-hover:text-white mt-2">
            Health insurance provides comprehensive coverage for medical expenses.
            </p>
            <a href="#" class="text-emerald-600 text-xl font-semibold  mt-4 inline-block group-hover:text-white p-6">
            Learn More 
            </a>
            </div>

 
            <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md hover:bg-emerald-800 group transition-all duration-300 sm:w-100 md:w-70 lg:w-70">
            <IoMdBusiness class="mx-[5px] text-[50px] text-white bg-emerald-600 p-2 rounded-full no-underline group-hover:bg-white group-hover:text-emerald-800  "/>
            <h1 class="text-emerald-800 font-semibold group-hover:text-white p-8">
            BusinessInsurance
            </h1>
            <p class="text-gray-500 group-hover:text-white mt-2">
            Health insurance provides comprehensive coverage for medical expenses.
            </p>
            <a href="#" class="text-emerald-600 text-xl font-semibold  mt-4 inline-block group-hover:text-white p-6">
            Learn More
            </a>
            </div>

  
            <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md hover:bg-emerald-800 group transition-all duration-300 sm:w-100 md:w-70 lg:w-70">
            <BsCarFrontFill class="mx-[5px] text-[50px] text-white bg-emerald-600 p-2 rounded-full no-underline group-hover:bg-white group-hover:text-emerald-800  "/>
            <h1 class="text-emerald-800 font-semibold group-hover:text-white p-8">
            Car Insurance
            </h1>
            <p class="text-gray-500 group-hover:text-white mt-2">
             Health insurance provides comprehensive coverage for medical expenses.
            </p>
            <a href="#" class="text-emerald-600 text-xl font-semibold  mt-4 inline-block group-hover:text-white p-6">
            Learn More
             </a>
            </div>

            </div>
            
           
        </div>
    )
}