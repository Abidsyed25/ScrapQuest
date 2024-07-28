import { Nav } from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import homeIcon from './homeicon.png';

const PrivacyPolicy: React.FC = () => {
  const homeIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '4rem',
    left: '2.5rem',
    width: '2.5rem',
    cursor: 'pointer'
  };

  return (
    <div className="relative bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(5,45,65)] to-[rgb(2,6,23)] text-white min-h-screen">
      <Nav />
      <Link href="/" passHref>
        <Image src={homeIcon} alt="Home" style={homeIconStyle} width={50} height={50} />
      </Link>
      <div className="container mx-auto p-6 max-w-[48rem]">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#00e6e6] leading-tight border-b-4 border-gray-500 pb-2">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Introduction
          </h2>
          <p className="mb-6 text-gray-300">
            This Privacy Policy describes how ScrapQuest ("we," "our," "us")
            collects, uses, and protects the personal information you provide
            when using our website and services. By accessing or using ScrapQuest,
            you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Information Collection and Use
          </h2>
          <p className="mb-6 text-gray-300">
            We may collect the following types of personal information when you use
            our services:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 pl-4">
            <li className="mb-2">
              <strong className="text-[#00e6e6]">Account Information:</strong> When you create an account, we
              collect your name, email address, and any other information you
              provide.
            </li>
            <li className="mb-2">
              <strong className="text-[#00e6e6]">Usage Data:</strong> We may collect information about how you
              interact with our website and services, such as your IP address,
              browser type, pages visited, and referring URL.
            </li>
            <li className="mb-2">
              <strong className="text-[#00e6e6]">Cookies and Tracking Technologies:</strong> We use cookies and
              similar tracking technologies to enhance your experience and collect
              additional usage data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Use of Information
          </h2>
          <p className="mb-6 text-gray-300">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 pl-4">
            <li className="mb-2">To provide and maintain our services.</li>
            <li className="mb-2">To personalize your experience and improve our website.</li>
            <li className="mb-2">To communicate with you, including responding to your inquiries and providing customer support.</li>
            <li className="mb-2">To enforce our Terms and Conditions and other legal agreements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Data Sharing and Disclosure
          </h2>
          <p className="mb-6 text-gray-300">
            We do not sell, trade, or otherwise transfer your personal information
            to third parties without your consent, except as described in this
            Privacy Policy or as required by law.
          </p>
          <p className="mb-6 text-gray-300">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 pl-4">
            <li className="mb-2">
              <strong className="text-[#00e6e6]">Service Providers:</strong> We may engage third-party companies
              to assist in providing our services, subject to confidentiality
              obligations.
            </li>
            <li className="mb-2">
              <strong className="text-[#00e6e6]">Legal Compliance:</strong> We may disclose information when
              required by law or to protect our rights and interests.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Data Security
          </h2>
          <p className="mb-6 text-gray-300">
            We implement security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Your Choices
          </h2>
          <p className="mb-6 text-gray-300">
            You can choose not to provide certain information, although this may
            limit your ability to use some features of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6 text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you
            of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#00e6e6]">Contact Us</h2>
          <p className="mb-6 text-gray-300 text-center">
            If you have any questions or concerns about this Privacy Policy, please
            contact us:
          </p>
          <p className="mb-6 text-gray-300 text-center">
            Email:{" "}
            <a href="mailto:support@scrapquest.com" className="text-[#00e6e6] hover:underline">
              support@scrapquest.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+123456789" className="text-[#00e6e6] hover:underline">
              +1 234 567 89
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;