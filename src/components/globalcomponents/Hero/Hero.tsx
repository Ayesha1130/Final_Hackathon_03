"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <Banner />
    </div>
  );
}

function Banner() {
  const images = [
    "https://res.cloudinary.com/dqxlauiil/image/upload/v1738827725/p3_qjvnsm.avif",
    "https://res.cloudinary.com/dqxlauiil/image/upload/v1738827725/p4_vz8qjz.jpg",
    "https://res.cloudinary.com/dqxlauiil/image/upload/v1738827746/p1_cwbeva.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images[activeIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Centered */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Discover Timeless Comfort
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Elevate your space with our premium furniture collection, crafted for style and durability.
        </p>
        <Link href="/product">
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg shadow-lg">
            Explore Collection
          </button>
        </Link>
      </div>
    </div>
  );
}
