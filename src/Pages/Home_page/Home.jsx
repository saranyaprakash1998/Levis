import Button from "../../Components/Buttons/Button";
import Icons from "./Icons";
// import bannerimage from "../../assets/"


export default function Home(){
    return(
        <div>

        <div class="bg-[url(/famimg.png)] bg-fixed  bg-cover text-white px-6 md:px-24 py-16 md:py-30">
            <h1 class="text-3xl md:text-5xl mb-5 ">Comprehensive <b>insurance soulutions </b>for every stage of life</h1>
            
            <p class="text-sm sm:text-lg md:text-lg max-w-2xl ">we offer a range of plans tailored to meet your unique needs.Let us help you find
            the right protection, so you can live with peace of mind.</p>
            <br /><br />

            <nav class="flex gap-10">
            <Button>Get Free Quote</Button>
            <Button>Get Free Quote</Button>
            </nav>
            
            <Icons/>
        </div>

        </div>
    )
}