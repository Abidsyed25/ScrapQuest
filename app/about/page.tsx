import React from 'react';
import { Nav } from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from './homeicon.png'; // Ensure this path is correct

const About: React.FC = () => {
  const homeIconStyle: React.CSSProperties = {
    position: 'fixed',
    top: '4rem', // Adjusted to move it down
    left: '1rem',
    width: '2.5rem',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const headingStyle: React.CSSProperties = {
    textShadow: '1px 1px 2px rgb(1, 53, 79), 0 0 1em rgb(24, 159, 226), 0 0 0.2em blue',
    marginTop: '35px',
  };

  return (
    <div className="relative bg-gradient-to-b from-[#000000] to-[#002b4d] min-h-screen text-white" style={{ background: 'linear-gradient(34deg, transparent, rgba(1, 77, 114, 0.556))' }}>
      <Nav />
      <div className="container mx-auto p-6 max-w-4xl bg-[#001f3f] shadow-lg rounded-lg mt-10 mb-10 relative">
        <Link href="/" passHref>
          <Image
            src={homeIcon}
            alt="Home"
            style={homeIconStyle}
            width={50}
            height={50}
            className="homeIcon"
          />
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4" style={headingStyle}>
            About <span className="bg-[#004080] rounded px-3 text-white">Us</span>
          </h1>
          <p className="text-lg mx-auto max-w-3xl" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Discover who we are, what we do, and why we are passionate about making web data extraction simple and accessible.
          </p>
        </div>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6">Welcome to ScrapQuest!</h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            At ScrapQuest, we make data extraction from websites effortless and efficient. Our cutting-edge solution is designed to help you quickly gather valuable information from any website without the usual hassle and complications.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Our mission is to simplify the process of web scraping, making it accessible and straightforward for everyone. Whether you're a business looking to gain insights, a researcher needing data for your projects, or a developer seeking to integrate web data into your applications, ScrapQuest is here to help.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            ScrapQuest offers a powerful and intuitive platform for web scraping. Our solution allows users to easily and quickly collect data from any website. We focus on providing a seamless experience that minimizes the technical complexities of data extraction, enabling users to obtain the information they need with ease.
          </p>
        </section>

        <section className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg leading-relaxed" style={{ fontSize: '20px', lineHeight: '2', marginBottom: '20px' }}>
            Have questions or need support? Feel free to reach out to our team. We're here to help you get the most out of ScrapQuest.
          </p>
          <div className="mt-4">
            <p>Email: <a href="mailto:support@scrapquest.com" className="text-blue-300 hover:underline">support@scrapquest.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-blue-300 hover:underline">+1 234 567 89</a></p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
