import { SlEnvolopeLetter } from "react-icons/sl";
import Button from "../Buttons/Button";
import DotIcon from "../DotIcon/doticon";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer(){
    return(
        <div class="bg-teal-900 ">
            <div class="flex flex-col md:flex-row-2  lg:flex-row gap-8 justify-around p-8  mt-10 ">
                <div class="flex items-center gap-6 text-white font-bold text-2xl">
                    <SlEnvolopeLetter />
                    <h1>Stay informed with our newsletter</h1>
                </div>
                <div class="flex gap-6 ">
                    <input type="email" placeholder="Enter youe email" class="bg-white rounded-t-xl rounded-br-xl p-4 w-90 h-13" />
                    <Button>Subscribe</Button>
                </div>
            </div>

            <div class="flex flex-col md:flex-row-2 lg:flex-row gap-6 justify-around px-13 py-10 mt-10">
                <div>
                     <img src="footer-logo.svg" alt="" />
                     <p class="text-white mt-4">We are committed to providing</p>
                     <p class="text-white">personalized insurance solutions.</p>

                </div>

                <div class="flex  flex-col md:flex-row lg:flex-row gap-8">

                <div>
                    <h1 class="text-white font-bold text-lg">Quick Links</h1>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Home</h3>
                        </nav>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >About Us</h3>
                        </nav>
                       
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Services</h3>
                        </nav>
                        <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Contact Us</h3>
                        </nav>
                </div>

                 <div>
                     <h1 class="text-white font-bold text-lg">Usefull Links</h1>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Support</h3>
                        </nav>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Serivces</h3>
                        </nav>
                       
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Terms & Conditions</h3>
                        </nav>
                        <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Privacy & Policy</h3>
                        </nav>
                    </div>
                    
                <div>
                    <h1 class="text-white font-bold text-lg">Our Services</h1>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Health Insurance</h3>
                        </nav>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Life Insurance</h3>
                        </nav>
                       
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Business insurance</h3>
                        </nav>
                        <nav  class="flex items-center gap-2 group text-white">
                            <DotIcon/>
                            <h3 >Car Insurance</h3>
                        </nav>

                </div>

                <div>
                    <h1 class="text-white font-bold text-lg">Get In Touch</h1>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >+01 789 852 654</h3>
                        </nav>
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >support@domain.com</h3>
                        </nav>
                       
                      <nav  class="flex items-center gap-2 hover:text-emerald-400 text-white">
                            <DotIcon/>
                            <h3 >Insurance way, suite 100, Metropolis, NY 10001, USA</h3>
                        </nav>
                        

                </div>

                </div>

                

            </div>

            <div class="flex flex-col items-center md:flex-row-2 lg:flex-row justify-between px-4  ">
                <div>
                <p class="text-white px-10 py-10 text-lg">Copyright &copy; 2024 All Right Reserved.</p>
                </div>

                <div class=" flex gap-4 text-white text-2xl mb-6 ">
                    <FaFacebookF class="hover:text-emerald-400"/>
                    <FaXTwitter class="hover:text-emerald-400" />
                    <FaInstagram  class="hover:text-emerald-400"/>
                    <FaLinkedinIn  class="hover:text-emerald-400"/>
                </div>
            </div>

        </div>
    )
}