"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Nav } from "@/components/Nav";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from "./homeicon.png"; // Ensure this path is correct
import Footer from "@/components/Footer";
import contact from "./contact.jpg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  feedbackType: z.string().nonempty("Please select a feedback type"),
  issue: z.string().optional(),
  otherFeedback: z.string().optional(),
});

// Contact form component
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedbackType: "",
      issue: "",
      otherFeedback: "",
    },
  });

  // Handle form submission
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission (e.g., send data to the server)
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide notification after 3 seconds
  };

  // Function to show other feedback input when "Other" is selected
  const renderOtherFeedbackInput = () => {
    if (form.watch("feedbackType") === "other") {
      return (
        <div className="flex flex-col">
          <label htmlFor="otherFeedback" className="font-semibold">
            Other Feedback
          </label>
          <textarea
            id="otherFeedback"
            placeholder="Enter your feedback here"
            {...form.register("otherFeedback")}
            className="p-2 border rounded resize-none text-black"
          />
          {form.formState.errors.otherFeedback && (
            <p className="text-red-500">
              {form.formState.errors.otherFeedback.message}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const homeIconStyle: React.CSSProperties = {
    position: "absolute",
    top: "4rem", // Adjust as needed for positioning
    left: "1rem", // Adjust as needed for positioning
    width: "2.5rem",
    cursor: "pointer",
  };

  return (
    <div className="min-h-screen bg-[rgb(2,6,23)] py-12">
      <Nav />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <Link href="/" passHref>
          <Image
            src={homeIcon}
            alt="Home"
            className="w-12 h-12 mb-8 hover:opacity-80 transition-opacity"
            width={48}
            height={48}
          />
        </Link>
        
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">
          Contact <span className="bg-[rgb(2,41,61)] rounded-lg px-4 py-1">Us</span>
        </h1>
        
        <p className="text-2xl text-center text-gray-300 mb-12">
          We're here to help. Let us know how we can assist you.
        </p>
        
        <div className="bg-gradient-to-r from-[rgb(2,6,23)] via-[rgb(2,41,61)] to-[rgb(2,6,23)] 
                        rounded-lg overflow-hidden
                        shadow-[0_15px_30px_rgba(100,150,200,0.3),_0_10px_10px_rgba(100,150,200,0.2)]
                        hover:shadow-[0_20px_40px_rgba(100,150,200,0.4),_0_15px_15px_rgba(100,150,200,0.3)]
                        transition-all duration-300 ease-in-out
                        max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:w-2/5">
              <Image src={contact} height={400} width={280} alt="contact" className="mx-auto mb-6" />
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-sm text-gray-300">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <div className="flex justify-center space-x-4 text-gray-300">
                  <a href="https://www.facebook.com" className="hover:text-white transition-colors">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="https://www.x.com" className="hover:text-white transition-colors">
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.gmail.com" className="hover:text-white transition-colors">
                    <FaGoogle className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com" className="hover:text-white transition-colors">
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:w-3/5">
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...form.register("name")}
                    className="mt-1 block w-full rounded-md bg-[rgb(2,6,23)] border-[rgb(2,41,61)] text-white placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-400">{form.formState.errors.name.message}</p>
                  )}
                </div>
  
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    {...form.register("email")}
                    className="mt-1 block w-full rounded-md bg-[rgb(2,6,23)] border-[rgb(2,41,61)] text-white placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-400">{form.formState.errors.email.message}</p>
                  )}
                </div>
  
                <div>
                  <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-300">Type of Feedback</label>
                  <select
                    id="feedbackType"
                    {...form.register("feedbackType")}
                    className="mt-1 block w-full rounded-md bg-[rgb(2,6,23)] border-[rgb(2,41,61)] text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="question">Question</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="issue">Issue</option>
                    <option value="other">Other</option>
                  </select>
                  {form.formState.errors.feedbackType && (
                    <p className="mt-1 text-sm text-red-400">{form.formState.errors.feedbackType.message}</p>
                  )}
                </div>
  
                {renderOtherFeedbackInput()}
  
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="issue"
                    placeholder="Please provide details about your question, suggestion, or issue"
                    {...form.register("issue")}
                    rows={3}
                    className="mt-1 block w-full rounded-md bg-[rgb(2,6,23)] border-[rgb(2,41,61)] text-white placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {form.formState.errors.issue && (
                    <p className="mt-1 text-sm text-red-400">{form.formState.errors.issue.message}</p>
                  )}
                </div>
  
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow transition-colors"
                >
                  Submit
                </button>
              </form>
              
              {isSubmitted && (
                <p className="mt-4 text-sm text-blue-300 font-semibold">Thank you! Your message has been sent successfully.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
