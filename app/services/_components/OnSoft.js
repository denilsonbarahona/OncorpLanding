import Image from "next/image";
import React from "react";
import charts from "/public/assets/services/charts.webp";

export default function OnSoft() {
  return (
    <section className="lg:py-[90px] py-[48px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          OnSoft
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[24px] max-w-[1216px] mx-auto">
          Nos dedicamos a crear soluciones tecnológicas que se adaptan
          perfectamente a las necesidades específicas de cada cliente.{" "}
          <br className="" /> <br className="lg:hidden" /> Desde sistemas web
          hasta aplicaciones móviles, ofrecemos productos de alta calidad{" "}
          <br className="hidden xl:block" /> diseñados para mejorar la
          eficiencia y productividad de tu negocio.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:my-12 my-8">
          <div
            className="rounded-[12px] lg:col-span-2 flex items-center justify-between gap-[48px] gap-y-2 py-6 lg:px-12 px-6 flex-col-reverse lg:flex-row"
            style={{
              background:
                "linear-gradient(228deg, #FFF 15.32%, rgba(239, 239, 239, 0.32) 67.83%)",
              boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="lg:w-[51%] w-full">
              <h2 className="text-[#344767] leading-[130%] text-[18px] sm:text-[26px] xl:text-[32px] sm:tracking-[-0.8px] font-bold">
                Creación de software a medida
              </h2>
              <p className="text-[#67748E] leading-[133%] text-[14px] sm:text-[18px] font-normal lg:mt-6 mt-2 ">
                Diseñamos y desarrollamos aplicaciones y sistemas personalizados
                que se alinean perfectamente con los objetivos y requerimientos
                de tu negocio.
              </p>
            </div>
            <div className="lg:w-[49%] w-full">
              <Image className="w-full " src={charts} alt="" />
            </div>
          </div>

          <div
            className="rounded-[12px]  py-6 lg:px-12 px-6"
            style={{
              background:
                "linear-gradient(228deg, #FFF 15.32%, rgba(239, 239, 239, 0.32) 67.83%)",
              boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="w-full">
              <h2 className="text-[#344767] leading-[130%] text-[18px] sm:text-[26px] xl:text-[32px] sm:tracking-[-0.8px] font-bold">
                Integración de sistemas
              </h2>
              <p className="text-[#67748E] leading-[133%] text-[14px] sm:text-[18px] font-normal lg:mt-6 mt-2 ">
                Aseguramos que tus nuevas soluciones de software se integren sin
                problemas con tus sistemas y procesos existentes.
              </p>
            </div>
          </div>

          <div
            className="rounded-[12px]  py-6 lg:px-12 px-6"
            style={{
              background:
                "linear-gradient(228deg, #FFF 15.32%, rgba(239, 239, 239, 0.32) 67.83%)",
              boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="">
              <h2 className="text-[#344767] leading-[130%] text-[18px] sm:text-[26px] xl:text-[32px] sm:tracking-[-0.8px] font-bold">
                Mantenimiento y soporte
              </h2>
              <p className="text-[#67748E] leading-[133%] text-[14px] sm:text-[18px] font-normal lg:mt-6 mt-2 ">
                Proveemos servicios continuos de mantenimiento y soporte para
                garantizar que tu software funcione de manera óptima en todo
                momento.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center sm:py-[48px] py-[24px] max-w-[1216px] mx-auto px-2">
          Estamos comprometidos con la entrega de soluciones de software que no
          solo satisfacen, <br className="hidden xl:block" /> sino que superan
          tus expectativas
        </p>
      </div>
    </section>
  );
}
