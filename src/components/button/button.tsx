import ButtonProps from "@/models/ButtonProps";
// import "./button.css";

export default function Button({ text, onClick }: ButtonProps){
    return (
        <button 
            className="relative w-52 text-white dark:text-zinc-950 bg-zinc-800 dark:bg-gray-200 overflow-hidden text-sm font-bold py-2 rounded-full border border-gray-200 uppercase hover:dark:shadow-[0_0_20px_1px_#fcf9f2a2] hover:shadow-[0_0_20px_1px_#494949] transition-all duration-500"
            onClick={ onClick }
        >
            { text }
        </button>
    );
}