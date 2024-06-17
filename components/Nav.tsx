import Link from "next/link";
import { Navbar, NavbarBrand } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

export function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-blue-500 shadow-md max-w-screen-2xl m-auto"
    >
      <NavbarBrand as={Link} href="/" className="pl-9">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          ScrapQuest
        </span>
      </NavbarBrand>
      <div className="flex space-x-4 ml-auto mr-10">
        <Link href="/" className="text-white text-lg hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-white text-lg hover:underline">
          About Us
        </Link>
        <Link href="/contact" className="text-white text-lg hover:underline">
          Contact
        </Link>
        <Link
          href="https://github.com/Abidsyed25/ScrapQuest"
          className="flex items-center text-white text-lg hover:underline"
        >
          <FaGithub className="mr-2" /> Star on Github
        </Link>
        <Link href="/faq" className="text-white text-lg hover:underline">
          FAQ
        </Link>
        <Link href="/login" className="text-white text-lg hover:underline">
          Begin Your Journey
        </Link>
        
      </div>
    </Navbar>
  );
}
