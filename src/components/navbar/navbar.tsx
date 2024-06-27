import { ModeToggle } from "../modeToggle/modeToggle";

export default function NavBar() {

    return (
        <nav className="flex justify-center items-center gap-7 lg:gap-20 top-0 fixed w-full text-sm border-b md:border-none lg:text-base font-semibold py-4 px-3 text-zinc-950 dark:text-white"> 
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/about">About Us</a>
            <a className="hover:underline" href="/login">Login</a>
            <a className="hover:underline" href="/signup">Sign Up</a>
            <ModeToggle />
        </nav>
    );
}