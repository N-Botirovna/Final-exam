export default function SubmitButton({ title, type, onClick }) {
    return (
        <button type={type || "button"} className="py-[10px] my-5 text-lg font-medium text-white w-full bg-slate-700 rounded font-bold mb-10 text-[white] 
         transition-all" onClick={onClick || ''} >
            {title}
        </button>
    )
}