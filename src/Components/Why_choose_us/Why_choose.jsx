import DotIcon from "../DotIcon/doticon";
import { PiNotepad } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import Button from "../Buttons/Button";

export default function WhyChoose(){
    return(
        <div class="flex  flex-col md:flex-row-2 lg:flex-row justify-around p-20 mb-18">
            <div>
                <nav class="flex gap-2 text-emerald-600 text-sm  py-2">
                    <DotIcon/>
                    <h1>WHY CHOOSE US</h1>
                </nav>

                <h1 class="text-emerald-900 text-[45px]">Why you <b>should choose</b> our</h1>
                <h1 class="text-emerald-900 text-[45px]">insurance policy's</h1>

                <nav class="text-gray-600 py-6">
                <p>Choose our insurance policies for comprehensive coverage, personalized service, </p>
                <p> and affordable rates.We offer quick claims processing and expert support,ensuring </p>  
                <p>peace mind and protection for your future.</p>
                </nav>

                    <div>
                        <ol class="grid grid-cols-2 text-emerald-800 text-xl font-semibold mb-8  ">
                            <li class="flex gap-3 py-2 group mb-8">
                            <PiNotepad class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800" />
                            Control Over Policy</li>

                            <li class="flex gap-3 py-2 group mb-8">
                            <GiReceiveMoney class=" text-[45px]  text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            Affordable Premiums</li>

                            <li class="flex gap-3 py-2 group mb-8">
                            <BsWatch class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            Fast & Easy Process </li>

                            <li class="flex gap-3 py-2 group mb-8">
                            <Ri24HoursFill class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            24/7 Supports</li>

                        </ol>
                    </div>
                    <Button>Contact Now</Button>
            </div>
                
            <div>
                <img src="why-choose-image.jpg" alt="" class=" rounded-t-4xl rounded-br-4xl relative p-6  bg-teal-800 "/>
            </div>
        </div>
    )

}