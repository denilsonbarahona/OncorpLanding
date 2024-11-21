import { EmptyCircle } from "@/app/Icons";
import React from "react";

export default function TodoLo() {
  return (
    <section className="py-[48px] lg:py-[90px]">
      <div className="container">
        <h1 className="text-[#344767] sm:text-[32px] text-[22px] font-bold sm:tracking-[-0.8px] leading-[130%] text-center text-bg-gd ">
          Todo lo que necesites, OnCorp lo ofrece
        </h1>

        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center sm:mt-[16px] mt-[16px] max-w-[1216px] mx-auto">
          OnCorp se organiza en varias divisiones especializadas en abordar
        </p>
        <p className="text-[#67748E] sm:text-[18px] text-[14px]  font-normal sm:tracking-[-0.8px] sm:leading-[133%] leading-[142%] text-center  sm:mt-[8px] max-w-[1216px] mx-auto">
          las diferentes necesidades tecnológicas de nuestros OnClients.
        </p>

        <div className="xl:h-[938px] md:h-[600px] h-[443px]  relative">
          <div className="circle-box xl:w-[267px] lg:w-[150px] md:w-[120px] w-[80px] aspect-square rounded-full absolute sm:left-[10.11%] sm:top-[28.99%] top-[36.34%] left-[9px] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnGear
            </span>
          </div>
          <div className="circle-box xl:w-[267px] lg:w-[150px] md:w-[120px] w-[80px] aspect-square rounded-full absolute sm:top-[6.9%] top-[9.5%] sm:left-[40.5%] left-[28.85%] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnSoft
            </span>
          </div>
          <div className="circle-box xl:w-[267px] lg:w-[150px] md:w-[120px] w-[100px] aspect-square rounded-full absolute sm:bottom-[5.9%] bottom-[9.2%] sm:left-[25.5%] left-[18.7%] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnPartners
            </span>
          </div>
          <div className="circle-box xl:w-[210px] lg:w-[150px] md:w-[120px] w-[100px] aspect-square rounded-full absolute sm:bottom-[37%] bottom-[35.44%] sm:left-[40.5%] left-[34.35%] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnSupply
            </span>
          </div>
          <div className="circle-box xl:w-[267px] lg:w-[150px] md:w-[120px] w-[80px] aspect-square rounded-full absolute sm:bottom-[30.5%] bottom-[33.18%] sm:right-[12%] right-[9px] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnGuide
            </span>
          </div>
          <div className="circle-box xl:w-[267px] lg:w-[150px] md:w-[120px] w-[100px] aspect-square rounded-full absolute sm:top-[7.1%] top-[11.28%] sm:right-[10.77%] right-[13px] z-[1]">
            <span className="xl:text-[32px] lg:text-[24px] text-[16px] font-bold leading-[137%] sm:tracking-[-0.8px] text-[#344767]">
              OnGadgets
            </span>
          </div>

          <div className=" w-fit aspect-square rounded-full absolute sm:top-[6.1%] top-[14.44%] sm:left-[10.36%] left-[9.7%] z-[1]">
            <EmptyCircle />
          </div>
          <div className=" w-fit aspect-square rounded-full absolute sm:top-[17.05%] top-[28.89%] sm:left-[24%] left-[40.79%] z-[1]">
            <EmptyCircle />
          </div>
          <div className=" w-fit aspect-square rounded-full absolute sm:top-[30.59%] top-[36.57%] sm:right-[29.36%] right-[21.78%] z-[1]">
            <EmptyCircle />
          </div>
          <div className=" w-fit aspect-square rounded-full absolute sm:bottom-[28.89%] bottom-[30.57%] sm:left-[17.68%] left-[9.2%] z-[1]">
            <EmptyCircle />
          </div>
          <div className=" w-fit aspect-square rounded-full absolute sm:bottom-[24.62%] bottom-[25.08%] sm:right-[44.4%] right-[31.28%] z-[1]">
            <EmptyCircle />
          </div>
          <div className=" w-fit aspect-square rounded-full absolute sm:bottom-[21%] bottom-[12.41%] sm:right-[10.11%] right-[18.71%] z-[1]">
            <EmptyCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
