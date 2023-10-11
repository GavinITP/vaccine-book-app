"use client";

import Image from "next/image";
import { useState } from "react";
import { bannerImages } from "@/data/bannerImages";
import { useRouter } from "next/navigation";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  return (
    <section className="grid grid-cols-2 gap-40 px-28 py-20 mt-[80px]">
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

      <div className="relative">
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

        <button
          onClick={() => {
            router.push("/hospital");
          }}
          className="absolute right-0 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Hospital
        </button>
      </div>
    </section>
  );
};

export default Banner;
