import React from "react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "./homeicon.png"; // Ensure this path is correct
import aboutImage from "./image.png"; // Add an appropriate image path

const About: React.FC = () => {
  const homeIconStyle: React.CSSProperties = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    width: "2.5rem",
    cursor: "pointer",
  };

  return (
    <div className="relative bg-gray-900 min-h-screen">
      <Nav />
          <Image
            src={homeIcon}
            alt="Home"
            style={homeIconStyle}
            width={50}
            height={50}
            className="mt-14"
          />
      <div className="text-white container mx-auto p-6 max-w-[48rem] bg-slate-800 shadow-lg rounded-lg mt-10 relative">
        <Link href="/" passHref>
        </Link>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-white hover:text-[#8abf83] transition duration-300 ease-in-out">
            About{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded px-2">
              Us
            </span>
          </h1>
          <Image
            src={aboutImage}
            alt="About Us"
            className="rounded-lg mx-auto mb-6 hover:scale-105 transition duration-300 ease-in-out"
            width={500}
            height={300}
          />
        </div>

        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          Welcome to ScrapQuest!
        </h2>
        <p className="mb-6 tewhite leading-relaxed text-center">
          At ScrapQuest, we make data extraction from websites effortless and
          efficient. Our cutting-edge solution is designed to help you quickly
          gather valuable information from any website without the usual hassle
          and complications.
        </p>

        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          Our Mission
        </h2>
        <p className="mb-6 text-white leading-relaxed text-center">
          Our mission is to simplify the process of web scraping, making it
          accessible and straightforward for everyone. Whether you're a business
          looking to gain insights, a researcher needing data for your projects,
          or a developer seeking to integrate web data into your applications,
          ScrapQuest is here to help.
        </p>

        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          What We Do
        </h2>
        <p className="mb-6 text-white leading-relaxed text-center">
          ScrapQuest offers a powerful and intuitive platform for web scraping.
          Our solution allows users to easily and quickly collect data from any
          website. We focus on providing a seamless experience that minimizes
          the technical complexities of data extraction, enabling users to
          obtain the information they need with ease.
        </p>

        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          Contact Us
        </h2>
        <p className="mb-6 text-white leading-relaxed text-center">
          Have questions or need support? Feel free to reach out to our team.
          We're here to help you get the most out of ScrapQuest.
        </p>

        <div className="text-center mb-6">
          <p className="mb-2 text-white">
            Email:{" "}
            <a
              href="mailto:support@scrapquest.com"
              className="text-blue-300 underline hover:text-blue-800 transition duration-300 ease-in-out"
            >
              support@scrapquest.com
            </a>
          </p>
          <p className="text-white">
            Phone:{" "}
            <a
              href="tel:+123456789"
              className="text-blue-300 underline hover:text-blue-800 transition duration-300 ease-in-out"
            >
              +1 234 567 89
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
