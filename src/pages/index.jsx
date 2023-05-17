import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import { API_URL } from "@/CONSTANT";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ galleries }) {
  return (
    <>
      <Hero />
      <Featured />
      <Gallery galleries={galleries} />
    </>
  );
}

export async function getStaticProps() {
  const dataGalleries = await fetch(`${API_URL}/galleries?populate=image`)
    .then((res) => res.json())
    .then((res) => res.data);
  const galleries = dataGalleries.map((data) => {
    return data.attributes.image;
  });
  return {
    props: {
      galleries,
    },
  };
}
