import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <>
      <h1 className="text-center font-bold py-10 text-3xl dark:text-white">Galeri kami</h1>
      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className="grid grid-cols-4 gap-3">
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
          <Image
            width={200}
            height={300}
            src="/images/bunga1.jpg"
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded"
          />
        </div>
      </div>
    </>
  );
}
