import WaveAnimation from "@/app/_components/WaveAnimation";
import React from "react";

export default function Hero() {
  return (
    <section
      id="contact-hero"
      className="lg:pt-[202px] pt-[266px] bg-cover md:pb-[480px] pb-[266px] relative"
    >
      <div className="container">
        <h1 className="text-[#D9D9D9] lg:text-[36px] text-[24px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mx-auto">
          Conecta con OnCorp tu aliado tecnológico
        </h1>
      </div>
      <WaveAnimation />
    </section>
  );
}
