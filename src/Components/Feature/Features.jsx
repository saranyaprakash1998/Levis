import DotIcon from "../DotIcon/doticon";
import { GiNotebook } from "react-icons/gi";
import { PiSealPercent } from "react-icons/pi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";

export default function Features(){
    return(
        <div class=" mt-10">
            <div class="text-center flex flex-col items-center max-w-2xl mx-auto ">
                <nav class="flex gap-2 text-emerald-600 text-sm p-3">
                    <DotIcon/>
                    <h1>OUR FEATURE</h1>
                </nav>

                <h1 class="text-emerald-900 text-4xl md:text-4xl">Discover our key <b>insurance features</b></h1>
                <p class="text-gray-600 p-6">Explore the standout features of our insurance plans, designed to comprehensive protection, 
                   flexible options, and exceptional service</p>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 text-center">
                <div class=" flex  flex-col items-center group ">
                    <div>
                    <GiNotebook class=" text-[55px] text-white bg-emerald-600 p-2 m-4  rounded-full  group-hover:bg-emerald-800"/>
                    </div>
                    <div>
                    <h1 class="text-emerald-800 font-semibold text-xl mb-5">Customizable Plans</h1>
                    <p class="text-gray-600">Personalize your coverage your needs and budget, the protection that works best for you. </p>
                    </div>

                </div>

                <div class=" flex  flex-col items-center group ">
                    <div>
                    <PiSealPercent class=" text-[55px] text-white bg-emerald-600 p-2 m-4 rounded-full  group-hover:bg-emerald-800"/>
                    </div>
                    <div>
                    <h1 class="text-emerald-800 font-semibold text-xl mb-5">Multi-Policy Discounts</h1>
                    <p class="text-gray-600">Personalize your coverage your needs and budget, the protection that works best for you. </p>
                    </div>
                </div>

                <div class=" flex  flex-col items-center group ">
                    <div>
                    <MdOutlinePersonalInjury class=" text-[55px] text-white bg-emerald-600 p-2 m-4 rounded-full  group-hover:bg-emerald-800"/>
                    </div>
                    <div>
                    <h1 class="text-emerald-800 font-semibold text-xl mb-5">Accident Forgiveness</h1>
                    <p class="text-gray-600">ersonalize your coverage your needs and budget, the protection that works best for you. </p>
                    </div>
                </div>

                <div class=" flex  flex-col items-center group ">
                    <div>
                    <TbHomeDollar class=" text-[55px] text-white bg-emerald-600 p-2 m-4 rounded-full  group-hover:bg-emerald-800"/>
                    </div>
                    <div>
                    <h1 class="text-emerald-800 font-semibold text-xl mb-5">Home Replacement Cost </h1>
                    <p class="text-gray-600">Personalize your coverage your needs and budget, the protection that works best for you. </p>
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-8 p-12 px-1 text-center mb-10">
                <div>
                    <h1 class="text-emerald-600 text-3xl font-bold">5800+</h1>
                    <p class="text-gray-600">Doctors</p>

                </div>
                    

                <div>
                    <h1 class="text-emerald-600 text-3xl font-bold">1497+</h1>
                    <p class="text-gray-600">Clinics</p>

                </div>

                <div>
                    <h1 class="text-emerald-600 text-3xl font-bold">377+</h1>
                    <p class="text-gray-600">Labs</p>

                </div>

                <div>
                    <h1 class="text-emerald-600 text-3xl font-bold">156+</h1>
                    <p class="text-gray-600">Partner Hospitals</p>

                </div>

                <div >
                    <h1 class="text-emerald-600 text-3xl font-bold">16+</h1>
                    <p class="text-gray-600">Brazilian States</p>

                </div>

            </div>
        </div>
    )
}