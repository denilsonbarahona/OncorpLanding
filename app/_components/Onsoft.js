import Image from "next/image";
import React from "react";
import onSoft from "/public/assets/on-soft.webp";

export default function Onsoft() {
  return (
    <section className="md:py-[82px] py-[48px]">
      <div className="container">
        <div className="max-w-[1212px] mx-auto">
          <h2 className="sm:text-[36px] text-[22px]   text-[#344767] font-bold leading-[125%] tracking-[-0.8px] text-center mb-[16px]">
            Software personalizado: <span className="text-bg-gd">OnSoft</span>
          </h2>
          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] sm:text-center max-w-[897px] mx-auto">
            Creamos software a la medida para impulsar tu negocio, logrando
            mejoras de hasta un 89% en la eficiencia y un 55% en el crecimiento
            de tu negocio.
          </p>

          <Image
            src={onSoft}
            alt=""
            className="w-full sm:mt-[40px] mt-[24px]  "
          />
        </div>
      </div>
    </section>
  );
}
