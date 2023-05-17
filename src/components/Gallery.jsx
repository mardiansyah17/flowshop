import { STRAPI_URL } from "@/CONSTANT";
import Image from "next/image";
import React from "react";

export default function Gallery({ galleries }) {
  return (
    <>
      <h1 className="text-center font-bold py-10 text-3xl ">Galeri kami</h1>
      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className="grid grid-cols-4 gap-3">
          {galleries.map((img, idx) => {
            return (
              <Image
                key={`imgId.${idx}`}
                width={200}
                height={300}
                src={`${STRAPI_URL}${img.data.attributes.url}`}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
