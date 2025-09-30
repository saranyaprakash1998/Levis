import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function FAQ() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      
      <details className="group border-b border-gray-300 rounded-lg overflow-hidden mb-2">
        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg bg-white text-teal-900 group-open:bg-teal-900 group-open:text-white transition-colors duration-300">
          1. What types of insurance do you offer?
          <IoIosArrowDropdownCircle  className="transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 bg-teal-900 text-white">
          <p>
            Our experts are here to help! We assess your unique needs and guide you in selecting a policy that provides the best 
            coverage for your situation.
          </p>
        </div>
      </details>

      
      <details className="group border-b border-gray-300 rounded-lg overflow-hidden mb-2">
        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg bg-white text-teal-900 group-open:bg-teal-900 group-open:text-white transition-colors duration-300">
          2. How do I choose the right insurance plan?
          <IoIosArrowDropdownCircle  className="transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 bg-teal-900 text-white">
          <p>
            Our experts are here to help! We assess your unique needs and guide you in selecting a policy that provides the 
            best coverage for your situation.
          </p>
        </div>
      </details>

      
      <details className="group border-b border-gray-300 rounded-lg overflow-hidden mb-2">
        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg bg-white text-teal-900 group-open:bg-teal-900 group-open:text-white transition-colors duration-300">
          3. What is the process for filing a claim?
          <IoIosArrowDropdownCircle className="transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 bg-teal-900 text-white">
          <p>
            Our experts are here to help! We assess your unique needs and guide you in selecting a policy that provides 
            the best coverage for your situation.
          </p>
        </div>
      </details>

      <details className="group border-b border-gray-300 rounded-lg overflow-hidden mb-2">
        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg bg-white text-teal-900 group-open:bg-teal-900 group-open:text-white transition-colors duration-300">
          4. How is my premium paln calculated?
          <IoIosArrowDropdownCircle className="transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 bg-teal-900 text-white">
          <p>
            Our experts are here to help! We assess your unique needs and guide you in selecting a policy that provides 
            the best coverage for your situation.
          </p>
        </div>
      </details>

      <details className="group border-b border-gray-300 rounded-lg overflow-hidden mb-2">
        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg bg-white text-teal-900 group-open:bg-teal-900 group-open:text-white transition-colors duration-300">
          5. What is the process for insurance calculated
          <IoIosArrowDropdownCircle className="transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 bg-teal-900 text-white">
          <p>
            Our experts are here to help! We assess your unique needs and guide you in selecting a policy that provides the 
            best coverage for your situation.
          </p>
        </div>
      </details>

    </div>
  );
}
