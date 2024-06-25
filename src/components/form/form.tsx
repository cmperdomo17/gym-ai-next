import Input from "../input/input";
import Button from "../button/button";
import Link from "next/link";

export default function Form( { isLogin }: Readonly<{ isLogin: boolean }>) {
    return (
        <form className="flex flex-col gap-12 items-center">
            <h1 className="text-4xl text-center font-bold">Gym AI</h1>
            <div className="flex flex-col gap-7">
                <Input label="Username" />
                { isLogin ? 
                    <Input label="Password" type="password" /> :
                    <>
                        <Input label="Email" />
                        <Input label="Password" type="password" />
                    </>
                }
            </div>
            { isLogin ? 
                <Link href="/home">
                    <Button text="Login" />     
                </Link> :
                <Link href="/login">
                    <Button text="Sign Up" />     
                </Link>
            }
        </form>
    );
}