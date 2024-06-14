import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Social from "./Social";
import Contact from "./Contact";
import Login from "./Login";
import About from "./About";


export function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-blue-500 shadow-md max-w-screen-2xl m-auto"
    >
      <NavbarBrand as={Link} href="/" className="pl-9">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          ScrapQuest
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <About />
        <Contact />
        <Login />
        <Social />
      </NavbarCollapse>
    </Navbar>
  );
}
