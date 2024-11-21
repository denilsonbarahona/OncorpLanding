import Image from "next/image";
import React from "react";
import oncae from "/public/assets/oncae.webp";

export default function Proveedores() {
  return (
    <section className="py-[90px] ">
      <div className="container">
        <h2 className="sm:text-[32px] text-[22px] text-center  text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] w-full mb-[32px]">
          <span className="text-bg-gd">
            Proveedores autorizados del estado de Honduras
          </span>
        </h2>
        <div className="max-w-[1070px] mx-auto lg:grid grid-cols-2 flex flex-col lg:flex-row gap-x-[16px] gap-y-[16px] items-center">
          <div className="flex justify-center items-center w-full">
            <Image
              src={oncae}
              alt=""
              className="sm:max-w-[441px] w-[90%] max-w-[250px]"
            />
          </div>
          <div
            className="flex-1 h-full px-[24px] lg:py-[48px] py-[24px] bg-white rounded-[16px] flex
            justify-center items-center"
            style={{ boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] text-center max-w-[471px] mx-auto lg:my-[64px]">
              En OnCorp, nos sentimos orgullosos de ser proveedores autorizados
              del estado de Honduras, inscritos en ONCAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
