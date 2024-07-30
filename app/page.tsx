import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import CustomScrollbar from "@/components/CustomScrollbar";

export default function Home() {
  return (
    <div className="bg-gray-950" style={{ height: "100vh" }}>
      <Nav />
      <CustomScrollbar />
      <Hero />
      <Footer/>
    </div>
  );
}
