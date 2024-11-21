import Image from "next/image";
import React from "react";
import exito from "/public/assets/projects/exito.webp";

export default function Exito() {
  return (
    <section className="py-[51px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          Nuestros Clientes Opinan
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[24px] max-w-[1216px] mx-auto">
          En OnCorp, nos enorgullecemos de nuestros proyectos innovadores y
          destacados <br className="hidden xl:block" /> que han generado
          resultados significativos para nuestros clientes.
        </p>

        <Image
          className="max-w-[767px] w-full mx-auto sm:my-[32px] my-6"
          src={exito}
          alt=""
        />
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center sm:mt-[16px] mt-[16px] max-w-[1216px] mx-auto italic px-3 sm:px-0">
          “OnCorp ha superado todas nuestras expectativas con su profesionalismo
          <br className="hidden xl:block" /> y calidad en la entrega de
          proyectos”
        </p>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center sm:mt-[16px] mt-[16px] max-w-[1216px] mx-auto">
          Alberto Romero, CTO Solar Systems
        </p>
      </div>
    </section>
  );
}
