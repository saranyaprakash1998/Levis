import DotIcon from "../DotIcon/doticon";
import { SlCalender } from "react-icons/sl";

export default function Post() {
  return (
    <div>
     
      <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
        <nav className="flex gap-2 text-emerald-600 text-sm">
          <DotIcon />
          <h1>POST/NEWS</h1>
        </nav>
        <h1 className="text-emerald-900 text-[40px]">
          Our Latest <b>Insurance News</b> and Tips
        </h1>
        <p className="text-gray-600 mt-4">
          Stay informed with our latest insurance news and tips. From expert advice on coverage to
          industry updates, we provide valuable insights to help you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-18 justify-center gap-10 px-6 lg:px-16">
        
        <div className="bg-[url(/post-1.jpg)] bg-cover bg-center rounded-t-4xl rounded-br-4xl w-full md:w-[90%] lg:w-[45%] h-[500px] flex flex-col justify-end">
          <div className="text-white px-8 py-8 bg-black/40 rounded-b-4xl">
            <nav className="flex items-center gap-2 font-bold">
              <SlCalender />
              <h1>October 10, 2024</h1>
            </nav>
            <h1 className="font-bold mt-2 text-xl">
              The Role of Disability Insurance in Your Financial Plan
            </h1>
            <p className="text-sm">
              Choosing the right health insurance involves comparing premiums, deductibles,…
            </p>
            <h1 className="font-bold mt-2">Read More</h1>
          </div>
        </div>

       
        <div className="flex flex-col justify-between w-full md:w-[90%] lg:w-[45%] gap-8">
         
          <div className="mx-auto w-full overflow-hidden rounded-t-4xl rounded-br-4xl bg-white shadow-md flex flex-col md:flex-row">
            <img
              className="h-48 w-full md:h-full md:w-48 object-cover"
              src="post-2.jpg"
              alt="Post 2"
            />
            <div className="p-6 flex flex-col justify-between">
              <nav className="flex items-center gap-2 font-bold">
                <SlCalender />
                <h1>October 8, 2024</h1>
              </nav>
              <a
                href="#"
                className="mt-2 block text-lg leading-tight font-bold text-teal-800"
              >
                How to Choose Right Health Insurance Plan
              </a>
              <p className="mt-2 text-gray-500 text-sm">
                Choosing the right health insurance involves comparing premiums, deductibles,…
              </p>
              <h1 className="text-emerald-600 font-bold mt-2">Read More</h1>
            </div>
          </div>

          
          <div className="mx-auto w-full overflow-hidden rounded-t-4xl rounded-br-4xl bg-white shadow-md flex flex-col md:flex-row">
            <img
              className="h-48 w-full md:h-full md:w-48 object-cover"
              src="post-3.jpg"
              alt="Post 3"
            />
            <div className="p-6 flex flex-col justify-between">
              <nav className="flex items-center gap-2 font-bold">
                <SlCalender />
                <h1>October 8, 2024</h1>
              </nav>
              <a
                href="#"
                className="mt-2 block text-lg leading-tight font-bold text-teal-800"
              >
                How to Buy Travel Insurance for International Trips
              </a>
              <p className="mt-2 text-gray-500 text-sm">
                Choosing the right health insurance involves comparing premiums, deductibles,…
              </p>
              <h1 className="text-emerald-600 font-bold mt-2">Read More</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
