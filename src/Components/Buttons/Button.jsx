export default function Button({children,onClick}){
    return(
        <div>
            <button class="rounded-t-lg rounded-br-lg bg-emerald-600 text-white font-semibold p-3 hover:bg-emerald-800">
                {children}</button>
        </div>
    )
}