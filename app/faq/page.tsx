import React from 'react';
import { Nav } from "@/components/Nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../faq/faqs";
import Footer from '@/components/Footer';

const FAQ: React.FC = () => {
  return (
    <>
      <div className="relative bg-black">
        <Nav />
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
