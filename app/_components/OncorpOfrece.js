"use client";

import React from "react";
import { EmptyCircle, EmptyCircle2 } from "../Icons";
import AnimationBubble from "./AnimationBubble";

export default function OncorpOfrece() {
  return (
    <section className="py-[48px]">
      <div className="container">
        <div className="max-w-[1216px] mx-auto">
          <h2 className="sm:text-[36px] text-[22px]   text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mb-[24px] sm:mb-0">
            <span className="text-bg-gd">Oncorp ofrece</span> todo lo que
            necesitas
          </h2>
          <p className="text-[#67748E] sm:text-[18px] text-[14px] font-normal leading-[133%] sm:text-center">
            Ofrecemos equipos de alta calidad y licencias de los principales
            proveedores tecnológicos como Microsoft y Adobe, garantizando que
            dispongas de las herramientas esenciales para el éxito.
          </p>
        </div>

        <AnimationBubble />
      </div>
    </section>
  );
}
