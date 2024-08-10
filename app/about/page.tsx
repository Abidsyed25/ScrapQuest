'use client';

import React from 'react';
import { Nav } from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './homeicon.png';

const About: React.FC = () => {
  const headingStyle: React.CSSProperties = {
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9), 0 0 1em rgba(16, 47, 96, 0.9), 0 0 0.5em rgba(0, 0, 128, 0.9)',
    marginTop: '35px',
    transition: 'color 0.5s ease, text-shadow 0.5s ease',
  };

  return (
    <div className="relative bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(5,45,65)] to-[rgb(2,6,23)] text-white min-h-screen">
      <Nav />
      <div
  className="container mx-auto p-6 max-w-4xl shadow-lg rounded-lg mt-10 mb-10 relative overflow-hidden"
  style={{
    background: `linear-gradient(to right, #01172e, #012242, #01172e), 
                 linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent)`,
    backgroundBlendMode: 'overlay',
  }}
>
        
        <HomeIcon />

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4" style={headingStyle}>
            About <span className="bg-[#003366] rounded px-3 text-white animate-pulse">Us</span>
          </h1>
          <p className="text-lg mx-auto max-w-3xl" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Discover who we are, what we do, and why we are passionate about making web data extraction simple and accessible.
          </p>
        </div>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6 relative">
            Welcome to ScrapQuest!
            <div className="absolute inset-0 bg-gradient-to-r from-[#004080] to-[#00264d] opacity-40 -z-10 animate-pulse"></div>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            At ScrapQuest, we make data extraction from websites effortless and efficient. Our cutting-edge solution is designed to help you quickly gather valuable information from any website without the usual hassle and complications.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6 relative">
            Our Mission
            <div className="absolute inset-0 bg-gradient-to-r from-[#004080] to-[#00264d] opacity-40 -z-10 animate-pulse"></div>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Our mission is to simplify the process of web scraping, making it accessible and straightforward for everyone. Whether you're a business looking to gain insights, a researcher needing data for your projects, or a developer seeking to integrate web data into your applications, ScrapQuest is here to help.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6 relative">
            What We Do
            <div className="absolute inset-0 bg-gradient-to-r from-[#011d39] to-[#00264d] opacity-40 -z-10 animate-pulse"></div>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            ScrapQuest offers a powerful and intuitive platform for web scraping. Our solution allows users to easily and quickly collect data from any website. We focus on providing a seamless experience that minimizes the technical complexities of data extraction, enabling users to obtain the information they need with ease.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6 relative">
            Contact Us
            <div className="absolute inset-0 bg-gradient-to-r from-[#004080] to-[#00264d] opacity-40 -z-10 animate-pulse"></div>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Have questions or need support? Feel free to reach out to our team. We're here to help you get the most out of ScrapQuest.
          </p>
          <div className="mt-4">
            <p>Email: <a href="mailto:support@scrapquest.com" className="text-blue-200 hover:underline transition-colors duration-300">support@scrapquest.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-blue-200 hover:underline transition-colors duration-300">+1 234 567 89</a></p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const HomeIcon: React.FC = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Link href="/" passHref>
      <Image
        src={homeIcon}
        alt="Home"
        style={{
          position: 'fixed',
          top: '4rem',
          left: '1rem',
          width: '2.5rem',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
          transform: hover ? 'scale(1.2)' : 'scale(1)',
          boxShadow: hover ? '0px 6px 20px rgba(0, 0, 0, 0.6)' : 'none',
          filter: hover ? 'brightness(1.5) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' : 'brightness(1)',
        }}
        width={50}
        height={50}
        className="homeIcon"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </Link>
  );
}

export default About;
