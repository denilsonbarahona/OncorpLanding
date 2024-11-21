import Image from "next/image";
import React from "react";
import microsoft from "/public/assets/services/microsoft.webp";
import adobe from "/public/assets/services/adobe.webp";

export default function OnPartners() {
  return (
    <section className="py-[48px] lg:py-[90px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          OnPartners
        </h1>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[16px] max-w-[620px] mx-auto">
          Estos socios estratégicos nos permiten ofrecer soluciones integrales
          que cubren todas las necesidades tecnológicas de tu negocio.
        </p>

        <div className="flex justify-center flex-wrap gap-y-6 gap-[32px] items-center mt-8">
          <div className="flex items-center gap-3">
            <Image src={microsoft} alt="" />
            <h3 className="text-[31px] lg:text-[40px] font-bold leading-[116%] text-[#344767] tracking-[-0.8px] ">
              Microsoft
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Image src={adobe} alt="" />
            <h3 className="text-[40px] font-bold leading-[116%] text-[#344767]">
              Adobe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
