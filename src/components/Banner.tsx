"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { bannerImages } from "@/data/bannerImages";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className="grid grid-cols-2 px-28 py-20 mt-[80px]">
      <div>
        <p className="mb-4 bg-blue-100 rounded-full py-2 px-4 shadow-md max-w-max text-xs text-blue-500 uppercase">
          #1 vaccine booking app
        </p>
        <h1 className="text-6xl font-extrabold my-8 capitalize">
          Moh Promt Mak
        </h1>
        <p className="text-md text-gray-500 mb-14">
          Simplify vaccine booking across Thailand with our user-friendly app.
          <br />
          Choose center, date, and time all in one place.
          <br />
          Secure your vaccination slot effortlessly and contribute to a safer
          future.
        </p>
        <Button variant="filled" size="lg" href="/booking">
          Booking
        </Button>
        <Button variant="outlined" size="lg" className="ml-4" href="">
          Learn More
        </Button>
      </div>

      <Image
        onClick={() => {
          setImageIndex((prev) => (prev + 1) % 4);
        }}
        src={bannerImages[imageIndex]}
        className="rounded-xl shadow-xl hover:scale-[1.01] duration-200 justify-self-end"
        alt="A woman get vaccinated."
        width={500}
        height={300}
      />
    </section>
  );
};

export default Banner;
