export default function ContactNow(){
    return(
        
        
        <div className="flex flex-col md:flex-row justify-between items-center bg-teal-900 p-6 py-20  ">

            
            <div className="w-full md:w-5/12 lg:w-4/12 mb-8 md:mb-0">
               
                <img 
                    src="cta-box-image.jpg" 
                    alt="Image showing insurance benefits" 
                    className="w-full h-auto object-cover rounded-t-3xl rounded-br-3xl" 
                />
            </div>

            
            <div className="w-full md:w-6/12 lg:w-7/12 p-0 md:pl-8">
                
               
                <h1 className="text-3xl lg:text-5xl text-white  leading-tight mb-4">
                    What matters most, get your free insurance <b>Quote today!</b>
                </h1>

              
                <p className="text-teal-50 mt-6 mb-8 lg:text-lg">
                    Whether it’s your home, health, car, or business, we’ve got you covered. Get your 
                    free insurance quote today and discover the peace of mind that comes with reliable,
                    comprehensive protection tailored to your needs.
                </p>
               
                <button className="rounded-t-xl rounded-br-xl bg-white text-teal-800 font-bold px-8 py-4 text-lg transition duration-300 hover:bg-teal-800 hover:text-white">
                    Contact Now
                </button>
            </div>

        </div>
    )
}