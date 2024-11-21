import Image from "next/image";
import React from "react";

export default function Experiencia() {
  return (
    <section className="pb-[51px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          Experiencia en diferentes industrias
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] lg:text-center sm:mt-[16px] mt-[16px] max-w-[1216px] mx-auto">
          OnCorp se dedica a servir a una amplia gama de industrias, desde
          comercio electrónico
        </p>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] lg:text-center mt-0  ">
          hasta fintech, asegurando siempre la más alta calidad en nuestros
          servicios.
        </p>

        <div className="flex flex-wrap justify-center sm:gap-8 gap-4 sm:mt-8 mt-6">
          {data.map((it, i) => (
            <div
              key={i}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(33%-2rem)] rounded-[12px]  flex items-start gap-4 sm:gap-y-6 gap-y-2 justify-start flex-col bg-white lg:py-[48px] p-[24px] sm:px-[32px]"
              style={{
                boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="flex items-center gap-2">
                <Image
                  width={44}
                  height={44}
                  src={it.icon}
                  alt=""
                  className="w-[40px] sm:w-[44px] aspect-square"
                />
                <h2 className="text-[#344767] text-[18px] sm:text-[24px] font-bold leading-[116%] ">
                  {it.title}
                </h2>
              </div>

              <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] ">
                {it.text}
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
    title: "Comercio Electrónico",
    icon: "/assets/projects/experiance/mobile-shopping.webp",
    text: "Desarrollamos plataformas de e-commerce que facilitan la venta en línea, optimizando la experiencia del usuario y aumentando la conversión de ventas.",
  },
  {
    title: "Fintech",
    icon: "/assets/projects/experiance/digital-economy.webp",
    text: "Ofrecemos soluciones tecnológicas para el sector financiero, incluyendo aplicaciones de banca móvil, sistemas de pago digital y herramientas de gestión financiera.",
  },
  {
    title: "Videojuegos y Entretenimiento",
    icon: "/assets/projects/experiance/game-control.webp",
    text: "Creamos experiencias de entretenimiento digital mediante el desarrollo de videojuegos que capturan el interés de los usuarios.",
  },
  {
    title: "Educación y Capacitación",
    icon: "/assets/projects/experiance/school.webp",
    text: "Desarrollamos plataformas educativas y herramientas de capacitación en línea que facilitan el aprendizaje y mejoran la accesibilidad a la educación.",
  },
  {
    title: "Retail",
    icon: "/assets/projects/experiance/store.webp",
    text: "Implementamos soluciones tecnológicas para el sector minorista, mejorando la gestión de inventarios, las ventas y la experiencia del cliente.",
  },
  {
    title: "Redes Sociales",
    icon: "/assets/projects/experiance/social-media.webp",
    text: "Desarrollamos redes sociales personalizadas que fomentan la interacción de los usuarios, proporcionando herramientas de comunicación y colaboración.",
  },
  {
    title: "Ciberseguridad",
    icon: "/assets/projects/experiance/cyber-security.webp",
    text: "Proveemos servicios de ciberseguridad que protegen los datos y sistemas de las empresas, asegurando la integridad y confidencialidad de la información.",
  },
  {
    title: "Salud y Bienestar",
    icon: "/assets/projects/experiance/heart.webp",
    text: "Ofrecemos soluciones tecnológicas para el sector salud, incluyendo los sistemas necesarios para una optima atención medica y gestión de recursos.",
  },
  {
    title: "Gobierno",
    icon: "/assets/projects/experiance/government.webp",
    text: "Ofrecemos soluciones tecnológicas para instituciones gubernamentales, mejorando la eficiencia administrativa mediante sistemas de gestión pública innovadores.",
  },
];
