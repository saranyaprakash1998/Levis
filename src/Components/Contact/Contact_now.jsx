

export default function ContactNow(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row justify-around bg-teal-900">

            <div class="py-28 px-14">
                <img src="cta-box-image.jpg" alt="" class="h-105 rounded-t-4xl rounded-br-4xl " />
            </div>

            <div class="py-40">
                <h1 class="text-white text-[40px]">What matters most get your</h1>
                <h1 class="text-white text-[40px]">free insurance <b>Quote today!</b></h1>
                <p class="text-white mt-10">Whether it’s your home, health, car, or business, we’ve got you covered. Get your </p> 
                <p class="text-white ">free insurance quote today and discover the peace of mind that comes with reliable, </p> 
                <p class="text-white ">comprehensive protection tailored to your needs.</p>
               
                <button class="rounded-t-lg rounded-br-lg bg-white text-teal-800 font-bold p-3 mt-12">Contact Now</button>
              
            </div>

        </div>
    )
}