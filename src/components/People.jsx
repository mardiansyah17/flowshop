import Image from "next/image";
import React from "react";

export default function People({ name, img }) {
  return (
    <div className="p-4 pb-6 flex justify-center flex-col items-center">
      <div className="md:block  h-32 w-28 relative">
        <Image fill src={img} alt={name} />
      </div>
      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">{name}</p>
    </div>
  );
}
