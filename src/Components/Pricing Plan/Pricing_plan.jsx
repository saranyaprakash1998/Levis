import Button from "../Buttons/Button";
import DotIcon from "../DotIcon/doticon";
import { VscVerified } from "react-icons/vsc";

export default function PricingPlan(){
    return(
        <div class="mt-20">

            <div class="text-center flex flex-col items-center max-w-2xl mx-auto ">
                <nav class="flex gap-2 text-emerald-600 text-sm p-3">
                    <DotIcon/>
                    <h1>PRICING PLAN</h1>
                </nav>
                <h1  class="text-emerald-900 text-3xl md:text-4xl">
                    Insurance <b>pricing plans</b> affordable coverage for every budget</h1>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-12">

                <div  class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md ">

                   <h1 class="rounded-t-lg rounded-br-lg bg-emerald-600 text-white font-semibold px-8 py-3 inline-block">
                    <b class="text-5xl">$19</b>
                    <span class="text-sm">/Per Month</span>
                    </h1>

                    <h1 class="text-teal-900 text-lg font-bold mt-9">Starter Plan</h1>
                     <ol class="mb-9 mt-6">
                        <li class="flex gap-3 py-2 text-teal-800 font-semibold"><VscVerified />Invoices/Estimates </li>
                        <li class="flex gap-3 py-2 text-teal-900 font-semibold"><VscVerified />Online Payments </li>
                        <li class="flex gap-3 py-2 text-teal-900 font-semibold"><VscVerified />Projects and Time Sheet </li>
                     </ol>
                    <Button>Select Policy</Button>
                </div>

                <div  class="bg-teal-900 rounded-t-4xl rounded-br-4xl p-10 shadow-md ">

                    <h1 class="rounded-t-lg rounded-br-lg bg-emerald-600 text-white font-semibold px-8 py-3 inline-block">
                    <b class="text-5xl">$49</b>
                    <span class="text-sm">/Per Month</span>
                    </h1>

                    <h1 class="text-white text-lg font-bold mt-9">Business Plan</h1>
                     <ol class="mb-9 mt-6">
                        <li class="flex gap-3 py-2 text-white font-semibold"><VscVerified />Invoices/Estimates </li>
                        <li class="flex gap-3 py-2 text-white font-semibold"><VscVerified />Online Payments </li>
                        <li class="flex gap-3 py-2 text-white font-semibold"><VscVerified />Projects and Time Sheet </li>
                    </ol>
                    <Button>Select Policy</Button>
                </div>

                <div  class="bg-white rounded-t-4xl rounded-br-4xl p-10 shadow-md ">

                   <h1 class="rounded-t-lg rounded-br-lg bg-emerald-600 text-white font-semibold px-8 py-3 inline-block">
                    <b class="text-5xl">$89</b>
                    <span class="text-sm">/Per Month</span>
                    </h1>

                    <h1 class="text-teal-900 text-lg font-bold mt-9">Premium Custom Plan</h1>
                     <ol class="mb-9 mt-6">
                        <li class="flex gap-3 py-2 text-teal-800 font-semibold"><VscVerified />Invoices/Estimates </li>
                        <li class="flex gap-3 py-2 text-teal-900 font-semibold"><VscVerified />Online Payments </li>
                        <li class="flex gap-3 py-2 text-teal-900 font-semibold"><VscVerified />Projects and Time Sheet </li>
                    </ol>
                    <Button>Select Policy</Button>
                </div>

            </div>


        </div>
    )

}