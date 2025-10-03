import Button from "../Buttons/Button";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { RiDoubleQuotesL } from "react-icons/ri";
import DotIcon from "../DotIcon/doticon";

export default function AboutUs() {
    return (
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-12 gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto">


            <div className="relative w-full md:w-1/2 flex justify-center">
                
                <div className="bg-[url('/about-image.jpg')] bg-center bg-cover rounded-t-[50%] w-full max-w-[520px] relative h-[400px] md:h-[600px] p-4">

                    
                    <div className="absolute top-[10%] right-[50%] translate-x-[50%] lg:top-[10%] lg:right-0 lg:translate-x-0 flex gap-2 bg-white rounded-xl p-3 shadow-lg w-fit">
                        <div className="bg-emerald-600 text-white rounded-full text-xl p-1 flex items-center justify-center">
                            <AiOutlineSafetyCertificate />
                        </div>
                        <h3 className="text-emerald-800 font-semibold text-sm md:text-base">Fast Claims Processing</h3>
                    </div>

                    
                    <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] md:bottom-[-20px] md:left-[20%] md:translate-x-0 bg-white rounded-t-3xl rounded-br-3xl p-4 shadow-xl w-[90%] max-w-[340px]">
                        <div className="bg-emerald-600 text-white rounded-full text-xl p-1 w-fit flex items-center justify-center">
                            <RiDoubleQuotesL />
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">Exceptional service and peace of mind.</p>
                        <p className="text-gray-600 font-bold text-sm">Highly recommend!</p>
                    </div>
                </div>
            </div>

           
            <div className="w-full md:w-1/2 p-4 md:p-0">
                
                <nav className="flex items-center gap-2 text-emerald-600 text-sm p-3 pl-0">
                    <DotIcon />
                    <h4>ABOUT US</h4>
                </nav>

                
                <h1 className="text-3xl md:text-4xl text-emerald-900 font-semibold leading-tight">
                    Comprehensive <b className="font-extrabold">insurance</b> <br />
                    <b className="font-extrabold">solutions</b> for every need
                </h1>
                <br />  

                
                <div className="text-gray-600 mt-4 space-y-1">
                    <p>We offer a range of plans tailored to meet your unique needs. Let us help you find
                    the right protection, so you can live with peace of mind.</p>
                </div>

                <div className="flex flex-col xl:flex-row mt-8 justify-between xl:gap-10">
                   
                    <div>
                        <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600" />
                         <h1 class="flex gap-3 py-2 font-semibold text-teal-800">Customer-Centric Approach</h1>
                        </div>
                         <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600" />
                         <h1 class="flex gap-3 py-2 font-semibold text-teal-800">Transparent Communication</h1>
                        </div>
                         <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600" />
                         <h1 class="flex gap-3 py-2 font-semibold text-teal-800">365 / 24x7 Quick Supports</h1>
                        </div>
                         <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600" />
                         <h1 class="flex gap-3 py-2 font-semibold text-teal-800 ">Critical Illness Insurance</h1>
                        </div>

                       <br />
                        <Button>More About</Button>
                        <br />
                    </div>

                    <div class="rounded-t-3xl rounded-br-3xl bg-zinc-100 p-6 flex flex-col  justify-center gap-6 w-60 max-w-xs xl:ml:auto">
                        <div>
                            <h1 className="text-emerald-600 text-4xl font-extrabold">100%</h1>
                            <h1 className="text-gray-600 text-base">Success Rate</h1>

                        </div>

                        <div>
                             <h1 className="text-emerald-600 text-4xl font-extrabold">3256+</h1>
                            <h1 className="text-gray-600 text-base">Satisfied Clients</h1>
                        </div>
                    </div>

                    
                    
                </div>

            </div>
        </div>
    );
}