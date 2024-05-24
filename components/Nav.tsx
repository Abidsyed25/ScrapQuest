"use client";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import {
    NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"  
import Social from "./Social";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export function Nav() 
{
    return (
        <Navbar fluid rounded className="bg-transparent shadow-md max-w-screen-2xl m-auto">

            <NavbarBrand as={Link} href="/" className="pl-9">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">ScrapQuest</span>
            </NavbarBrand>         
            <Social/>

        </Navbar>
    );
}
