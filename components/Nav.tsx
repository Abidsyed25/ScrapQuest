"use client";

import { FaGithub } from "react-icons/fa";
import { Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded className="bg-blue-500 shadow-md">
      <Navbar.Brand href="/">
        <span className=" whitespace-nowrap text-2xl font-semibold dark:text-white">
          ScrapQuest
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Navbar.Toggle className="text-white " />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white text-lg hover:underline ">
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="text-white text-lg hover:underline "
        >
          About us
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          className="text-white text-lg hover:underline "
        >
          Contact
        </Navbar.Link>
        <Navbar.Link
          href="https://github.com/Abidsyed25/ScrapQuest"
          className="text-white text-lg hover:underline flex items-center "
        >
          <FaGithub className="mr-2" />
          <p> Star on Github</p>
        </Navbar.Link>
        <Navbar.Link
          href="/faq"
          className="text-white text-lg hover:underline "
        >
          FAQ
        </Navbar.Link>
        <Navbar.Link
          href="/login"
          className="text-white text-lg hover:underline "
        >
          Begin Your Journey
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
