import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        
      <section className="relative w-full overflow-hidden rounded-lg"> 
        
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-1.jpg" 
            alt="ShopEase Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-70" 
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] p-8"> 
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to ShopEase
          </h1>
          <p className="text-lg md:text-2xl text-white font-extrabold mb-6">
            Your one-stop online shop for everything you love.
          </p>
          
          <a
            href="/shop"
            className="bg-purple-400 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-800 transition"
          >
            Start Shopping
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;