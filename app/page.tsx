import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="mb-5 text-2xl">Welcome, to Next.Js!</h1>
        <Image src="/next.svg" alt="Next Logo" width={400} height={1000} />
      </div>
    </>
  );
}
