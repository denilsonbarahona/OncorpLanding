import Image from "next/image";
import React from "react";
import rack from "/public/assets/services/rack.webp";

export default function OnGear() {
  return (
    <section
      id="ongear"
      className="2xl:py-[220px] lg:py-[152px] sm:py-[128px] py-[96px]"
    >
      <div className="container">
        <div className="flex items-center flex-col-reverse lg:flex-row lg:mt-8 mt-6">
          <div className="flex-1 lg:w-1/2 relative">
            <div
              className="rounded-[16px] bg-white sm:px-[32px] p-[24px] xl:p-[48px] lg:mt-0 -mt-3 sm:-mt-8 lg:-mr-8 lg:w-full w-[90%] mx-auto"
              style={{ boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-bg-gd sm:mb-6 mb-2 text-center sm:text-start">
                OnGear
              </h1>
              <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E] ">
                Nuestros servicios incluyen la venta de hardware de alta
                calidad, garantizando que tu infraestructura tecnológica sea
                robusta y eficiente.
              </p>
            </div>
          </div>
          <Image
            src={rack}
            alt=""
            className="rounded-[16px] w-full flex-1  lg:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
