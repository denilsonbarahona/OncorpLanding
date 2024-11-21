import Image from "next/image";
import React from "react";

export default function OnSupply() {
  return (
    <section className=" py-[48px] lg:py-[90px]">
      <div className="container">
        <h1 className="text-[#344767] text-[22px] lg:text-[28px] font-bold tracking-[-0.8px] leading-[137%] text-center mx-auto max-w-[1000px] text-bg-gd">
          OnSupply
        </h1>

        <p className="text-[#67748E] text-[14px] sm:text-[18px] leading-[133%] font-normal mt-4 sm:text-center mx-auto max-w-[900px]">
          OnSupply es nuestra división dedicada a la venta de licencias de
          software. Trabajamos con los principales proveedores de software del
          mercado, te acompañamos mientras aprendes a configurarlas y usarlas.
        </p>

        <div className="flex flex-wrap justify-center lg:gap-8 gap-4 mt-4">
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
                <h4 className="text-[#344767] text-[18px] sm:text-[24px] leading-[116% font-bold ">
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
    title: "Microsoft",
    icon: "/assets/services/microsoft.webp",
    text: "Somos distribuidores autorizados de Microsoft, brindando acceso a sus soluciones de software líderes en el mercado. Desde licencias para productividad empresarial hasta herramientas avanzadas para la gestión de TI.",
  },
  {
    title: "Adobe",
    icon: "/assets/services/adobe.webp",
    text: "Como distribuidores de Adobe, ofrecemos desde herramientas para diseño gráfico, edición de video y creación digital hasta soluciones de documentos inteligentes.",
  },
  {
    title: "Antivirus",
    icon: "/assets/services/antivirus.webp",
    text: "Trabajamos con proveedores líderes en seguridad digital y te ofrecemos las principales soluciones de antivirus del mercado, proporcionando protección avanzada para tus dispositivos y datos.",
  },
  {
    title: "Cloud Computing",
    icon: "/assets/services/server.webp",
    text: "Brindamos soluciones de Cloud Computing, diseñadas para optimizar tus operaciones y aumentar la flexibilidad de tu negocio, incluyendo almacenamiento en la nube más herramientas avanzadas de colaboración y análisis.",
  },
  {
    title: "Desarrollo y Virtualización",
    icon: "/assets/services/vr.webp",
    text: "Nuestras soluciones contemplan la creación de entornos virtuales con herramientas avanzadas para desarrollo de software, permitiendo la optimización del ciclo de construcción y despliegue de los componentes de software.",
  },
];
