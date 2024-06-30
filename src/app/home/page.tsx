export default function Home() {
    return (
        <div className="flex flex-col gap-10 max-w-96 items-center ">
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="text-lg">Welcome user: <span className="font-bold">User</span></p>
            <p className="text-lg">Are you ready to start your fitness journey?</p>
        </div>
    );
}