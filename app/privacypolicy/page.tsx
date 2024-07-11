import { Nav } from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
const PrivacyPolicy = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="container mx-auto p-6 max-w-[48rem]">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy{" "}
          <span className="bg-[#8abf83] rounded px-2">Policy</span>
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction
          </h2>
          <p className="mb-6 text-white-700">
            This Privacy Policy describes how ScrapQuest ("we," "our," "us")
            collects, uses, and protects the personal information you provide
            when using our website and services. By accessing or using ScrapQuest,
            you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
          Information Collection and Use
          </h2>
          <p className="mb-6 text-white-700">
          We may collect the following types of personal information when you use
          our services:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-6">
            <li>
            <strong>Account Information:</strong> When you create an account, we
              collect your name, email address, and any other information you
              provide.
            </li>
            <li>
            <strong>Usage Data:</strong> We may collect information about how you
              interact with our website and services, such as your IP address,
              browser type, pages visited, and referring URL.
            </li>
            <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and
              similar tracking technologies to enhance your experience and collect
              additional usage data.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Use of Information
          </h2>
          <p className="mb-6 text-white-700">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-6">
            <li>To provide and maintain our services.</li>
            <li>To personalize your experience and improve our website.</li>
            <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
            <li>To enforce our Terms and Conditions and other legal agreements.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Data Sharing and Disclosure
          </h2>
          <p className="mb-6 text-white-700">
          We do not sell, trade, or otherwise transfer your personal information
            to third parties without your consent, except as described in this
            Privacy Policy or as required by law.
          </p>
          <p className="mb-6 text-white-700">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-6">
          <li>
              <strong>Service Providers:</strong> We may engage third-party companies
              to assist in providing our services, subject to confidentiality
              obligations.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose information when
              required by law or to protect our rights and interests.
            </li>
          </ul>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Data Security
          </h2>
          <p className="mb-6 text-white-700">
          We implement security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Choices
          </h2>
          <p className="mb-6 text-white-700">
          You can choose not to provide certain information, although this may
          limit your ability to use some features of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
          Changes to This Privacy Policy
          </h2>
          <p className="mb-6 text-white-700">
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
          <p className="mb-6 text-white-700">
            If you have any questions or concerns about this Privacy Policy, please
            contact us:
          </p>
          <p className="mb-6 text-white-700 text-center">
            Email:{" "}
            <a href="mailto:support@scrapquest.com" className="text-blue-600">
              support@scrapquest.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+123456789" className="text-blue-600">
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
