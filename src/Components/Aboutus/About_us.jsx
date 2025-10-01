
import Button from "../Buttons/Button";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { RiDoubleQuotesL } from "react-icons/ri";
import DotIcon from "../DotIcon/doticon";

export default function AboutUs(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row justify-around p-6 md:p-12 gap-10">

       <div class="relative w-full overflow-hidden">
  <div class="bg-[url(/about-image.jpg)] bg-center bg-cover rounded-t-[50%] w-full max-w-[520px] mx-auto relative h-[400px] md:h-[600px] p-4">
    
    <div class="absolute top-[10%] right-[50%] translate-x-[50%] md:top-[10%] md:right-[50%] md:translate-x-[50%] lg:right-0 lg:translate-x-0 flex gap-2 bg-white rounded-xl p-3 shadow-lg w-fit">
      <div class="bg-emerald-600 text-white rounded-full text-xl p-1 flex items-center justify-center">
       <AiOutlineSafetyCertificate />
      </div>
      <h3 class="text-emerald-800 font-semibold text-center text-sm md:text-base">Fast Claims Processing</h3>
    </div>
    
    <div class="absolute bottom-[-10px] left-[50%] translate-x-[-50%] md:bottom-[-20px] md:left-[20%] md:translate-x-0 bg-white rounded-t-xl rounded-br-xl p-4 shadow-lg w-[80%] max-w-[340px]">
      <div class="bg-emerald-600 text-white rounded-full text-xl p-1 w-fit flex items-center justify-center">
        <RiDoubleQuotesL />
      </div>
      <p class="text-gray-600  text-sm">Exceptional service and peace of mind.</p>
      <p class="text-gray-600 font-bold text-sm">Highly recommend!</p>
    </div>
  </div>
</div>


            {/* <div class="bg-[url(/about-image.jpg)] rounded-t-full  bg-cover w-130">
                    
                <div class="flex gap-4 bg-white rounded-xl p-4 shadow-md w-60 h-14 float-end mt-10 ">
                    <AiOutlineSafetyCertificate class="bg-emerald-600 text-white rounded-full text-2xl"/>
                    <h3 class="text-emerald-800 font-semibold">Fast Claims Processing</h3>
                </div>

               

                
                <div class="bg-white rounded-t-4xl rounded-br-4xl p-4 shadow-md w-85 h-25 mt-100 ml-60">
                    <RiDoubleQuotesL  class="bg-emerald-600 text-white rounded-full text-2xl "/>
                    <p class="text-gray-600">Exceptional service and peace of mind.</p>
                       <p class="text-gray-600"> <strong>Highly recommend!</strong>
                    </p>
                </div>
            </div> */}



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