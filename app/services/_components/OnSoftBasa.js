import Image from "next/image";
import React from "react";

export default function OnSoftBasa() {
  return (
    <section className=" py-[48px] lg:py-[90px]">
      <div className="container">
        <h1 className="text-[#344767] text-[22px] lg:text-[32px] font-bold tracking-[-0.8px] leading-[137%] text-center mx-auto max-w-[860px]">
          <span className="text-bg-gd">OnSoft</span> basa sus principios y
          evaluaciones en estándares y normativas internacionales, incluyendo:
        </h1>

        <div className="flex flex-wrap justify-center lg:gap-8 gap-4 mt-10">
          {data.map((dt, i) => (
            <div
              key={i}
              className="p-8 rounded-[12px] w-full md:w-[calc(50%-2rem)] xl:w-[calc(33.33%-2rem)]"
              style={{
                boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
                background:
                  "linear-gradient(185deg, rgba(237, 237, 243, 0.61) -39.92%, #FFF 69.94%)",
              }}
            >
              <h4 className="text-[#344767] text-[18px] sm:text-[24px] leading-[116% font-bold tracking-[-0.8px]">
                {dt.title}
              </h4>

              <p className="sm:mt-4 mt-2 text-[#67748E] text-[14px] sm:text-[18px] leading-[133%] font-normal lg:max-w-[528px]">
                {dt.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "ISO-27001",
    text: "Establece los requisitos para un sistema de gestión de la seguridad de la información.",
  },
  {
    title: "ISO-31000",
    text: "Proporciona principios y directrices para la gestión del riesgo.",
  },
  {
    title: "ISO 9001",
    text: "Especifica los requisitos para un sistema de gestión de calidad.",
  },
  {
    title: "ISO/IEC 20000",
    text: "Proporciona un marco para gestionar el ciclo de vida del servicio.",
  },
  {
    title: "ITIL",
    text: "Se centra en la alineación de los servicios de TI con las necesidades del negocio.",
  },
  {
    title: "CMMI",
    text: "Modelo de mejora de procesos que proporciona los elementos esenciales para un proceso eficaz.",
  },
];
