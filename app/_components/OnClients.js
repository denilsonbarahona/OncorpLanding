import React from "react";
import Marquee from "react-fast-marquee";

export default function OnClients() {
  return (
    <section className="md:py-[90px] py-[48px] overflow-hidden">
      <div className=" ">
        <div className="container">
          <h2 className="sm:text-[32px] text-[22px] text-center  text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] w-full">
            Nuestros clientes han elegido convertirse en
            <span className="text-bg-gd"> OnClients</span>
          </h2>

          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] text-center mt-[16px] ">
            Confiando en nuestras soluciones tecnológicas para impulsar su
            éxito.
          </p>
        </div>
        <div>
          <Marquee>
            <div className="flex  py-8 ">
              {data.map((dt, i) => (
                <div
                  key={i}
                  className="md:p-[20px] p-[16px] rounded-[15px] bg-white flex justify-center items-center mx-[15px] w-[123px] h-[72px] md:w-[217px] md:h-[118px]"
                  style={{
                    boxShadow: "0px 8.978px 29.5px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <img
                    className=" h-[40px] max-w-full md:h-auto"
                    src={dt.img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    img: "/assets/clients/rti.webp",
  },
  {
    img: "/assets/clients/unah.webp",
  },
  {
    img: "/assets/clients/enee.webp",
  },
  {
    img: "/assets/clients/sds.webp",
  },
  {
    img: "/assets/clients/prs.webp",
  },
  {
    img: "/assets/clients/ingm.webp",
  },
  {
    img: "/assets/clients/dgr.webp",
  },
  {
    img: "/assets/clients/ihah.webp",
  },
  {
    img: "/assets/clients/cec.webp",
  },
  {
    img: "/assets/clients/rti.webp",
  },
  {
    img: "/assets/clients/unah.webp",
  },
  {
    img: "/assets/clients/enee.webp",
  },
  {
    img: "/assets/clients/sds.webp",
  },
  {
    img: "/assets/clients/prs.webp",
  },
  {
    img: "/assets/clients/ingm.webp",
  },
  {
    img: "/assets/clients/dgr.webp",
  },
  {
    img: "/assets/clients/ihah.webp",
  },
  {
    img: "/assets/clients/cec.webp",
  },
];
