import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Social from "./Social";
import Contact from "./Contact";
import About from "./About";

export function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-blue-500 shadow-md max-w-screen-2xl mt-[-1rem] h-20"
    >
      <NavbarBrand as={Link} href="/" className="pl-9 flex items-center h-full">
        <img
          src="/scrap-logo.png"
          alt="Brand Logo"
          className="w-auto max-h-[8rem] mt-[-1rem] ml-[-1rem]" // Adjusted margin-top to shift the logo down
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <About />
        <Contact />
        <Social />
      </NavbarCollapse>
    </Navbar>
  );
}
