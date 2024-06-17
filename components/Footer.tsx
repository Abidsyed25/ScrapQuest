import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bg-gradient-to-r from-blue-500 shadow-md bottom-0 left-0 w-screen text-white py-3 tracking-wider text-center text-sm">
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-6 items-center">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About Us</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          <Link
            href="https://github.com/Abidsyed25/ScrapQuest"
            rel="noopener noreferrer"
            className="text-white font-medium text-sm flex items-center hover:text-blue-400"
          >
            <FaGithub className="w-4 h-4 mr-2" /> Star on Github
          </Link>
          <Link href="/faq" className="hover:text-blue-400">FAQ</Link>
          <Link href="/login" className="hover:text-blue-400">Begin Your Journey</Link>
        </div>
        <h1 className="mt-2">Copyright © 2024, ScrapQuest. All Rights Reserved.</h1>
      </div>
    </div>
  );
}
