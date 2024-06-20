import React from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <div className="fixed bg-gradient-to-r from-blue-500 shadow-md bottom-0 left-0 w-screen text-white py-3 tracking-wider text-center text-sm">
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-6 items-center">
          <Link href="/" legacyBehavior>
            <a className="hover:text-blue-400">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-blue-400">About Us</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-blue-400">Contact</a>
          </Link>
          <Link
            href="https://github.com/Abidsyed25/ScrapQuest"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <a className="text-white font-medium text-sm flex items-center hover:text-blue-400">
              <FaGithub className="w-4 h-4 mr-2" /> Star on Github
            </a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="hover:text-blue-400">FAQ</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="hover:text-blue-400">Begin Your Journey</a>
          </Link>
        </div>
        <div className="mt-4">
          <p className="social-text" style={{ color: 'turquoise' }}>
          Discover more about ScrapQuest and stay updated!
          </p>
          <div className="social-media flex justify-center mt-2">
            <a href="https://www.facebook.com" className="social-icon mx-2">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com" className="social-icon mx-2">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.gmail.com" className="social-icon mx-2">
              <FaGoogle className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com" className="social-icon mx-2">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
        <h1 className="mt-4">Copyright © 2024, ScrapQuest. All Rights Reserved.</h1>
      </div>
    </div>
  );
}
