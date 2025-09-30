import AboutUs from "./Components/Aboutus/About_us";
import ContactNow from "./Components/Contact/Contact_now";
import Faqs from "./Components/FAQS/Faqs";
import Features from "./Components/Feature/Features";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HowItWork from "./Components/HowItWork/How_it_work";
import Post from "./Components/Post_news/Post_news";
import PricingPlan from "./Components/Pricing Plan/Pricing_plan";
import Services from "./Components/Services/Services";
import SupportTeam from "./Components/Support Team/Support-Team";
import Testimonial from "./Components/Testimonials/Test_monial";
import WhyChoose from "./Components/Why_choose_us/Why_choose";
import Home from "./Pages/Home_page/Home";

export default function App(){
  return(
    <>
    <Header/>
    <Home/>
    <AboutUs/>
    <Services/>
    <WhyChoose/>
    <HowItWork/>
    <Features/>
    <ContactNow/>
    <PricingPlan/>
    <SupportTeam/>
    <Faqs/>
    <Testimonial/>
    <Post/>
    <Footer/>

    </>
  )
}