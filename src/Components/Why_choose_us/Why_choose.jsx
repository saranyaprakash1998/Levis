import DotIcon from "../DotIcon/doticon";
import { PiNotepad } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import Button from "../Buttons/Button";

export default function WhyChoose(){
    return(
        <div class="flex  flex-col md:flex-row-2 lg:flex-row p-8  justify-around mb-18">

            <div className="w-full md:w-1/2 p-4 md:p-0">
                <nav class="flex gap-2 text-emerald-600 text-sm  py-2">
                    <DotIcon/>
                    <h1>WHY CHOOSE US</h1>
                </nav>

                <h1 class=" text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-semibold leading-tight">
                    Why you <b>should choose</b> our insurance policy's
                </h1>

                
                <p className="text-gray-600 mt-8 mb-8 " >Choose our insurance policies for comprehensive coverage, personalized service,
                and affordable rates.We offer quick claims processing and expert support,ensuring 
                peace mind and protection for your future.</p>
                

                    <div class="grid grid-cols-2 text-emerald-800 text-xl font-semibold mb-8  ">

                        <div class="flex items-center gap-4 group mb-8">
                            <div>
                                <PiNotepad class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800" />
                            
                            </div>
                                
                            <div>
                                <p class="text-teal-900 text-lg font-bold">Control Over Policy</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 group mb-8">

                            <div>
                                 <GiReceiveMoney class=" text-[45px]  text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            </div>

                            <div>
                                <p class="text-teal-900   text-lg font-bold "> Affordable Premiums</p>
                            </div>

                        </div>

                        <div class="flex items-center gap-4 group mb-8">
                            <div>
                                <BsWatch class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            </div>

                            <div>
                                <p class="text-teal-900 text-lg font-bold">Fast & Easy Process </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 group mb-8">

                            <div>
                                <Ri24HoursFill class=" text-[45px] text-white bg-emerald-600 p-2 rounded-full  group-hover:bg-emerald-800"/>
                            </div>

                            <div>
                                <p class="text-teal-900 text-lg font-bold">24/7 Supports</p>
                            </div>
                        </div>
                        
                       
                    </div>
                    <Button>Contact Now</Button>
                    <br />
            </div>
                
            <div>
                <img src="why-choose-image.jpg" alt="" class=" rounded-t-4xl rounded-br-4xl relative p-6  bg-teal-800 w-150 "/>
            </div>
        </div>
    )

}