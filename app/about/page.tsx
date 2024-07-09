import React from 'react';
import { Nav } from "@/components/Nav";
import Footer from '@/components/Footer';
import Link from "next/link";
import Image from "next/image";
import homeIcon from './homeicon.png'; // Ensure this path is correct

const About: React.FC = () => {
  const homeIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'rem', // Adjust as needed for positioning
    left: '1rem', // Adjust as needed for positioning
    width: '2.5rem',
    cursor: 'pointer'
  };

  return (
    <div className="relative">
      <Nav />
      <div className="container mx-auto p-6 max-w-[48rem]">
        <Link href="/" passHref>
          <Image src={homeIcon} alt="Home" style={homeIconStyle} width={50} height={50} />
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-center">About <span className="bg-[#8abf83] rounded px-2">Us</span></h1>

        <h2 className="text-2xl text-center font-semibold mb-4">Welcome to ScrapQuest!</h2>
        <p className="mb-6">
          At ScrapQuest, we make data extraction from websites effortless and efficient. Our cutting-edge solution is designed to help you quickly gather valuable information from any website without the usual hassle and complications.
        </p>

        <h2 className="text-2xl text-center font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to simplify the process of web scraping, making it accessible and straightforward for everyone. Whether you're a business looking to gain insights, a researcher needing data for your projects, or a developer seeking to integrate web data into your applications, ScrapQuest is here to help.
        </p>

        <h2 className="text-2xl text-center font-semibold mb-4">What We Do</h2>
        <p className="mb-6">
          ScrapQuest offers a powerful and intuitive platform for web scraping. Our solution allows users to easily and quickly collect data from any website. We focus on providing a seamless experience that minimizes the technical complexities of data extraction, enabling users to obtain the information they need with ease.
        </p>

        <h2 className="text-center text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          Have questions or need support? Feel free to reach out to our team. We're here to help you get the most out of ScrapQuest.
        </p>

        <div className="text-center">
          <p>Email: <a href="mailto:support@scrapquest.com" className="text-blue-600">support@scrapquest.com</a></p>
          <p>Phone: <a href="tel:+123456789" className="text-blue-600">+1 234 567 89</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
