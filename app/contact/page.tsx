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
  issue: z.string().max(500, {
    message: "Describe your issue within 500 characters.",
  }),
});

// Contact form component
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      issue: ""
    }
  });

  // Handle form submission
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission (e.g., send data to the server)
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="relative">
      <Nav />
      <main className="p-20 flex w-full flex-col items-center justify-between">
        <p style={{ fontSize: "4rem", fontWeight: 800, padding: 20 }}>
          Scrap<span style={{ backgroundColor: "#a8e4a0", borderRadius: "8px", padding: "0 0.5rem" }}>Quest</span>
        </p>
        <div className="flex w-full flex-col items-center p-10">
          <p style={{ paddingTop: '20px', fontSize: '2rem' }}>Facing an Issue? Fill up the form below 👇</p>
          <div className="flex min-h-screen w-full flex-col items-center justify-between" style={{ paddingTop: '20px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '25px' }}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-full flex flex-col gap-4">
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
                <label htmlFor="issue" className="font-semibold">Issue</label>
                <textarea
                  id="issue"
                  placeholder="Tell us a little bit about your issue in details here"
                  className="p-2 border rounded resize-none text-black"
                  {...form.register("issue")}
                />
                {form.formState.errors.issue && (
                  <p className="text-red-500">{form.formState.errors.issue.message}</p>
                )}
              </div>

              <button type="submit" className="p-2 bg-blue-500 text-white rounded"><b>SUBMIT</b></button>
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
