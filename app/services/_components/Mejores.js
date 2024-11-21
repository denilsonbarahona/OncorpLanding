import Image from "next/image";
import React from "react";

export default function Mejores() {
  return (
    <section>
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center ">
          Nos guiamos por las <span className="text-bg-gd">mejores</span>{" "}
          prácticas en la industria
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[24px] max-w-[1216px] mx-auto">
          Nuestro enfoque de desarrollo de software se basa en un
          <br className="hidden xl:block" /> análisis detallado de los procesos
          de tu negocio
        </p>

        <div className="flex flex-wrap gap-x-[32px] mt-8 mb-10 justify-center">
          {data.map((dt, i) => (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-2rem)] xl:w-[calc(33.33%-2rem)] px-12 py-6 flex flex-col gap-6 items-center"
            >
              <Image
                width={126}
                height={126}
                src={dt.icon}
                alt=""
                className="w-[77px] sm:w-[80px] xl:w-[126px]"
              />
              <p className="text-center text-[14px] sm:text-[18px] font-normal leading-[133% text-[#67748E] ">
                {dt.title}
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
    icon: "/assets/services/analis.webp",
    title: "Análisis y mejora de procesos",
  },
  {
    icon: "/assets/services/write.webp",
    title: "Diseño y construcción de soluciones",
  },
  {
    icon: "/assets/services/setting.webp",
    title: "Implementación y soporte",
  },
];
