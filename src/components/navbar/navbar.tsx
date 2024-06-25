export default function NavBar() {
    return (
        <nav className="flex bg-neutral-950 justify-center gap-7 lg:gap-20 top-0 fixed w-full text-lg text-white font-semibold p-3 border-b border-white"> 
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/about">About Us</a>
            <a className="hover:underline" href="/login">Login</a>
            <a className="hover:underline" href="/signup">Sign Up</a>
        </nav>
    );
}