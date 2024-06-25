import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">
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
