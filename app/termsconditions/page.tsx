import { Nav } from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
const TermsAndConditions = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="container mx-auto p-6 max-w-[48rem]">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms and{" "}
          <span className="bg-[#8abf83] rounded px-2">Conditions</span>
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction
          </h2>
          <p className="mb-6 text-white-700">
            Welcome to ScrapQuest! These Terms and Conditions outline the rules
            and regulations for the use of ScrapQuest website and services. By
            accessing and using our website, you accept and agree to comply with
            these terms. If you do not agree with any part of these terms, you
            should not use our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Definitions
          </h2>
          <ul className="list-disc list-inside text-white-700 mb-6">
            <li>
              <strong>&quot;Service&quot;</strong> refers to the web scraping
              services provided by ScrapQuest.
            </li>
            <li>
              <strong>&quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;</strong>{" "}
              refers to ScrapQuest.
            </li>
            <li>
              <strong>&quot;You,&quot; &quot;Your&quot;</strong> refers to the
              user or customer of our website and services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Use of Service
          </h2>
          <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
          <p className="mb-6 text-white-700">
            You must be at least 18 years old to use our services. By using our
            services, you represent and warrant that you are at least 18 years
            old and have the legal capacity to enter into these Terms and
            Conditions.
          </p>

          <h3 className="text-xl font-semibold mb-2">Account Registration</h3>
          <p className="mb-6 text-white-700">
            To access certain features of our services, you may need to create
            an account. You agree to provide accurate and complete information
            when creating your account and to update this information as
            necessary. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under
            your account.
          </p>

          <h3 className="text-xl font-semibold mb-2">Prohibited Activities</h3>
          <p className="mb-6 text-white-700">
            When using our services, you agree not to:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-6">
            <li>Use our services for any illegal or unauthorized purpose.</li>
            <li>
              Attempt to gain unauthorized access to our systems or networks.
            </li>
            <li>
              Use our services to scrape websites that you do not have
              permission to scrape.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of our
              services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Intellectual Property
          </h2>
          <p className="mb-6 text-white-700">
            All content, trademarks, logos, and intellectual property displayed
            on our website are the property of ScrapQuest or its licensors. You
            may not use, reproduce, distribute, or create derivative works from
            any content without our prior written consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Data Privacy
          </h2>
          <p className="mb-6 text-white-700">
            We value your privacy and are committed to protecting your personal
            information. Please review our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>{" "}
            to understand how we collect, use, and protect your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Limitation of Liability
          </h2>
          <p className="mb-6 text-white-700">
            To the fullest extent permitted by law, ScrapQuest shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-6">
            <li>Your use or inability to use our services.</li>
            <li>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein.
            </li>
            <li>
              Any interruption or cessation of transmission to or from our
              services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Indemnification
          </h2>
          <p className="mb-6 text-white-700">
            You agree to indemnify and hold harmless ScrapQuest, its affiliates,
            officers, agents, and employees, from any claim or demand, including
            reasonable attorneys&quot; fees, made by any third party due to or
            arising out of your use of our services, your violation of these
            terms, or your violation of any rights of another.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Modifications to the Service and Terms
          </h2>
          <p className="mb-6 text-white-700">
            We reserve the right to modify or discontinue our services at any
            time, with or without notice. We also reserve the right to modify
            these Terms and Conditions at any time. Your continued use of our
            services after any such changes constitutes your acceptance of the
            new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Governing Law
          </h2>
          <p className="mb-6 text-white-700">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the jurisdiction in which ScrapQuest
            operates, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Contact Us
          </h2>
          <p className="mb-6 text-white-700">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us:
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

        <p className="mb-6 text-white-700 text-center">
          By using our website and services, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
