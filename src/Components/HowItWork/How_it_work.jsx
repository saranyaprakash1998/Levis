import DotIcon from "../DotIcon/doticon";
import { LiaTapeSolid } from "react-icons/lia";
import { TbNumber1Small } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TbNumber2 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbNumber3 } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { TbNumber4 } from "react-icons/tb";

export default function HowItWork(){
    return(
        <div class="bg-zinc-100 p-6">
            <div class="text-center flex flex-col items-center max-w-2xl mx-auto ">
                <nav class="flex gap-2 text-emerald-600 text-sm p-3">
                    <DotIcon/>
                    <h1>HOW IT WORK</h1>
                </nav>
                <h1 class="text-3xl md:text-4xl text-emerald-900 font-semibold leading-tight">
                    Our insurance process <b> easy steps </b> to get covered</h1>

                <p class="text-gray-600 p-4">Our comprehensive insurance services are designed to provide you with 
                    peace of mind,no matter your needs</p>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-12">

                <div class="group">
                    <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md ">
                        <LiaTapeSolid class="text-emerald-400 text-[40px] mb-5" />
                        <h1 class="text-emerald-800 font-semibold text-xl mb-5">Tailored Solutions</h1>
                        <p class="text-gray-600">Our experts craft a personalized insurance plan that fits your lifestyle.</p>
                    </div>

                    <div>
                    <TbNumber1Small class=" text-[40px] text-white bg-emerald-600 p-2 m-2 ml-25 rounded-full  group-hover:bg-emerald-800"/>
                    </div>

                </div>

                <div class="group" >
                    <div> <TbNumber2 class=" text-[40px] text-white bg-emerald-600 p-2 m-2 ml-25 rounded-full  group-hover:bg-emerald-800"/></div>

                    <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md">
                        <ImProfile class="text-emerald-400 text-[40px] mb-5" />
                        <h1 class="text-emerald-800 font-semibold text-xl mb-5">Easy Enrollment </h1>
                        <p class="text-gray-600 ">We guide you through the simple, hassle-free process of securing your coverage. </p>
                   </div>

                </div>

                <div class="group">

                    <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md ">
                        <MdOutlineSupportAgent  class="text-emerald-400 text-[40px] mb-5" />
                        <h1 class="text-emerald-800 font-semibold text-xl mb-5">Ongoing Support  </h1>
                        <p class="text-gray-600">Enjoy peace of mind with our 24/7 support and assistance whenever you need it.</p>
                    </div>

                    <div><TbNumber3  class=" text-[40px] text-white bg-emerald-600 p-2 m-2 ml-25 rounded-full  group-hover:bg-emerald-800"/></div>

                </div>

                <div class="group">
                    <div><TbNumber4  class=" text-[40px] text-white bg-emerald-600 p-2 m-2 ml-25 rounded-full  group-hover:bg-emerald-800"/></div>

                    <div class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md">
                        <GrNotes  class="text-emerald-400 text-[40px] mb-5" />
                        <h1 class="text-emerald-800 font-semibold text-xl mb-5">Claims&Adjustments </h1>
                        <p class="text-gray-600">Quick, efficient claims handling and flexible policy adjustments to ensure.</p>
                     </div>

                </div>

            </div>

        </div>
    )
}