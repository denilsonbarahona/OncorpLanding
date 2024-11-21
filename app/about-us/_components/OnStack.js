import Image from "next/image";
import React from "react";

export default function OnStack() {
  return (
    <section className="lg:py-[68px] py-[48px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          OnStack
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center sm:mt-[16px] mt-[16px] max-w-[1216px] mx-auto">
          Nos guiamos por las mejores prácticas en la industria.
        </p>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center mt-4 sm:mt-0  ">
          Utilizamos nuevas tecnologías para ofrecer soluciones robustas y de
          última generación.
        </p>

        <div className="flex flex-wrap justify-center sm:gap-8 gap-4 sm:mt-8 mt-6">
          {data.map((it, i) => (
            <div
              key={i}
              className=" w-[calc(50%-1rem)] lg:w-[calc(33%-2rem)] rounded-[12px] bg-white sm:p-5 py-6 text-center flex items-center gap-4 gap-y-2 justify-center flex-col  aspect-square"
              style={{
                boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
                background:
                  "linear-gradient(185deg, rgba(237, 237, 243, 0.61) -39.92%, #FFF 69.94%)",
              }}
            >
              <Image
                width={100}
                height={100}
                src={it.icon}
                alt=""
                className="w-[50px] sm:w-[100px] aspect-square"
              />

              <div>
                <p className="text-[#344767] sm:text-[24px] text-[16px] font-normal leading-[137%] sm:tracking-[-0.8px]">
                  {it.title}
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
    icon: "/assets/about-us/logos/js.webp",
    title: "JavaScript",
  },
  {
    icon: "/assets/about-us/logos/react.webp",
    title: "React",
  },
  {
    icon: "/assets/about-us/logos/angular.webp",
    title: "Angular",
  },
  {
    icon: "/assets/about-us/logos/python.webp",
    title: "Python",
  },
  {
    icon: "/assets/about-us/logos/swift.webp",
    title: "Switf",
  },
  {
    icon: "/assets/about-us/logos/kotlin.webp",
    title: "Kotlin",
  },
  {
    icon: "/assets/about-us/logos/sql.webp",
    title: "SQL Server",
  },
  {
    icon: "/assets/about-us/logos/postgresql.webp",
    title: "PostreSQL",
  },
  {
    icon: "/assets/about-us/logos/mongodb.webp",
    title: "MongoDB",
  },
];
