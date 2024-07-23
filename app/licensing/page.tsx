import { Nav } from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import homeIcon from './homeicon.png'; 
import styles from './licensing.module.css'; 

const Licensing: React.FC = () => {
  return (
    <div className={styles.faqBackground}>
      <Nav />
      <Link href="/" passHref>
        <Image src={homeIcon} alt="Home" className={styles.homeIcon} width={50} height={50} />
      </Link>
      <div className={`container mx-auto p-6 max-w-[48rem] ${styles.licensingContainer}`}>
        <h1 className={`text-4xl font-bold mb-6 ${styles.faqTitle}`}>
          Licensing{" "}
        </h1>

        <section className="mb-6">
          <p className={styles.mitLicenseTitle}>
            MIT License
          </p>
          <p className={styles.paragraph}>
            Copyright (c) 2024 Abid
          </p>
          <p className={styles.paragraph}>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          <p className={styles.paragraph}>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          <p className={styles.paragraph}>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Licensing;
