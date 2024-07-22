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
  FaAddressBook
} from "react-icons/fa";

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
              <h2 className="mb-6 text-sm font-semibold text-blue-200 uppercase">Social Links</h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a href="https://www.linkedin.com" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaLinkedinIn className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    LinkedIn
                  </a>
                </li>
                <li className="mb-3">
                  <a href="mailto:example@example.com" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaEnvelope className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Email
                  </a>
                </li>
                <li className="mb-3">
                  <a href="https://www.facebook.com" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaFacebookF className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Facebook
                  </a>
                </li>
                <li className="mb-3">
                  <a href="https://www.twitter.com" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaTwitter className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-blue-200 uppercase">Resources</h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a href="/" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaHome className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/about" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaInfoCircle className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="https://github.com/Abidsyed25/ScrapQuest" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaGithub className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Star on Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-blue-200 uppercase">Help Center</h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a href="/faq" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaQuestionCircle className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/login" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaSignInAlt className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Begin Your Journey
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/contact" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaAddressBook className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-blue-200 uppercase">Legal</h2>
              <ul className="text-blue-100">
                <li className="mb-3">
                  <a href="/privacypolicy" className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center">
                    <FaShieldAlt className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/termsconditions"
                    className="hover:text-white flex items-center text-base hover:scale-110 transition-all duration-300 transform-origin-center"
                  >
                    <FaPenSquare className="w-4 h-4 mr-3 transition-all duration-300 transform-origin-center" />
                    Terms &amp; Conditions
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
