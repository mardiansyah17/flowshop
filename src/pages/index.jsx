
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import { API_URL } from "@/CONSTANT";
import {NextSeo} from "next-seo";
import axios from "axios";



export default function Home({ galleries }) {
  return (
    <>
      <NextSeo
          title="Ure no Hana"
          description="Toko online kami menawarkan berbagai pilihan bucket bunga indah untuk setiap kesempatan."
          openGraph={{
              title:"Ure no Hana",
              description:"Toko online kami menawarkan berbagai pilihan bucket bunga indah untuk setiap kesempatan.",
            url: 'https://flowshop.mardiancode.tech/',
          }}

          additionalMetaTags={
          [
            {
                name: 'keywords',
                content: 'bunga, bucket bunga, toko bunga, bunga indah, acara spesial,universitas bina darma, muhammad mardiansyah, kanero, yosandra, xena, dina, ure no hana',
            },
              {
                  name: 'robots',
                  content: 'index, follow',
              },
          ]
          }

          canonical="https://flowshop.mardiancode.tech/"
      />

      <Hero />
      <Featured />
      <Gallery galleries={galleries} />
    </>
  );
}

export async function getStaticProps() {
  const dataGalleries = await axios.get(`${API_URL}/galleries?populate=image`)
    .then((res) => res.data.data);
  // console.log(dataGalleries);
  const galleries = dataGalleries.map((data) => {
    return data.attributes.image;
  });
  return {
    props: {
      galleries,
    },
    revalidate: 60,
  };
}
