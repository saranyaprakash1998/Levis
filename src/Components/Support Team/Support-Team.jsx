import DotIcon from "../DotIcon/doticon";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

export default function SupportTeam(){
    return(

        <div class="bg-zinc-100 mt-20 min-h-165 md:px-12">

            <div class="text-center flex flex-col items-center max-w-2xl mx-auto ">
                <nav  class="flex gap-2 text-emerald-600 text-sm p-3 mt-25">
                    <DotIcon/>
                    <h1>OUR SUPPORT TEAM</h1>
                </nav>
                <h1  class="text-emerald-900 text-[40px] mb-6">We're <b>here to help,</b> 24/7.</h1>
                <p class="text-gray-600">Explore the standout features of our insurance plans, designed to offer you comprehensive </p>
                <p class="text-gray-600">protection, flexible options, and exceptional service</p>
            </div>

            <div class="mt-3 flex overflow-hidden py-10 sm:space-x-2 md:space-x-4 lg:-space-x-5 items-center justify-center">
                <img src="support-team-img-1.jpg" alt="Team member 1" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-2.jpg" alt="Team member 2" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-3.jpg" alt="Team member 3" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-4.jpg" alt="Team member 4" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-5.jpg" alt="Team member 5" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-6.jpg" alt="Team member 6" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-7.jpg" alt="Team member 7" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                <img src="support-team-img-8.jpg" alt="Team member 8" class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </div>



            <div class="flex flex-col sm:flex-row justify-center items-center gap-16 mt-10">
  

                <div class="flex items-center gap-4 group">

                    <div>
                        <p class="text-gray-600">Call Us Now:</p>
                        <p class="text-teal-900 text-lg font-bold">+01 788 852 684</p>
                    </div>

                    <div>
                    <BiPhoneCall class="text-[50px] text-white bg-emerald-600 p-3 rounded-full group-hover:bg-emerald-800" />
                    </div>
                </div>

 
                <div class="h-12 w-px bg-gray-300 hidden sm:block"></div>

  
                <div class="flex items-center gap-4 group">
                    <div>
                         <TfiEmail class="text-[50px]  text-white bg-emerald-600 p-3 rounded-full group-hover:bg-emerald-800" />
                    </div>
                    <div>
                        <p class="text-gray-600">Email Us:</p>
                        <p class="text-teal-900 text-lg font-bold">support@example.com</p>
                     </div>
                </div>
  
            </div>

        </div>
    )

}