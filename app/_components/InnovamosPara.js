import Image from "next/image";
import React from "react";
import innovFutu from "/public/assets/innov-futu.png";
import Link from "next/link";

export default function InnovamosPara() {
  return (
    <section className="md:py-[90px] py-[48px]">
      <div className="container">
        <div className="max-w-[1046px] mx-auto flex flex-col-reverse lg:flex-row gap-x-[68px] gap-y-[16px] items-center">
          <div className="lg:w-[49%] w-full flex flex-col gap-[16px] items-start">
            <h2 className="sm:text-[32px] text-[22px] text-center lg:text-start text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] w-full">
              Innovamos para tu <span className="text-bg-gd">Futuro</span>
            </h2>
            <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%]">
              Somos apasionados por la tecnología. <br /> Ofrecemos soluciones
              de software a tu medida, suministro de hardware, y plataformas
              SaaS diseñadas para optimizar y facilitar tus negocios.
            </p>
            <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%]">
              Te ayudamos a alcanzar tus metas.
            </p>
            <Link
              href="https://tidycal.com/oncorp/30-minute-meeting"
              target="_blank"
              className="bg-gd py-[11px] px-[24px] rounded-[6px] text-white text-[13px] font-bold  leading-[18px]  block w-fit mx-auto lg:w-auto lg:inline lg:mx-0"
            >
              <span>Habla con Nosotros</span>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="lg:max-w-[450px] sm:w-[100%] w-full  mx-auto">
              <Image
                src={innovFutu}
                alt=""
                className="lg:w-full w-full  rounded-[16px]"
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
