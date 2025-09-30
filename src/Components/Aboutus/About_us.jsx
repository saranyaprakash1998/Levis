
import Button from "../Buttons/Button";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { RiDoubleQuotesL } from "react-icons/ri";
import DotIcon from "../DotIcon/doticon";

export default function AboutUs(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row justify-around p-6 md:p-12 gap-10">
            <div class="bg-[url(/about-image.jpg)] rounded-t-full  bg-cover w-130">
                    
                <div class="flex gap-4 bg-white rounded-t-2xl rounded-br-2xl p-4 shadow-md w-65 h-15 float-end mt-10">
                    <AiOutlineSafetyCertificate class="bg-emerald-600 text-white rounded-full text-2xl"/>
                    <h3 class="text-emerald-800 font-semibold">Fast Claims Processing</h3>
                </div>

               

                
                <div class="bg-white rounded-t-4xl rounded-br-4xl p-4 shadow-md w-85 h-25 mt-100 ml-60">
                    <RiDoubleQuotesL  class="bg-emerald-600 text-white rounded-full text-2xl "/>
                    <p class="text-gray-600">Exceptional service and peace of mind.</p>
                       <p class="text-gray-600"> <strong>Highly recommend!</strong>
                    </p>
                </div>
            </div>



            <div class="w-full md:w-1/2 p-4 md:p-6">
               <nav class="flex gap-2 text-emerald-600 text-sm p-3 ">
                <DotIcon/>
               <h4>ABOUT US</h4>
               </nav> 

                <h1 class="text-2xl md:text-4xl text-emerald-900 font-semibold">Comprehensive <b>insurance</b></h1>
                <h1 class="text-2xl md:text-4xl text-emerald-900 font-semibold"><b>solutions</b> for every need</h1><br />

                <nav class="text-gray-600 mt-4 space-y-1">
                <p>we offer a range of plans tailored to meet your unique needs. Let us help you find </p>
                <p>the right protection, so you can live with peace of mind.</p>
                </nav>
                <div class="flex flex-col lg:flex-row gap-10 mt-8">
                    <div >
                            <ol class="space-y-3">
                                <li class="flex items-center gap-2 text-emerald-600"><VscVerified />Customer-Centric Approach</li>
                                <li class="flex items-center gap-2 text-emerald-600"><VscVerified />Transparent Communication</li>
                                <li class="flex items-center gap-2 text-emerald-600"><VscVerified />365 / 24x7 Quick Supports </li>
                                <li class="flex items-center gap-2 text-emerald-600"><VscVerified />Critical Illness Insurance</li>
                            </ol><br />
                            <Button>More About</Button>
                    </div>

                    <div class="rounded-t-3xl rounded-br-3xl bg-zinc-100 p-14 ml-12 flex flex-col items-center justify-center gap-10">
                        <div class="text-center">
                            <h1 class="text-emerald-600 text-3xl md:text-4xl "><b>100%</b></h1>
                            <h1 class="text-gray-600 text-base">Success Rate</h1>
                        </div>
                     
                        <div class="text-center">
                            <h1 class="text-emerald-600 text-3xl md:text-4xl "><b>3256+</b></h1>
                            <h1 class="text-gray-600 text-base">Satisfied Clients</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}