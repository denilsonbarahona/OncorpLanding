"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import WaveAnimation from "./WaveAnimation";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home-hero"
      className="lg:py-[202px] py-[255px] bg-cover relative"
    >
      <div className="container">
        <h1 className="text-gd lg:text-[48px] text-[23px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center  mx-auto">
          Turn On your life with
        </h1>
        <h1 className="text-gd lg:text-[48px] text-[23px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center  mx-auto">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "OnCorporation",
              1000,
              "O",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>

        <p className="text-center text-gd font-normal leading-[125%] text-[14px] sm:text-[20px] sm:tracking-[-0.8px] max-w-[600px] mx-auto sm:mb-[48px] mt-[16px] mb-[36px]">
          Automatizamos y mejoramos los procesos de tu empresa u organización
          con software hecho a la medida.
        </p>

        <Link
          href="https://tidycal.com/oncorp/30-minute-meeting"
          target="_blank"
          className="bg-gd py-[13px] px-[66px] rounded-[8px] text-white text-[14px] font-bold tracking-[-0.56px] leading-[19px] w-fit mx-auto block"
        >
          <span>Habla con Nosotros</span>
        </Link>
      </div>

      <WaveAnimation />
    </section>
  );
}
