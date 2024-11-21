import React from "react";

import Image from "next/image";

export default function Expertos() {
  return (
    <section className="lg:py-[90px] py-[48px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center ">
          Un equipo de <span className="text-bg-gd">expertos</span> apasionados
        </h1>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] sm:text-center sm:mt-[16px] mt-[24px] max-w-[1216px] mx-auto">
          Conoce a los miembros clave que lideran nuestros proyectos, combinando
          creatividad, <br className="hidden lg:block" /> conocimiento técnico y
          una dedicación excepcional para ofrecer los mejores resultados.
        </p>

        <div className="flex flex-wrap justify-center sm:gap-8 gap-4 max-w-[1216px] mx-auto sm:mt-8 mt-6">
          {data.map((it, i) => (
            <div
              key={i}
              className=" w-[calc(50%-1rem)] xl:w-[calc(33%-2rem)] rounded-[16px] bg-white sm:p-5 py-6  flex items-center gap-4 gap-y-6  flex-col md:flex-row p-2"
              style={{
                boxShadow: "0px 20px 16px 0px rgba(103, 101, 101, 0.05)",
              }}
            >
              <div className="max-w-[75px] min-w-[75px] h-[75px]  ">
                <Image
                  src={it.img}
                  alt=""
                  className="w-full h-full aspect-square rounded-full"
                  width={75}
                  height={75}
                />
              </div>

              <div className="">
                <h5 className="text-bg-gd text-[14px] sm:text-[20px] font-bold leading-[130%] sm:tracking-[-0.8px] ">
                  {it.name}
                </h5>
                <p className="text-[#67748E] sm:text-[18px] text-[12px] font-normal leading-[144%]">
                  {it.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    name: "Mario Portillo",
    img: "/assets/about-us/expert/mario.webp",
    about: "CEO",
  },
  {
    name: "Rony Mejía",
    img: "/assets/about-us/expert/rony.webp",
    about: "COO",
  },
  {
    name: "Denilson Barahona",
    img: "/assets/about-us/expert/denilson.webp",
    about: "CTO",
  },
  {
    name: "Edwin Espino",
    img: "/assets/about-us/expert/edwin.webp",
    about: "Infrastructure Specialist and Software Architect",
  },
  {
    name: "Felipe Moncada ",
    img: "/assets/about-us/expert/felipe.webp",
    about: "Lead Database Administrator",
  },
  {
    name: "Gabriela Rodríguez",
    img: "/assets/about-us/expert/gabriela.webp",
    about: "Technical Documentation Analyst",
  },
  {
    name: "Carlos Godoy",
    img: "/assets/about-us/expert/carlos.webp",
    about: "VP of Business Development",
  },
  {
    name: "Josué Flores",
    img: "/assets/about-us/expert/josue.webp",
    about: "Lead Backend",
  },
  {
    name: "Marion Bustamante",
    img: "/assets/about-us/expert/marion.webp",
    about: "Lead FullStack",
  },
];
