import { API_URL } from "@/CONSTANT";
import CardProduct from "@/components/CardProduct";
import { getFlowers } from "@/lib/flower";
import Image from "next/image";
import React from "react";
export default function Products({ flowers }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:gap-8 grid-cols-1">
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
  return {
    props: {
      flowers: flowers ?? [],
    },
  };
}
