import DotIcon from "../DotIcon/doticon";
import { PiNotepad } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import Button from "../Buttons/Button";

export default function WhyChoose() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-16 gap-10">
      
      
      <div className="w-full lg:w-1/2 space-y-6">
        
        <nav className="flex gap-2 text-emerald-600 text-sm">
          <DotIcon />
          <h1>WHY CHOOSE US</h1>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-semibold leading-tight">
          Why you <b>should choose</b> our insurance policies
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Choose our insurance policies for comprehensive coverage, personalized service,
          and affordable rates. We offer quick claims processing and expert support,
          ensuring peace of mind and protection for your future.
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-10 gap-y-8 mt-8 text-emerald-800">
          <div className="flex items-center gap-4 group">
            <PiNotepad className="text-[45px] text-white bg-emerald-600 p-2 rounded-full group-hover:bg-emerald-800 transition-colors" />
            <p className="text-teal-900 font-bold text-lg">Control Over Policy</p>
          </div>

          <div className="flex items-center gap-4 group">
            <GiReceiveMoney className="text-[45px] text-white bg-emerald-600 p-2 rounded-full group-hover:bg-emerald-800 transition-colors" />
            <p className="text-teal-900 font-bold text-lg">Affordable Premiums</p>
          </div>

          <div className="flex items-center gap-4 group">
            <BsWatch className="text-[45px] text-white bg-emerald-600 p-2 rounded-full group-hover:bg-emerald-800 transition-colors" />
            <p className="text-teal-900 font-bold text-lg">Fast & Easy Process</p>
          </div>

          <div className="flex items-center gap-4 group">
            <Ri24HoursFill className="text-[45px] text-white bg-emerald-600 p-2 rounded-full group-hover:bg-emerald-800 transition-colors" />
            <p className="text-teal-900 font-bold text-lg">24/7 Support</p>
          </div>
        </div>

        <Button>Contact Now</Button>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="bg-teal-800 rounded-t-4xl rounded-br-4xl p-4">
          <img
            src="why-choose-image.jpg"
            alt="Insurance service"
            className="rounded-t-3xl rounded-br-3xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
