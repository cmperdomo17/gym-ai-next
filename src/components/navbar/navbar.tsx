import { ModeToggle } from "../modeToggle/modeToggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function NavBar() {
    return (
        <nav className="flex justify-center items-center gap-7 lg:gap-20 top-0 fixed w-full text-sm lg:text-base font-semibold p-3"> 

            <a className="hidden md:block hover:underline" href="/">Home</a>
            <a className="hidden md:block hover:underline" href="/about">About Us</a>
            <a className="hidden md:block hover:underline" href="/login">Login</a>
            <a className="hidden md:block hover:underline" href="/signup">Sign Up</a>
            
            <div className="md:hidden flex justify-center items-center">
                <Sheet>
                <SheetTrigger> 
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>    
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className="flex flex-col gap-7 pt-12">
                        <a className="hover:underline" href="/">Home</a>
                        <a className="hover:underline" href="/about">About Us</a>
                        <a className="hover:underline" href="/login">Login</a>
                        <a className="hover:underline" href="/signup">Sign Up</a>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>
            
            <ModeToggle />
        </nav>
    );
}