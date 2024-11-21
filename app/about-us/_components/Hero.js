import WaveAnimation from "@/app/_components/WaveAnimation";
import React from "react";

export default function Hero() {
  return (
    <section
      id="about-us-hero"
      className="lg:pt-[317px] lg:pb-[232px] pt-[255px] pb-[211px] bg-cover relative"
    >
      <div className="container">
        <h1 className="text-gd lg:text-[48px] text-[23px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mx-auto">
          Conoce a los innovadores detrás de OnCorp
        </h1>

        <p className="text-center text-gd font-normal leading-[125%] text-[14px] sm:text-[20px] sm:tracking-[-0.8px] max-w-[670px] mx-auto sm:mb-[48px] mt-[16px] w-[90%]">
          Desde nuestra fundación, hemos estado impulsando la transformación
          digital.
        </p>
      </div>
      <WaveAnimation />
    </section>
  );
}
