"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Nav } from "@/components/Nav";
import React, { useState } from "react";

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
          <label htmlFor="otherFeedback" className="font-semibold">Other Feedback</label>
          <textarea
            id="otherFeedback"
            placeholder="Enter your feedback here"
            {...form.register("otherFeedback")}
            className="p-2 border rounded resize-none text-black"
          />
          {form.formState.errors.otherFeedback && (
            <p className="text-red-500">{form.formState.errors.otherFeedback.message}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <Nav />
      <main className="p-4 sm:p-20 flex w-full flex-col items-center justify-between">
        <p className="text-4xl font-extrabold py-5">
          Scrap<span className="bg-[#a8e4a0] rounded px-2">Quest</span>
        </p>
        <div className="flex w-full flex-col items-center p-4 sm:p-10">
          <p className="pt-5 text-xl sm:text-2xl">Facing an Issue? Fill up the form below 👇</p>
          <div className="flex w-full flex-col items-center justify-between pt-5 px-4 pb-4 sm:px-25 sm:pb-25 min-h-screen">
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-md flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...form.register("name")}
                  className="p-2 border rounded text-black"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  {...form.register("email")}
                  className="p-2 border rounded text-black"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="feedbackType" className="font-semibold">Type of Feedback</label>
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
                  <p className="text-red-500">{form.formState.errors.feedbackType.message}</p>
                )}
              </div>

              {renderOtherFeedbackInput()}

              <div className="flex flex-col">
                <label htmlFor="issue" className="font-semibold">Issue</label>
                <textarea
                  id="issue"
                  placeholder="Tell us a little bit about your issue in detail here"
                  className="p-2 border rounded resize-none text-black"
                  {...form.register("issue")}
                />
                {form.formState.errors.issue && (
                  <p className="text-red-500">{form.formState.errors.issue.message}</p>
                )}
              </div>
              <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-800"><b>SUBMIT</b></button>

            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-500">Form submitted successfully!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
