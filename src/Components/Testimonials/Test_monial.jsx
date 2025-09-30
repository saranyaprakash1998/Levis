import Button from "../Buttons/Button";
import DotIcon from "../DotIcon/doticon";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
export default function Testimonial(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row bg-zinc-100 mb-30">
            <div class="p-20">
                <nav class="flex gap-2 text-emerald-600 text-sm">
                    <DotIcon/>
                    <h1>TESTIMONIALS</h1>
                </nav>
                <h1  class="text-emerald-900 text-[40px] ">Real stories, real trust hear</h1>
                <h1  class="text-emerald-900 text-[40px] ">from our <b>Satisfied clients</b></h1>

                <span class="text-gray-600  ">
                   <p class="mt-8">We take pride in the trust our clients place in us. Through real-life stories </p>
                   <p> and testimonials, hear how our comprehensive insurance solutions have made a positive </p>
                   <p> impact on their lives. From smooth claims processes to personalized service, our </p>
                   <p class="mb-10"> satisfied clients share how we’ve helped them protect what matters most.</p>
                </span>

                <Button>Contact Now</Button>
                
            </div>

            <div  class="bg-emerald-600 rounded-t-4xl rounded-br-4xl mt-20 mb-10 ">
                <div class=" mt-4 ">
                    <nav class="flex gap-3 text-[50px] text-white bg-emerald-600 p-10 ml-50" >
                    <BsArrowLeftSquareFill />
                    <BsArrowRightSquareFill />
                    </nav>

                    <div class="bg-white  rounded-t-4xl rounded-br-4xl mt-4 ">
                        <p class="px-4  text-gray-600 leading-relaxed">
                           "As a small business owner, I needed reliable coverage. Provided comprehensive </p>
                              <p class="px-4  text-gray-600 leading-relaxed">  options tailored to my needs. Their support has been invaluable. Their disability </p>
                              <p class="px-4  text-gray-600 leading-relaxed">  coverage kept me afloat during a tough time. I'm forever grateful. Their team is </p>
                               <p class="px-4  text-gray-600 leading-relaxed"> always ready to help, and I'm confident I'm well protected."
                        </p>
                         
                           <div class="flex items-center gap-6 p-6">
                            <img src="author-1.jpg" alt="" class="rounded-full "/>
                            <div>
                                <h1 class="text-teal-800 font-bold">Michael R.</h1>
                                <h1>Business Insurance</h1>
                            </div>
                           </div>
                    </div>
                </div>

            </div>


        </div>
    )
}