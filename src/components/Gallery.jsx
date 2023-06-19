import { STRAPI_URL } from "@/CONSTANT";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
export default function Gallery({ galleries }) {
  return (
    <div className="w-full">
      <h1 className="py-10 text-3xl font-bold text-center ">Galeri kami</h1>
      <div className="">
        <Swiper
          centeredSlides
          slidesPerView={"auto"}
          effect="coverflow"
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          <div className="swiper-wrapper">
            {galleries ? (
              <>
                {galleries.map((img, idx) => {
                  return (
                    <SwiperSlide key={`imgId.${idx}`}>
                      <Image
                        width={200}
                        height={300}
                        src={`${STRAPI_URL}${img.data.attributes.url}`}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 object-cover object-center w-full h-full rounded"
                      />
                    </SwiperSlide>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
