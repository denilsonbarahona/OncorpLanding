import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleMap from "./GoogleMap";

export default function Address() {
  return (
    <section className="pt-[67px] pb-[48px]">
      <div className="container">
        <div className="flex items-center flex-col gap-y-4 lg:flex-row lg:mt-8 mt-6">
          <div className="flex-1 lg:w-1/2   w-full">
            <GoogleMap />
          </div>
          <div className="flex-1 lg:w-1/2 ">
            <div
              className="rounded-[16px] bg-white sm:px-[32px] p-[24px] sm:py-[48px] mt-0  sm:-mt-8 lg:-ml-8 lg:w-full w-full mx-auto"
              style={{ boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <h1 className="sm:text-[24px] text-[20px] text-bg-gd leading-[137%] tracking-[-0.8px] font-bold text-center lg:text-start">
                ¿Prefieres hablar directamente con nosotros?
              </h1>
              <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E]  mt-4">
                Aquí tienes nuestras formas de contacto
              </p>

              <div className="flex gap-[16px] flex-col mt-6">
                <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E]  flex gap-[10px] items-center">
                  {" "}
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icon/telephone.svg"
                    alt=""
                  />
                  +504 9421-7777
                </p>
                <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E]   flex gap-[10px] items-center">
                  {" "}
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icon/mail.svg"
                    alt=""
                  />
                  contacto@oncorp.io
                </p>
                <p className="text-[14px] sm:text-[18px] leading-[133%] font-normal text-[#67748E]    flex gap-[10px] items-start">
                  {" "}
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icon/location.svg"
                    alt=""
                  />
                  Centro Empresarial los Próceres, Novacentro, Boulevard
                  Morazán, Tegucigalpa MDC.
                </p>
                <Link
                  href="https://tidycal.com/oncorp/30-minute-meeting"
                  target="_blank"
                  className="bg-gd mt-4 py-[13px] px-[66px] rounded-[8px] text-white text-[14px] font-bold tracking-[-0.56px] leading-[19px] w-fit  block"
                >
                  <span>Agenda sin costo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
