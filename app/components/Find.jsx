'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const hotelData = [
    {
        image: '/find/hotel-1.png',
        name: 'Hotel De Luna',
        location: 'Singapore'
    },
    {
        image: '/find/hotel-2.png',
        name: 'Hotel De Luna',
        location: 'Canada'
    },
    {
        image: '/find/hotel-3.png',
        name: 'Hotel De Luna',
        location: 'China'
    },
    {
        image: '/find/hotel-4.png',
        name: 'Hotel De Luna',
        location: 'Japan'
    },
]

const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.2}}
        className="text-center">
            <h2 className="h2 mb-6">Fond Your Best Hotel</h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2}}
            className="max-w-[638px] mx-auto mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error nulla repellat deleniti, saepe dolor nesciunt in, tenetur necessitatibus quaerat veniam enim minus, possimus perferendis iste? Voluptas, reprehenderit dolorem!
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2}}
            >
                <Button variant='accent' className='px-12 mb-14 xl:mb-28'>
                    View All
                </Button>
            </motion.div>
        </motion.div>
        {/* hotel grid */}
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.2}}
        className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 cl:gap-x-[30px]">
            {hotelData.map((hotel, index) => {
                return(
                    <div
                    className="border-2 border-outline w-[270px] h-[280px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
                    key={index}
                    ><Image
                    src={hotel.image}
                    width={270}
                    height={270}
                    alt=""
                    className="h-[166px]"
                    />
                    <div className="p-6">
                        <h4 className="h4 group-hover:text-white transition-all duration-300">
                            {hotel.name}
                        </h4>
                        <p className="group-hover:text-white transition-all duration-300">{hotel.location}</p>
                    </div>
                    </div>
                )
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Find
