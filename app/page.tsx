import Hero from "@/components/Hero";
import { Nav } from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{height:"100vh"}}>

     <Nav/>
     <Hero/>
    </div>
  );
}
