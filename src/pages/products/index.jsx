import { API_URL } from "@/CONSTANT";
import CardProduct from "@/components/CardProduct";
import { getFlowers } from "@/lib/flower";
import Image from "next/image";
import React from "react";
import {NextSeo} from "next-seo";
export default function Products({ flowers }) {
  return (
      <>
        <NextSeo
            title="Ure no Hana | Pilih produk menarik untuk acara spesialmu"
            description="Jelajahi koleksi kami dan pilih bunga indah yang cocok untuk pernikahan, ulang tahun, atau momen istimewa lainnya."
            openGraph={{
              title:"Ure no Hana",
                description:"Jelajahi koleksi kami dan pilih bunga indah yang cocok untuk pernikahan, ulang tahun, atau momen istimewa lainnya.",
              url: 'https://flowshop.mardiancode.tech/products',
            }}

            additionalMetaTags={[
                {
                    name: 'keywords',
                    content: 'pemilihan bunga, bunga pernikahan, bunga ulang tahun, koleksi bunga',
                },
                {
                    name: 'robots',
                    content: 'index, follow',
                },
            ]}

            canonical="https://flowshop.mardiancode.tech/products"
        />
    <div className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
      {flowers.map((flower, idx) => {
        return <CardProduct key={`cardProductId.${idx}`} flower={flower} />;
      })}
    </div>
        </>
  );
}

export async function getStaticProps() {
  const flowers = await fetch(`${API_URL}/flowers?populate=thumbnail`)
    .then((res) => res.json())
    .then((res) => res.data);
  console.log(`${API_URL}/flowers?populate=thumbnail`);
  return {
    props: {
      flowers: flowers ?? [],
    },
    revalidate: 60,
  };
}
