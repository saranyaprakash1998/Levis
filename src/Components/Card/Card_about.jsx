export default function Card({children,data,icon,footer}){
return(
    <div class="rounded-t-lg rounded-br-4xl  bg-white hover:bg-emerald-800">
        <nav class="bg-emerald-600 rounded-full no-underline hover:bg-white">{icon}</nav>

        <h1 class="text-emerald-800 hover:text-white font-semibold  ">{children}</h1>
        <p class="text-gray-500 hover:text-white">{data}</p>
        <a href="#" class="text-emerald-600 text-xl">{footer}</a>
    </div>
)
}