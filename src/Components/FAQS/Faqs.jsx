import DotIcon from "../DotIcon/doticon";
import { VscVerified } from "react-icons/vsc";
import FAQItem from "./Faqanswe";

export default function Faqs(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row justify-around mb-20">
            <div >
                <nav class="flex  gap-2 text-emerald-600 text-sm p-3 mt-20">
                    <DotIcon/>
                    <h1>FAQS</h1>
                </nav>
                <h1 class="text-emerald-900 text-[40px] mb-6">Frequently <b>asked</b> questions</h1>
                <p class="text-gray-600">Explore our Frequently Asked Questions for quick answers on policies, claims, and </p>
                <p class="text-gray-600">coverage, helping you make informed insurance decisions.</p>

                <div class="mt-10">
                    <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600" />
                         <h1 class="flex gap-3 py-2 font-bold text-teal-800">20+ Years Of Experience</h1>
                    </div>
                    <div>
                    <p class="text-gray-600 px-6 mt-3">In the new era of technology we look in the future with certainly and pride,</p>
                    <p class=" text-gray-600 px-6"> that's why so.</p>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="flex items-center gap-3">
                        <VscVerified class="text-emerald-600 " />
                        <h1  class="flex gap-3 py-2 font-bold text-teal-800">24/7 Support Available</h1>
                    </div>
                    <div>
                    <p class="text-gray-600 px-6 mt-3">In the new era of technology we look in the future with certainly and pride,</p>
                    <p class=" text-gray-600 px-6"> that's why so.</p>
                    </div>

                </div>

            </div>

            <div class="mt-28">
                <FAQItem/>

            </div>





        </div>
    )

}