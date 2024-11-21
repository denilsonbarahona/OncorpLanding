import React from "react";

export default function OnStage() {
  return (
    <section className="py-[48px] lg:py-[90px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          OnStage
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[24px] max-w-[920px] mx-auto ">
          Nuestra división OnStage se especializa en el desarrollo de uso
          masivo, dentro de nuestros OnLabs creamos soluciones que cumplen las
          necesidades de muchos clientes en un solo software dedicado a su
          rubro.
        </p>

        <div className="mt-8 ml-8">
          <ol className="relative border-l-[4px] border-[#FF0180] ">
            {data.map((dt, i) => (
              <li className="sm:ms-16 ms-12 mb-20" key={i}>
                <span className="absolute flex items-center justify-center sm:w-[115px] w-[76px] h-[42px] rounded-full sm:-start-[55px] -start-[35px]  bg-white py-4 ">
                  <h2 className="lg:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] text-bg-gd">
                    {dt.title}
                  </h2>
                </span>
                <div>
                  <img
                    src={dt.img}
                    className="w-full rounded-[12px]"
                    alt=""
                    style={{
                      boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
                      background:
                        "linear-gradient(185deg, rgba(237, 237, 243, 0.61) -39.92%, #FFF 69.94%)",
                    }}
                  />
                </div>

                <div className="mt-[10px]">
                  {dt.text.map((tx, i2) => (
                    <p
                      key={i2}
                      className="text-[#67748E] sm:text-[18px] text-[14px] leading-[133%] font-normal py-1 "
                    >
                      {tx}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "Suiss",
    img: "/assets/projects/suiss3/Suiss1.jpg",
    text: [
      "Sistema para centralizar la información de los Programas del Sector Social y permitir el seguimiento a los avances en las ejecuciones. Proporciona opciones para efectuar análisis de datos, así como generar y observar los indicadores principales de cada programa.",
    ],
  },
  {
    title: "Nova",
    img: "/assets/projects/suiss3/nova.jpg",
    text: [
      "Plataforma de crowdlending en línea basada en criptomonedas. Facilita el acceso a financiamiento, promueve la inversión colaborativa y asegura transacciones seguras y eficientes. Ha transformado la manera de recolectar los fondos, permitiendo a los usuarios obtener préstamos de manera rápida y segura.",
    ],
  },
  {
    title: "Macuvi",
    img: "/assets/projects/suiss3/Macuvi2.jpg",
    text: [
      "Plataforma integral para la gestión de operaciones empresariales. Mejora la eficiencia operativa, centraliza procesos y facilita la toma de decisiones.",
    ],
  },
];
