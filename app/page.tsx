import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="mb-6 h1-bold">Welcome, to Next.Js!</h1>
        <Image src="/next.svg" alt="Next Logo" width={400} height={1000} />
      </div>
    </>
  );
}
