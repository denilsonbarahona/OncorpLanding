import Image from "next/image";
import React from "react";
import transformer from "/public/assets/about-us/transformer.webp";

export default function Transformer() {
  return (
    <section className="lg:py-[90px] py-[48px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center ">
          OnCorp nació con la visión de
          <span className="text-bg-gd"> transformar</span>{" "}
          <br className="hidden lg:block" /> el panorama tecnológico en
          <span className="text-bg-gd"> Honduras</span>
        </h1>

        <div className="flex items-center flex-col lg:flex-row lg:mt-8 mt-6">
          <Image
            src={transformer}
            alt=""
            className="rounded-[16px] w-full flex-1"
          />
          <div className="flex-1 lg:w-1/2">
            <div
              className="rounded-[16px] bg-white sm:px-[32px] p-[24px] sm:py-[48px] lg:mt-0 -mt-3 sm:-mt-8 lg:-ml-8 lg:w-full w-[90%] mx-auto"
              style={{ boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E] text-center lg:text-start">
                Hemos trabajado incansablemente para ofrecer soluciones
                innovadoras y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
