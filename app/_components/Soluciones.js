import Image from "next/image";
import React from "react";
import soluciones from "/public/assets/soluciones.png";
import solucionesSm from "/public/assets/soluciones-sm.svg";

export default function Soluciones() {
  return (
    <section className="md:py-[90px] py-[48px]">
      <div className="container">
        <div className="max-w-[1212px] mx-auto">
          <h2 className="sm:text-[36px] text-[22px]   text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mb-[16px]">
            <span className="text-bg-gd">Soluciones</span> para tu empresa
          </h2>
          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] sm:text-center">
            En OnCorp, creemos firmemente que la tecnología pública puede y debe
            ser de primer nivel, y estamos aquí para hacerlo realidad.
          </p>

          <Image
            src={soluciones}
            alt=""
            className="w-full sm:my-[32px] my-[23px] rounded-[16px] min-h-[317px] hidden sm:block"
          />
          <Image
            src={solucionesSm}
            alt=""
            className="w-full sm:my-[32px] my-[23px] rounded-[16px]  sm:hidden"
          />

          <h6 className="text-[#67748E] sm:text-[24px] text-[14px] font-normal leading-[108%] text-center">
            Estamos dedicados a hacer de esta visión una{" "}
            <span className="font-bold">realidad.</span>
          </h6>
        </div>
      </div>
    </section>
  );
}
