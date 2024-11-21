import WaveAnimation from "@/app/_components/WaveAnimation";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="services-hero"
      className="lg:pt-[176px] lg:pb-[135px] 2xl:pb-[185px] pt-[221px] pb-[159px] bg-cover relative"
    >
      <div className="container">
        <div className="flex lg:grid grid-cols-2 items-center xl:min-h-[485px] lg:min-h-[400px]">
          <div className="w-full flex flex-col lg:gap-8 gap-4 items-start justify-center">
            <h2 className="text-[#D9D9D9] font-bold sm:tracking-[-0.8px] text-[24px] sm:text-[36px] leading-[130%] text-center lg:text-start">
              Soluciones Tecnológicas que Transforman tu Negocio
            </h2>
            <p className="text-[#D9D9D9] sm:tracking-[-0.8px] text-[14px] sm:text-[20px] sm:leading-[137%] leading-[142%]  text-center lg:text-start sm:w-[90%] lg:w-full mx-auto">
              Ofrecemos una amplia gama de servicios tecnológicos diseñados para
              impulsar la eficiencia y el crecimiento de tu empresa.
            </p>

            <Link
              target="_blank"
              href="https://tidycal.com/oncorp/30-minute-meeting"
              className="bg-gd py-[13.5px]  px-[50px] lg:px-[24px] rounded-[6px] text-white text-[14px] lg:text-[13px] font-bold  leading-[18px]  block w-fit mx-auto lg:w-auto lg:inline lg:mx-0 mt-[20px] lg:mt-0 "
            >
              <span>Habla con Nosotros</span>
            </Link>
          </div>
          <div className="lg:w-full hidden lg:block relative h-full">
            <div className="absolute xl:w-[175px] w-[150px] aspect-square rounded-full bg-white flex justify-center items-center top-0 xl:right-[55%] right-[30%]">
              <span className="text-[#344767] xl:text-[32px] text-[24px] leading-[137%] sm:tracking-[-0.8px] font-bold">
                OnGuide
              </span>
            </div>
            <div className="absolute xl:w-[230px] w-[180px] aspect-square rounded-full bg-white flex justify-center items-center 2xl:bottom-4 xl:bottom-2 bottom-[10%]  xl:right-[50%] right-[30%]">
              <span className="text-[#344767] xl:text-[32px] text-[24px] leading-[137%] sm:tracking-[-0.8px] font-bold">
                OnSoft
              </span>
            </div>
            <div className="absolute xl:w-[150px] w-[100px] aspect-square rounded-full bg-white flex justify-center items-center bottom-[40%] right-0">
              <span className="text-[#344767] xl:text-[32px] text-[24px] leading-[137%] sm:tracking-[-0.8px] font-bold">
                OnGear
              </span>
            </div>
            <div className="absolute xl:w-[75px] w-[50px] aspect-square rounded-full bg-white flex justify-center items-center xl:bottom-[60%] bottom-[52%] xl:right-[30%] right-[25%]"></div>
          </div>
        </div>
      </div>
      <WaveAnimation />
    </section>
  );
}
