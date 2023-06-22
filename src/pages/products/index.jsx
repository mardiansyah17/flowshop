import { API_URL } from "@/CONSTANT";
import CardProduct from "@/components/CardProduct";
import { getFlowers } from "@/lib/flower";
import Image from "next/image";
import React from "react";
export default function Products({ flowers }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
      {flowers.map((flower, idx) => {
        return <CardProduct key={`cardProductId.${idx}`} flower={flower} />;
      })}
    </div>
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
