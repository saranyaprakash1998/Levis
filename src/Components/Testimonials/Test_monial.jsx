import Button from "../Buttons/Button";
import DotIcon from "../DotIcon/doticon";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import TestCarousel from "./carousel_test";

export default function Testimonial(){
    return(
        <div class="flex  flex-col md:flex-row-2 lg:flex-row p-8  justify-around mb-18 bg-zinc-100">
            <div class=" w-full md:w-1/2 p-4 md:p-0 px-8">
                <nav class="flex gap-2 text-emerald-600 text-sm mb-2">
                    <DotIcon/>
                    <h1>TESTIMONIALS</h1>
                </nav>
                <h1  class=" text-3xl md:text-4xl lg:text-4xl text-emerald-900 font-semibold leading-tight">
                    Real stories, real trust hear from our <b>Satisfied clients</b></h1>

                <span class="text-gray-600  ">
                   <p class="mt-8 mb-8">We take pride in the trust our clients place in us. Through real-life stories 
                    and testimonials, hear how our comprehensive insurance solutions have made a positive 
                   impact on their lives. From smooth claims processes to personalized service, our 
                    satisfied clients share how we’ve helped them protect what matters most.</p>
                </span>

                <Button>Contact Now</Button>
                
            </div>

            <div class="bg-emerald-600 rounded-t-4xl rounded-br-4xl  ">

            <div>
                <TestCarousel/>
            </div>

            </div>


        </div>
    )
}