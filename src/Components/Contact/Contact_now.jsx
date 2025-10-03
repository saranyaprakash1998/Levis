

export default function ContactNow(){
    return(
        <div class="flex flex-col md:flex-row-2 lg:flex-row justify-around bg-teal-900 p-6">

            <div class="mt-10 ">
                <img src="cta-box-image.jpg" alt="" class="h-105 rounded-t-4xl rounded-br-4xl mb-10" />
            </div>

            <div class="mt-10 w-full md:w-1/2 p-4 md:p-0 mt-10 ">
                <h1 class=" text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight">
                    What matters most get your free insurance <b>Quote today!</b></h1>

                <p className="text-white mt-8 mb-8 ">Whether it’s your home, health, car, or business, we’ve got you covered. Get your 
                free insurance quote today and discover the peace of mind that comes with reliable,
                comprehensive protection tailored to your needs.</p>
               
                <button class="rounded-t-lg rounded-br-lg bg-white text-teal-800 font-bold p-3 mt-12">Contact Now</button>
              
            </div>

        </div>
    )
}