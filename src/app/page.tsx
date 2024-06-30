import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl font-bold">
          Welcome to GymAi
        </h1>
        <p className="text-lg">
          <strong>GymAi:</strong> Your Personalized Fitness Trainer with <strong>Ai</strong>
        </p>
      </div>
      {/* <Image
        src={"/logo.png"}
        alt="GymAi Logo"
        width={200}
        height={200}
      /> */}
    </>
  );
}
