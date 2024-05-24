import Hero from "@/components/Hero";
import { Nav } from "@/components/Nav";
import Image from "next/image";

import React from "react";

export default function about() {
  return (
    
    <div className="relative">
      <Nav />
        <div className="p-20 flex w-full flex-col items-center justify-between">
            <p style={{ fontSize: "4rem", fontWeight: 800, padding: 20 }}>
                Scrap<span style={{ backgroundColor: "#a8e4a0", borderRadius: "8px", padding: "0 0.5rem" }}>Quest</span>
            </p>
            <p style={{ fontSize: "2rem", fontWeight: 500, padding: 20 }}>ScrapQuest is your go-to solution for effortlessly extracting data from websites. 
                It's a simple yet powerful web scraper built with Next.js, TypeScript, and Puppeteer 
                with Browserless. With ScrapQuest, you can quickly gather valuable information from any 
                website without hassle.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <hr style={{ width: "80%", height: "10px", backgroundColor: "#a8e4a0", border: "none", margin: "20px 0", alignItems: "center" }} />
        </div>
        
        <div className="p-10 flex w-full flex-col items-center justify-between">
            <p style={{ fontSize: "2rem", fontWeight: 500 }}>
                Here is a demo of how it works:
            </p>
        </div>
        <div className="p-10 flex w-full flex-col items-center justify-between">
            <video style={{ width: "80vw" }} controls>
                <source src="https://github.com/Abidsyed25/Quine-ScrapQuest/assets/116893970/7ee87ae2-b691-44de-8cd9-ead09fa985e7" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
}
