import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: `"As a small business owner, I needed reliable coverage. provided comprehensive options tailored to my needs. Their support has been invaluable. Their disability coverage kept me afloat during a tough time. I'm forever grateful. Their team is always ready to help, and I'm confident I'm well protected."`,
      name: "Michael R.",
      role: "Business Insurance",
      image: "author-1.jpg",
    },
    {
      text: `"As a small business owner, I needed reliable coverage. provided comprehensive options tailored to my needs. Their support has been invaluable. Their disability coverage kept me afloat during a tough time. I'm forever grateful. Their team is always ready to help, and I'm confident I'm well protected."`,
      name: "Danne Russell",
      role: "Co. Founder",
      image: "author-1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-15">
     
      <div className="bg-emerald-600 rounded-t-3xl rounded-b-none p-4 relative w-[600px] max-w-full">
        
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="bg-white text-emerald-600 p-3 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-emerald-600 p-3 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      
      <div className="bg-white shadow-md rounded-3xl -mt-6 p-8 w-[600px] max-w-full">
        <p className="text-gray-600  leading-relaxed">
          {testimonials[current].text}
        </p>

        <div className="flex items-center gap-3 mt-6">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-teal-800 font-bold">
              {testimonials[current].name}
            </h4>
            <p className="text-gray-600 text-sm">
              {testimonials[current].role}
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
