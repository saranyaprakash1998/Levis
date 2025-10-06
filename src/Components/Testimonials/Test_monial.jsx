import Button from "../Buttons/Button";
import DotIcon from "../DotIcon/doticon";
import TestCarousel from "./carousel_test";

export default function Testimonial() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16 mb-18 bg-zinc-100 gap-10 lg:gap-20">
      
      
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <nav className="flex gap-2 text-emerald-600 text-sm mb-3">
          <DotIcon />
          <h1>TESTIMONIALS</h1>
        </nav>

        <h1 className="text-3xl md:text-4xl text-emerald-900 font-semibold leading-tight mb-6">
          Real stories, real trust hear from our <b>Satisfied Clients</b>
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          We take pride in the trust our clients place in us. Through real-life stories 
          and testimonials, hear how our comprehensive insurance solutions have made 
          a positive impact on their lives. From smooth claims processes to personalized 
          service, our satisfied clients share how we’ve helped them protect what matters most.
        </p>

        <Button>Contact Now</Button>
      </div>

      
      <div className="w-full lg:w-1/2 bg-emerald-600 rounded-t-4xl rounded-br-4xl p-6">
        <TestCarousel />
      </div>
    </div>
  );
}
