import Image from "next/image";
import React from "react";

export default function Utilizamos() {
  return (
    <section className=" py-[48px] lg:pb-[60px]">
      <div className="container">
        <h1 className="text-[#344767] text-[22px] lg:text-[28px] font-bold tracking-[-0.8px] leading-[137%] text-center mx-auto max-w-[1000px]">
          Utilizamos las metodologías más avanzadas y reconocidas en la
          industria para asegurar la calidad y la innovación en cada proyecto.
        </h1>

        <div className="flex flex-wrap justify-center lg:gap-8 gap-4 mt-10">
          {data.map((dt, i) => (
            <div
              key={i}
              className="p-8 rounded-[12px] w-full lg:w-[calc(50%-2rem)]"
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
                  width={44}
                  height={44}
                  className="w-[40px] sm:w-[44px]"
                />
                <h4 className="text-[#344767] text-[18px] sm:text-[24px] leading-[116% font-bold tracking-[-0.8px]">
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
    title: "Design Thinking",
    icon: "/assets/services/design-thinking.webp",
    text: "Un enfoque de diseño centrado en el usuario que promueve la creatividad y la resolución de problemas, asegurando que nuestras soluciones centradas en el cliente.",
  },
  {
    title: "Customer Journey",
    icon: "/assets/services/location.webp",
    text: "Analizamos el recorrido del cliente para entender mejor sus necesidades y expectativas, permitiéndonos diseñar soluciones que mejoren la experiencia del usuario.",
  },
  {
    title: "Scrum",
    icon: "/assets/services/scrum.webp",
    text: "Implementamos esta metodología ágil para gestionar el desarrollo de proyectos de software de manera iterativa e incremental, permitiendo adaptaciones rápidas y una entrega continua de valor.",
  },
  {
    title: "Cadena de Valor",
    icon: "/assets/services/value-chain.webp",
    text: "Evaluamos todas las actividades que agregan valor en el proceso de desarrollo de software, asegurando que cada paso ayude a la creación de un producto de alta calidad.",
  },
];
