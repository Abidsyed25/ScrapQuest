import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaGithub,
  FaQuestionCircle,
  FaSignInAlt,
  FaPenSquare,
  FaShieldAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaAddressBook,
  FaFileContract,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from '../app/Footer.module.css'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(2,41,61)] to-[rgb(2,6,23)] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-white">ScrapQuest</a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className={`mb-6 text-sm font-semibold text-blue-200 uppercase ${styles.heading}`}>
                Social Links
              </h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a
                    href="https://www.linkedin.com"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaLinkedinIn className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    LinkedIn
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="mailto:example@example.com"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaEnvelope className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Email
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.facebook.com"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaFacebookF className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Facebook
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.x.com"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaXTwitter className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-6 text-sm font-semibold text-blue-200 uppercase ${styles.heading}`}>
                Resources
              </h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a
                    href="/"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaHome className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/about"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaInfoCircle className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://github.com/Abidsyed25/ScrapQuest"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaGithub className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Star on Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-6 text-sm font-semibold text-blue-200 uppercase ${styles.heading}`}>
                Help Center
              </h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a
                    href="/faq"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaQuestionCircle className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/login"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaSignInAlt className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Begin Your Journey
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/contact"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaAddressBook className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-6 text-sm font-semibold text-blue-200 uppercase ${styles.heading}`}>
                Legal
              </h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a
                    href="/privacypolicy"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaShieldAlt className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/termsconditions"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaPenSquare className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/licensing"
                    className={`flex items-center text-base ${styles.link}`}
                  >
                    <FaFileContract className="w-4 h-4 mr-2" />
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-400 sm:mx-auto" />
        <div className="text-center mt-4">
          <span className="text-base text-blue-200 italic">
            &copy; {currentYear} ScrapQuest™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
