import React from "react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "./homeicon.png"; // Ensure this path is correct
import termsIcon from "./image.png"; // Ensure this path is correct

const TermsAndConditions: React.FC = () => {
  const homeIconStyle: React.CSSProperties = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    width: "2.5rem",
    cursor: "pointer",
  };

  return (
    <div className="relative bg-slate-950 min-h-screen">
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
      <div className="text-white container mx-auto p-6 max-w-[48rem] shadow-lg rounded-lg mt-10 relative">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-center text-white hover:text-[#8abf83] transition duration-300 ease-in-out">
            Terms and{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded px-2 py-1 inline-block transform hover:scale-110 transition-transform duration-300">
              Conditions
            </span>
          </h1>
          <Image
            src={termsIcon}
            alt="Terms and Conditions"
            className="rounded-lg mx-auto mb-6 hover:scale-105 transition-transform duration-300 ease-in-out"
            width={500}
            height={300}
          />
        </div>

        <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-inner mb-6">
          <h2 className="text-3xl text-center font-semibold mb-4 text-white animate-pulse">
            Introduction
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed text-center">
            These Terms and Conditions outline the rules and regulations for the
            use of ScrapQuest's website and services. By accessing and using our
            website, you accept and agree to comply with these terms. If you do
            not agree with any part of these terms, you should not use our
            website or services.
          </p>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Definitions
          </h2>
          <ul className="list-none pl-0 text-gray-300 leading-relaxed">
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-green-500 rounded-full flex-shrink-0"></span>
              <span>
                <strong>"Service"</strong> refers to the web scraping services
                provided by ScrapQuest.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-green-500 rounded-full flex-shrink-0"></span>
              <span>
                <strong>"We," "Us," "Our"</strong> refers to ScrapQuest.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-green-500 rounded-full flex-shrink-0"></span>
              <span>
                <strong>"You," "Your"</strong> refers to the user or customer of
                our website and services.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Use of Service
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Eligibility
          </h3>
          <p className="mb-6 text-gray-300 leading-relaxed">
            You must be at least 18 years old to use our services. By using our
            services, you represent and warrant that you are at least 18 years
            old and have the legal capacity to enter into these Terms and
            Conditions.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Account Registration
          </h3>
          <p className="mb-6 text-gray-300 leading-relaxed">
            To access certain features of our services, you may need to create
            an account. You agree to provide accurate and complete information
            when creating your account and to update this information as
            necessary. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under
            your account.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Prohibited Activities
          </h3>
          <ul className="list-none pl-0 text-gray-300 leading-relaxed">
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Use our services for any illegal or unauthorized purpose.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Attempt to gain unauthorized access to our systems or networks.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Use our services to scrape websites that you do not have
                permission to scrape.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Interfere with or disrupt the integrity or performance of our
                services.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All content, trademarks, logos, and intellectual property displayed
            on our website are the property of ScrapQuest or its licensors. You
            may not use, reproduce, distribute, or create derivative works from
            any content without our prior written consent.
          </p>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Data Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We value your privacy and are committed to protecting your personal
            information. Please review our{" "}
            <a
              href="#"
              className="text-[#8abf83] underline hover:text-[#a4d39f] transition-colors duration-300 ease-in-out"
            >
              Privacy Policy
            </a>{" "}
            to understand how we collect, use, and protect your data.
          </p>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To the fullest extent permitted by law, ScrapQuest shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from:
          </p>
          <ul className="list-none pl-0 text-gray-300 leading-relaxed">
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>Your use or inability to use our services.</span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Any unauthorized access to or use of our servers and/or any
                personal information stored therein.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Any interruption or cessation of transmission to or from our
                services.
              </span>
            </li>
            <li className="flex items-start mb-3">
              <span className="w-4 h-4 mr-2 mt-1 bg-red-500 rounded-full flex-shrink-0"></span>
              <span>
                Any bugs, viruses, trojan horses, or the like that may be
                transmitted to or through our services.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Indemnification
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You agree to indemnify and hold harmless ScrapQuest, its affiliates,
            officers, agents, and employees, from any claim or demand, including
            reasonable attorneys' fees, made by any third party due to or
            arising out of your use of our services, your violation of these
            terms, or your violation of any rights of another.
          </p>
        </div>

        <div className="p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Modifications to the Service and Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to modify or discontinue our services at any
            time, with or without notice. We also reserve the right to modify
            these Terms and Conditions at any time. Your continued use of our
            services after any such changes constitutes your acceptance of the
            new terms.
          </p>
        </div>

        <h2 className="text-3xl text-center font-semibold mb-4 text-white">
          Contact Us
        </h2>
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-inner text-center">
          <p className="mb-4 text-white text-lg">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us:
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

export default TermsAndConditions;
