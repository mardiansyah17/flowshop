import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Gallery />
      <Footer />
    </>
  );
}
