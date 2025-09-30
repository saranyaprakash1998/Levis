import { GrUserSettings } from "react-icons/gr";
import { GrUserManager } from "react-icons/gr";


export default function Icons() {
  return (
    <div>
       <nav class="flex gap-10 mt-10 ">

            <div class="flex gap-4 group">

           <a href="" class="mx-[5px] text-[20px] w-10 h-10 text-white bg-emerald-600 p-2 rounded-full no-underline   group-hover:bg-emerald-800">
            <GrUserSettings />
            </a>
            <p>Expert advice from <br />knowledgeable <b>professionals</b></p>
            </div>

            <div class="flex gap-4 group ">
               <a href="" class="mx-[5px] text-[20px] w-10 h-10 text-white bg-emerald-600 p-2 rounded-full no-underline   group-hover:bg-emerald-800">
                <GrUserManager />
               </a>
                <p>Quick and hassle-free claims <br /> with <b>24/7 support.</b></p>
            </div>
            
            </nav>
    </div>
  );
}
