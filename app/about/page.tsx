import React from "react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "./homeicon.png"; // Ensure this path is correct
import aboutImage from "./image.png"; // Add an appropriate image path
import welcomeImage from "./welcomeimage.png"; // Add an appropriate image path

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
      <Link href="/" passHref>
        <Image
          src={homeIcon}
          alt="Home"
          style={homeIconStyle}
          width={50}
          height={50}
          className="mt-14 hover:scale-110 transition-transform duration-300"
        />
      </Link>
      <div className="text-white container mx-auto p-6 max-w-[48rem] bg-slate-800 shadow-lg rounded-lg mt-10 relative">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-center text-white hover:text-[#8abf83] transition duration-300 ease-in-out">
            About{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded px-2 py-1 inline-block transform hover:scale-110 transition-transform duration-300">
              Us
            </span>
          </h1>
          <Image
            src={aboutImage}
            alt="About Us"
            className="rounded-lg mx-auto mb-6 hover:scale-105 transition-transform duration-300 ease-in-out"
            width={500}
            height={300}
          />
        </div>

        <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-inner">
          <div className="relative z-10">
            <h2 className="text-3xl text-center font-semibold mb-4 text-white animate-pulse">
              Welcome to ScrapQuest!
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed text-center">
              At ScrapQuest, we make data extraction from websites effortless
              and efficient. Our cutting-edge solution is designed to help you
              quickly gather valuable information from any website without the
              usual hassle and complications.
            </p>
          </div>
        </div>

        <h2 className="text-3xl text-center font-semibold mb-4 text-white">
          Our Mission
        </h2>
        <ul className="list-none mb-6 text-gray-300 leading-relaxed text-center space-y-4">
          <li className="flex items-start space-x-2">
            <span className="text-green-400">✓</span>
            <span>Simplify web scraping for everyone.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-400">✓</span>
            <span>Provide accessible and straightforward solutions.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-400">✓</span>
            <span>Support businesses, researchers, and developers.</span>
          </li>
        </ul>

        <h2 className="text-3xl text-center font-semibold mb-4 text-white">
          What We Do
        </h2>
        <ul className="list-none mb-6 text-gray-300 leading-relaxed text-center space-y-4">
          <li className="flex items-start space-x-2">
            <span className="text-blue-400">✔</span>
            <span>Offer a powerful web scraping platform.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-400">✔</span>
            <span>Enable easy and quick data collection.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-400">✔</span>
            <span>Provide a seamless user experience.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-400">✔</span>
            <span>Minimize technical complexities.</span>
          </li>
        </ul>

        <h2 className="text-3xl text-center font-semibold mb-4 text-white">
          Contact Us
        </h2>
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-inner text-center">
          <p className="mb-4 text-white text-lg">
            Have questions or need support? Feel free to reach out to our team.
            We're here to help you get the most out of ScrapQuest.
          </p>
          <p className="mb-4 text-gray-300 text-lg">
            Email:{" "}
            <a
              href="mailto:support@scrapquest.com"
              className="text-blue-300 underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              support@scrapquest.com
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            Phone:{" "}
            <a
              href="tel:+123456789"
              className="text-blue-300 underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
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
