import React from 'react';
import { Nav } from "@/components/Nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "./faqs"; // Adjust the path to faqs.js as per your project structure
import Link from "next/link";
import Image from "next/image";
import homeIcon from './homeicon.png'; // Adjust the path to homeicon.png as per your project structure
import Footer from '@/components/Footer';
const FAQ: React.FC = () => {
  const homeIconStyle = {
    position: 'absolute',
    top: '4rem', // Adjust as needed for positioning
    left: '1rem', // Adjust as needed for positioning
    width: '2.5rem',
    cursor: 'pointer'
  };

  return (
    <>
      <div className="relative bg-black">
        <Nav />
        <Link href="/" passHref>
          <Image src={homeIcon} alt="Home" style={homeIconStyle} width={50} height={50} />
        </Link>
        <div className="container mx-auto p-6 max-w-[48rem]">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Frequently Asked{" "}
            <span className="bg-[#8abf83] rounded px-2">Questions</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div style={{ width: "600px" }}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
