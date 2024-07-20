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
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
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
    <div className="relative">
      <Nav/>
      <div className="w-full container mx-auto p-6 max-w-[48rem]">
        <Link href="/" passHref>
          <Image
            src={homeIcon}
            alt="Home"
            style={homeIconStyle}
            width={50}
            height={50}
          />
        </Link>
        <p className="text-4xl font-extrabold text-center">
          Contact<span className="bg-[#a8e4a0] rounded px-2">Us</span>
        </p>
        <p className="pt-5 text-xl sm:text-2xl text-center">
          Facing an Issue? Fill up the form below 👇
        </p>
        <main className="flex flex-col sm:flex-row items-center justify-center bg-zinc-900 border-2 mt-10 p-6 sm:p-0">
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 mb-6 sm:mb-0 sm:ml-10">
              <Image src={contact} height={650} width={410} alt="contact" />
            </div>
            <div className="social-media flex justify-center mt-6 sm:mt-16 text-center sm:ml-5">
              <a
                href="https://www.facebook.com"
                className="social-icon mx-2 hover:text-blue-400"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.twitter.com"
                className="social-icon mx-2 hover:text-blue-400"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.gmail.com"
                className="social-icon mx-2 hover:text-blue-400"
              >
                <FaGoogle className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="social-icon mx-2 hover:text-blue-400"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center p-4 sm:p-10">
            <div className="flex w-full flex-col items-center justify-between pt-5 px-4 pb-4 sm:px-25 sm:pb-25">
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full max-w-md flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-semibold">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...form.register("name")}
                    className="p-2 border rounded text-black"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="font-semibold">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    {...form.register("email")}
                    className="p-2 border rounded text-black"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="feedbackType" className="font-semibold">
                    Type of Feedback
                  </label>
                  <select
                    id="feedbackType"
                    {...form.register("feedbackType")}
                    className="p-2 border rounded text-black"
                  >
                    <option value="">Select...</option>
                    <option value="question">Question</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="issue">Issue</option>
                    <option value="other">Other</option>
                  </select>
                  {form.formState.errors.feedbackType && (
                    <p className="text-red-500">
                      {form.formState.errors.feedbackType.message}
                    </p>
                  )}
                </div>

                {renderOtherFeedbackInput()}

                <div className="flex flex-col">
                  <label htmlFor="issue" className="font-semibold">
                    Issue
                  </label>
                  <textarea
                    id="issue"
                    placeholder="Tell us a little bit about your issue in detail here"
                    className="p-2 border rounded resize-none text-black"
                    {...form.register("issue")}
                  />
                  {form.formState.errors.issue && (
                    <p className="text-red-500">
                      {form.formState.errors.issue.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-800"
                >
                  <b>SUBMIT</b>
                </button>
              </form>
              {isSubmitted && (
                <p className="mt-4 text-green-500">
                  Form submitted successfully!
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
