import Image from "next/image";
import React from "react";

export default function Technology() {
  return (
    <section className="py-[48px] ">
      <div className="container">
        <h1 className="text-[#344767] text-[22px] lg:text-[32px] font-bold tracking-[-0.8px] leading-[137%] text-center mx-auto max-w-[1000px] ">
          Complementa tu infraestructura{" "}
          <span className="text-bg-gd">tecnológica</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4 mt-8">
          {data.map((dt, i) => (
            <div
              key={i}
              className="lg:p-8 lg:py-12 p-6 rounded-[12px] w-full "
              style={{
                boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
                background:
                  "linear-gradient(185deg, rgba(237, 237, 243, 0.61) -39.92%, #FFF 69.94%)",
              }}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={dt.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-[32px] sm:w-[48px]"
                />
                <h4 className="text-[#344767] text-[18px] sm:text-[24px] leading-[137%] font-bold tracking-[-0.8px]">
                  {dt.title}
                </h4>
              </div>

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
    title: "OnGadgets",
    icon: "/assets/services/gadget.svg",
    text: "Desde dispositivos innovadores hasta accesorios funcionales, te ofrecemos una selección de gadgets tecnológicos diseñados para complementar y mejorar tu entorno de trabajo.",
  },
  {
    title: "OnCloud",
    icon: "/assets/services/cloud.svg",
    text: "Ofrecemos servicios integrales que incluyen almacenamiento, infraestructura, y herramientas colaborativas de los principales proveedores del mercado.",
  },
];
