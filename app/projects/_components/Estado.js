import React from "react";
import provved from "/public/assets/projects/provved.webp";
import Image from "next/image";
import Link from "next/link";

export default function Estado() {
  return (
    <section className="md:py-[90px] py-[48px] overflow-hidden">
      <div className="container">
        <div className="max-w-[1051px] mx-auto flex flex-col lg:flex-row gap-x-[68px] gap-y-[24px] items-center">
          <div className="lg:w-[51%] flex flex-col lg:gap-[16px] gap-y-6 items-start">
            <h2 className="sm:text-[32px] text-[22px] text-center lg:text-start text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] w-full">
              Proveedores del <span className="text-bg-gd">Estado</span>
            </h2>

            <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%]">
              Estamos registrados en ONCAE como proveedores autorizados del
              gobierno de Honduras, brindando los mejores estándares de calidad
              y servicio.
            </p>

            <Link
              href="https://tidycal.com/oncorp/30-minute-meeting"
              target="_blank"
              className="bg-gd py-[11px] px-[24px] rounded-[6px] text-white text-[13px] font-bold  leading-[18px]  block w-fit mx-auto lg:w-auto lg:inline lg:mx-0 "
            >
              <span> Habla con Nosotros</span>
            </Link>
          </div>
          <div className="w-full lg:w-auto">
            <div className="lg:max-w-[450px] sm:w-full w-full  mx-auto">
              <Image
                src={provved}
                alt=""
                className="lg:w-full w-full lg:max-w-[450px]  rounded-[16px]"
                style={{
                  boxShadow: "0px 20px 26px 0px rgba(113, 101, 101, 0.25)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
