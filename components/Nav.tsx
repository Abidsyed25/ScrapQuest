"use client";

import { FaHome, FaInfoCircle, FaEnvelope, FaGithub, FaQuestionCircle, FaSignInAlt } from "react-icons/fa";
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
        <Navbar.Link href="/" className="text-white text-lg hover:underline flex items-center">
          <FaHome className="mr-2" />
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-white text-lg hover:underline flex items-center">
          <FaInfoCircle className="mr-2" />
          About us
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-white text-lg hover:underline flex items-center">
          <FaEnvelope className="mr-2" />
          Contact
        </Navbar.Link>
        <Navbar.Link href="https://github.com/Abidsyed25/ScrapQuest" className="text-white text-lg hover:underline flex items-center">
          <FaGithub className="mr-2" />
          Star on Github
        </Navbar.Link>
        <Navbar.Link href="/faq" className="text-white text-lg hover:underline flex items-center">
          <FaQuestionCircle className="mr-2" />
          FAQ
        </Navbar.Link>
        <Navbar.Link href="/login" className="text-white text-lg hover:underline flex items-center">
          <FaSignInAlt className="mr-2" />
          Begin Your Journey
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
