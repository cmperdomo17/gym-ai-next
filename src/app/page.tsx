import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-white">
        Welcome to GymAi
      </h1>
      <Image
        src={"/logo.png"}
        alt="GymAi Logo"
        width={200}
        height={200}
      />
    </>
  );
}
