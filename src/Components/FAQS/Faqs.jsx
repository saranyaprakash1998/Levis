import DotIcon from "../DotIcon/doticon";
import { VscVerified } from "react-icons/vsc";
import FAQItem from "./Faqanswe";

export default function Faqs() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-20 px-4 md:px-10 lg:px-20">
      
      <div className="w-full lg:w-1/2 p-4">
        <nav className="flex gap-2 text-emerald-600 text-sm p-3 mt-10 md:mt-20">
          <DotIcon />
          <h1>FAQS</h1>
        </nav>

        <h1 className="text-emerald-900 text-3xl md:text-4xl mb-6">
          Frequently <b>asked</b> questions
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Explore our Frequently Asked Questions for quick answers on policies,
          claims, and coverage — helping you make informed insurance decisions.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <div className="flex items-center gap-3">
              <VscVerified className="text-emerald-600 text-xl" />
              <h1 className="font-bold text-teal-800 text-lg">
                20+ Years Of Experience
              </h1>
            </div>
            <p className="text-gray-600 px-6 mt-2">
              In the new era of technology, we look to the future with certainty
              and pride — that’s why so many trust us.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <VscVerified className="text-emerald-600 text-xl" />
              <h1 className="font-bold text-teal-800 text-lg">
                24/7 Support Available
              </h1>
            </div>
            <p className="text-gray-600 px-6 mt-2">
              Our dedicated support team is always available to assist you,
              anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 mt-12 lg:mt-28">
        <FAQItem />
      </div>
    </div>
  );
}
