"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Button } from "./ui/button";
import Image from "next/image";

const recommendationDate = [
  {
    name: "Shanghai Hotel",
    pic: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?cs=srgb&dl=pexels-iv%C3%A1n-rivero-1001965.jpg&fm=jpg",
    location: "Shanghai, China",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
    price: 40,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
      personName: "Robert rene",
    },
  },
  {
    name: "Peaks Lodge",
    pic: "https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=",
    location: "Aspen USA",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
    price: 80,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
      personName: "Robert rene",
    },
  },
  {
    name: "Tropical Dasis Resort",
    pic: "https://media-cdn.tripadvisor.com/media/photo-s/14/3a/10/2a/pool-area.jpg",
    location: "Bali, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
    price: 30,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque quidem fuga non cumque porro eveniet perspiciatis.",
      personName: "Robert rene",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
    >
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
        >
          {recommendationDate.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 ml:gap-y-0">
                  {/* text */}
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px=[44px]">
                        Book Now
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm">/Night</span>
                      </div>
                    </div>
                  </div>
                  {/* image and testimonial */}
                  <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <img
                        src={hotel.pic}
                        width={905}
                        height={528}
                        quality={180}
                        alt=""
                        className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:w-[568px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                        <p className="mb-3 mzx-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Recommendation;
