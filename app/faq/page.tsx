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
import "./faq.css";

const FAQ: React.FC = () => {
  
  
  return (
    <>
      <div className="relative bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(5,45,65)] to-[rgb(2,6,23)] text-white min-h-screen">
        <Nav />
        <div className="container mx-auto p-6 max-w-[48rem]">
          <h1 className="text-4xl font-bold mb-6 faq-title">
            Frequently Asked{" "}
            <span>Questions</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div style={{ width: "750px" }}>
              <Accordion type="multiple" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="my-4">
                    <AccordionTrigger className="accordion-trigger">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content">
                      {faq.answer}
                    </AccordionContent>
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
