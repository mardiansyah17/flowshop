import People from "@/components/People";
import Image from "next/image";
import React from "react";
import {NextSeo} from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo
          title="Ure no Hana - About"
          description="Ure No Hana bangga menyediakan bunga dan karangan bunga berkualitas terbaik untuk pelanggan kami. Kami menyadari bahwa bunga adalah simbol dari emosi dan perasaan, oleh karena itu kami selalu berusaha untuk memberikan produk yang unik dan indah, serta pelayanan yang ramah dan cepat. "
          openGraph={{
            title: 'Ure no Hana - About',
            description: 'Ure No Hana bangga menyediakan bunga dan karangan bunga berkualitas terbaik untuk pelanggan kami. Kami menyadari bahwa bunga adalah simbol dari emosi dan perasaan, oleh karena itu kami selalu berusaha untuk memberikan produk yang unik dan indah, serta pelayanan yang ramah dan cepat. ',

            url: 'https://flowshop.mardiancode.tech/about',
            type: 'article',
          }}
          canonical="https://flowshop.mardiancode.tech/about"
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'tentang kami, toko bunga online, bunga segar, universitas bina darma, Muhammad Mardiansyah, Kanero, Yosandra, Xena, Dina, Ure no Hana',
            },
            {
              name: 'robots',
              content: 'index, follow',
            },
          ]}
      />

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Tentang kami
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Kami di Ure No Hana bangga menyediakan bunga dan karangan bunga berkualitas terbaik untuk
              pelanggan kami. Kami menyadari bahwa bunga adalah simbol dari emosi dan perasaan, oleh
              karena itu kami selalu berusaha untuk memberikan produk yang unik dan indah, serta
              pelayanan yang ramah dan cepat. Kami berkomitmen untuk memenuhi kebutuhan pelanggan kami
              dengan memberikan pengalaman belanja yang menyenangkan dan memuaskan.
            </p>
          </div>
          <div className="w-full lg:w-8/12 relative h-40 sm:h-52 lg:h-72">
            <Image fill src="/images/aboutimage.jpeg" alt="tentang kami" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full  flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Cerita kami
            </h1>
            <div className="bg-white mb-3 rounded-md w-full shadow-md border border-gray-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <People name={"M Mardiansyah"} img={"/images/mardi.jpg"} />
              <People name={"Kanero"} img={"/images/kanero.jpeg"} />
              <People name={"Yosandra saputri"} img={"/images/yosan.jpeg"} />
              <People name={"Dina"} img={"/images/dina.jpeg"} />
              <People name={"Xena"} img={"/images/xena.jpeg"} />
            </div>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Di Ure No Hana, kami bermula dari kecintaan pada keindahan bunga dan hasrat untuk
              memberikan pengalaman belanja bunga yang unik bagi pelanggan kami. Kami telah tumbuh
              dari sebuah toko bunga kecil menjadi toko bunga terkemuka di Indonesia, dengan fokus
              pada kualitas, keramahan, dan kreativitas dalam setiap produk dan layanan kami. Kami
              terus diilhami oleh keindahan dan pesan cinta yang terkandung dalam bunga, dan
              berkomitmen untuk memberikan pengalaman belanja bunga yang menyenangkan dan berkesan
              bagi pelanggan kami.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
