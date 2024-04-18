
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Social from "./Social";

export function Nav() {
    return (
        <Navbar fluid rounded className="bg-transparent shadow-md max-w-screen-2xl m-auto">


            <NavbarBrand as={Link} href="/" className="pl-9">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">ScrapQuest</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>

                <Social/>
            </NavbarCollapse>

        </Navbar>
    );
}
