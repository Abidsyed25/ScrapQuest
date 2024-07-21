"use client";

import { FaHome, FaInfoCircle, FaEnvelope, FaGithub, FaQuestionCircle, FaSignInAlt, FaPenSquare, FaShieldAlt } from "react-icons/fa";
import { Navbar } from "flowbite-react";
import GoogleTranslate from "@/app/GoogleTranslate";

export function Nav() {
  return (
    <Navbar fluid rounded className="bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(2,41,61)] to-[rgb(2,6,23)]">
      <Navbar.Brand href="/">
        <span className="whitespace-nowrap text-2xl font-semibold text-white">
          ScrapQuest
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle className="text-white" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaHome className="mr-2" />
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaInfoCircle className="mr-2" />
          About Us
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaEnvelope className="mr-2" />
          Contact
        </Navbar.Link>
        <Navbar.Link href="https://github.com/Abidsyed25/ScrapQuest" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaGithub className="mr-2" />
          Star on Github
        </Navbar.Link>
        <Navbar.Link href="/faq" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaQuestionCircle className="mr-2" />
          FAQ
        </Navbar.Link>
        <Navbar.Link href="/termsconditions" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaPenSquare className="mr-2" />
          Terms & Conditions
        </Navbar.Link>
        <Navbar.Link href="/privacypolicy" className="text-white text-lg md:text-sm flex items-center transform hover:scale-110 transition-transform duration-200 hover:text-blue-300">
          <FaShieldAlt className="mr-2" />
          Privacy Policy
        </Navbar.Link>
        <Navbar.Link href="/login" className="text-white text-lg md:text-sm hover:underline flex items-center">
          <FaSignInAlt className="mr-2" />
          Begin Your Journey
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
