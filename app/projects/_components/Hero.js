import WaveAnimation from "@/app/_components/WaveAnimation";
import React from "react";

export default function Hero() {
  return (
    <section
      id="projects-hero"
      className="lg:pt-[306px] lg:pb-[293px] pt-[288px] pb-[226px] bg-cover relative"
    >
      <div className="container">
        <h1 className="text-[#D9D9D9] lg:text-[48px] text-[23px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mx-auto">
          Soluciones de Vanguardia
        </h1>

        <p className="text-center text-gd font-normal leading-[125%] text-[14px] sm:text-[20px] sm:tracking-[-0.8px] max-w-[670px] mx-auto sm:mb-[48px] mt-[16px] sm:w-[90%]">
          Cada proyecto es una oportunidad para innovar y superar expectativas.
        </p>
      </div>
      <WaveAnimation />
    </section>
  );
}
