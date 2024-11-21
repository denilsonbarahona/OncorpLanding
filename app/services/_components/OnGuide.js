import Image from "next/image";
import React from "react";
import guide from "/public/assets/services/guide.webp";
import guideSm from "/public/assets/services/guide-sm.png";

export default function OnGuide() {
  return (
    <section className="md:py-[90px] py-[48px]">
      <div className="container">
        <div className="max-w-[1212px] mx-auto">
          <h2 className="sm:text-[36px] text-[22px]   text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mb-[16px]">
            <span className="text-bg-gd">OnGuide</span>
          </h2>
          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] sm:text-center">
            División encargada de asesorías informáticas y optimización de
            procesos.
          </p>
          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] sm:text-center mt-6">
            Ofrecemos servicios de consultoría para optimizar tus procesos
            empresariales. Nuestros expertos trabajan contigo para identificar
            áreas de mejora e implementar soluciones efectivas que incrementen
            la eficiencia y productividad de tu organización.
          </p>

          <Image
            src={guideSm}
            alt=""
            className="w-full rounded-[12px] sm:mt-[32px] mt-[24px]  min-h-[257px] sm:hidden "
            style={{ boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05);" }}
          />
          <Image
            src={guide}
            alt=""
            className="w-full rounded-[12px] sm:mt-[32px] mt-[24px]  min-h-[257px] hidden sm:block"
            style={{ boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05);" }}
          />
        </div>
      </div>
    </section>
  );
}
