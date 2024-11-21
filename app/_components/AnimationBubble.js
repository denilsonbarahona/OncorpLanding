import React from "react";
import { EmptyCircle, EmptyCircle2 } from "../Icons";

export default function AnimationBubble() {
  return (
    <div className="animation-box-wrapper xl:h-[938px] lg:h-[650px] md:h-[550px] h-[384px] relative    max-w-[400px] mx-auto md:max-w-full mt-[31px]">
      <div
        className="circle-box xl:w-[201px] lg:w-[150px] md:w-[120px] w-[85px] aspect-square rounded-full absolute top-0 md:left-[30%] left-[16.25%] z-[1]
    "
        id="onGear"
      >
        <span className="xl:text-[32px] lg:text-[24px] font-bold leading-[137%] sm:tracking-[-0.8px]">
          OnGear
        </span>
      </div>
      <div
        className="circle-box xl:w-[201px] lg:w-[150px] md:w-[120px] w-[85px] aspect-square rounded-full absolute top-[42%] md:left-[14.9%] left-0 z-[1]"
        id="onSoft"
      >
        <span className="xl:text-[32px] lg:text-[24px] font-bold leading-[137%] sm:tracking-[-0.8px]">
          OnSoft
        </span>
      </div>
      <div
        className="circle-box xl:w-[201px] lg:w-[150px] md:w-[120px] w-[85px] aspect-square rounded-full absolute bottom-0 md:left-[30%] left-[35%] z-[1]"
        id="onSupply"
      >
        <span className="xl:text-[32px] lg:text-[24px] font-bold leading-[137%] sm:tracking-[-0.8px]">
          OnSupply
        </span>
      </div>
      <div
        className="circle-box xl:w-[201px] lg:w-[150px] md:w-[120px] w-[85px] aspect-square rounded-full absolute md:bottom-[36.67%] bottom-[50%] md:right-[12.33%] right-[3px] z-[1]"
        id="onGuide"
      >
        <span className="xl:text-[32px] lg:text-[24px] font-bold leading-[137%] sm:tracking-[-0.8px]">
          OnGuide
        </span>
      </div>

      <div
        className="circle-box xl:w-[267px] lg:w-[180px] md:w-[150px] w-[125px]  aspect-square rounded-full absolute top-[38%] md:left-[40%] left-[31%] z-[2]"
        id="onCorp"
      >
        <div className="relative">
          <span className="xl:text-[32px] lg:text-[24px] font-bold leading-[137%] sm:tracking-[-0.8px] ">
            OnCorp
          </span>

          <img
            src="/assets/arrow1.svg"
            className="arrow-ongear absolute sm:bottom-[400%] bottom-[350%] h-[50px] xl:h-auto md:h-[80px]"
            alt=""
          />
          <img
            src="/assets/arrow2.svg"
            className=" arrow-onsoft absolute xl:right-[160%] md:right-[200%] right-[140%] w-[40px] sm:w-[100px] xl:w-auto   lg:-top-20 -top-10"
            alt=""
          />
          <img
            src="/assets/arrow3.svg"
            className=" arrow-onsupply absolute xl:top-[370%] md:top-[360%] top-[320%] md:-left-[40%] xl:h-[100px] md:h-[50px] h-[25px] -rotate-[20deg] md:rotate-0 left-[30%]"
            alt=""
          />

          <img
            src="/assets/arrow4.svg"
            className=" arrow-onguide absolute xl:left-[160%]  lg:left-[140%] md:left-[170%] sm:left-[190%] left-[160%] w-[40px] sm:w-[100px] xl:w-auto md:w-[100px]   xl:-bottom-20 lg:-bottom-12 md:-bottom-10 bottom-[20%] rotate-[-25deg] sm:rotate-0"
            alt=""
          />
        </div>
      </div>

      <div className=" w-fit aspect-square rounded-full absolute md:bottom-[60%] bottom-auto top-[-2%] md:top-auto md:left-[22%] left-[50%] xl:left-[28%] z-[1]">
        <EmptyCircle />
      </div>
      <div className=" w-fit aspect-square rounded-full absolute xl:bottom-[25%] md:bottom-[20%]  bottom-[60%] md:left-[25%]  left-[15%] xl:left-[30.6%] z-[1]">
        <EmptyCircle />
      </div>
      <div className=" w-fit aspect-square rounded-full absolute xl:bottom-[12%] md:bottom-[3%]  bottom-[16%] md:left-[0]  left-[18%] xl:left-0 z-[1]">
        <EmptyCircle />
      </div>
      <div className=" w-fit aspect-square rounded-full absolute xl:bottom-[65%] md:bottom-[65%]  bottom-[70%] md:right-[25%]  right-[20%] xl:right-[25.6%] z-[1]">
        <EmptyCircle2 />
      </div>
      <div className=" w-fit aspect-square rounded-full absolute xl:bottom-[10%] md:bottom-[15%]  bottom-[15%] md:right-[25%]  right-[5%] xl:right-[25.6%] z-[1]">
        <EmptyCircle2 />
      </div>
    </div>
  );
}
