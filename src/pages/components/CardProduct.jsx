import Image from "next/image";
import React from "react";

export default function CardProduct() {
  return (
    <div className="w-80 bg-white mx-auto shadow rounded">
      {" "}
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/bunga1.jpg")',
        }}
      >
        {" "}
        <div>
          {" "}
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            {" "}
            available{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center mt-1">Bunga keren</h1>{" "}
        <p className="text-center text-gray-800 mt-1">Rp200.000</p>{" "}
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
          {" "}
          Pesan sekarang{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>{" "}
        </button>
      </div>
    </div>
  );
}
