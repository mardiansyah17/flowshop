import Image from "next/image";
import React from "react";
import CardProduct from "../components/CardProduct";
export default function Products() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:gap-8 grid-cols-1">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
}
