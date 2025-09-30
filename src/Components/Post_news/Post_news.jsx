import DotIcon from "../DotIcon/doticon";
import { SlCalender } from "react-icons/sl";

export default function Post(){
    return(
        <div>

            <div class="text-center flex flex-col  items-center max-w-2xl mx-auto ">
                <nav class="flex gap-2 text-emerald-600 text-sm">
                    <DotIcon/>
                    <h1>POST/NEWS</h1>
                </nav>
                <h1 class="text-emerald-900 text-[40px] ">Our Latest <b>Insurance News</b> and Tips</h1>
                <p class="text-gray-600 mt-4 ">Stay informed with our latest insurance news and tips. From expert advice on coverage to </p>
                   <p class="text-gray-600  "> industry updates, we provide valuable insights to help you.</p> 
            </div>

            <div class="flex flex-col md:flex-row-2 lg:flex-row mt-18 justify-around">
                <div class="bg-[url(post-1.jpg)] bg-cover rounded-t-4xl rounded-br-4xl w-180">
                        {/* <div >
                        <img src="post-1.jpg" alt="" class="rounded-t-4xl rounded-br-4xl w-[600px] h-[400px]"/>
                         </div> */}
                    <div class="text-white px-8 py-8 mt-80">
                        <nav class="flex items-center gap-2  font-bold">
                        <SlCalender />
                        <h1>October 10,2024</h1>
                        </nav>
                        <h1 class="font-bold">The Role of Disability Insurance in Your Financial Plan</h1>
                        <p>Choosing the right health insurance involves comparing </p>
                        <p>premiums, deductibles,…</p>
                        <h1 class="font-bold">Read More</h1>
                    </div>
                   
                    
                </div>

                <div class="mt-2">
                    <div class="mb-10">
                        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img
                                        class="h-48 w-full object-cover md:h-full md:w-48"
                                        src="post-2.jpg"
                                        alt="Modern building architecture"
                                    />
                                </div>
                                <div class="p-8">
                                         <nav class="flex items-center gap-2 font-bold">
                                        <SlCalender />
                                        <h1>October 8,2024</h1>
                                        </nav>
                                        <a href="#" class="mt-1 block text-lg leading-tight font-bold text-teal-800">
                                            How to Choose Right Health Insurance Plan
                                        </a>
                                        <p class="mt-2 text-gray-500">
                                        Choosing the right health insurance involves comparing premiums, deductibles,…
                                        </p>
                                        <h1 class="text-emerald-600 font-bold">Read More</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div>
                        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img
                                        class="h-48 w-full object-cover md:h-full md:w-48"
                                        src="post-3.jpg"
                                        alt="Modern building architecture"
                                    />
                                </div>
                                <div class="p-8">
                                         <nav class="flex items-center gap-2  font-bold">
                                        <SlCalender />
                                        <h1>October 8,2024</h1>
                                        </nav>
                                        <a href="#" class="mt-1 block text-lg leading-tight font-bold text-teal-800">
                                            How to Buy Travel Insurance for International Trips
                                        </a>
                                        <p class="mt-2 text-gray-500">
                                        Choosing the right health insurance involves comparing premiums, deductibles,…
                                        </p>
                                        <h1 class="text-emerald-600 font-bold">Read More</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}