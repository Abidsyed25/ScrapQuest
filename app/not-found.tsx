import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global flex flex-col justify-center items-center h-[90vh]">
      <img src="/404.png" alt="404 not found picture" className="max:w-1/4 sm:w-2/5" />
      <Link href="/" className="text-2xl font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">Go Home</Link>
    </div>
  );
}