 import Button from "../Buttons/Button"


 export default function Header(){
    return (
    <div>
       <div class="flex justify-between py-6 px-7 ">
        <img src="logo.png" alt="" />
        <nav class="flex gap-15 ">
        <a href="" class="text-emerald-800 hover:text-emerald-600 font-semibold">Home</a>
        <a href="" class="text-emerald-800 hover:text-emerald-600 font-semibold">About Us</a>
        <a href="" class="text-emerald-800 hover:text-emerald-600 font-semibold">Services</a>
        <a href="" class="text-emerald-800 hover:text-emerald-600 font-semibold">Pages</a>
        <a href="" class="text-emerald-800 hover:text-emerald-600 font-semibold">Contact Us</a>
       
       <Button>Get A Quote</Button>
        </nav>
        
       </div>

    </div>
    )
}