"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm({
  text = "Innovación Redefinida por",
  gdText,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Show loading toast message
    const loadingToastId = toast.loading("Sending...");
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "19f4db3f-abc3-41e9-ac68-a625016e55f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!", { id: loadingToastId }); // Update loading toast to success
        event.target.reset();
        setIsLoading(false);
      } else {
        toast.error(data.message, { id: loadingToastId }); // Update loading toast to error
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        id: loadingToastId,
      }); // Handle network or server errors
      setIsLoading(false);
    }
  };
  return (
    <section className=" lg:py-0 py-[48px]">
      <div className="relative max-w-[1440px] mx-auto">
        {" "}
        <div className="px-[32px] sm:px-[48px] lg:pl-[96px] lg:px-0 max-w-[1464px] mx-auto ">
          <div className="grid lg:grid-cols-2 gap-[51px] xl:gap-[53px]">
            <div className="flex justify-start items-center lg:py-8 ">
              <form
                action=""
                onSubmit={onSubmit}
                className="flex flex-col gap-[24px] xl:py-6 w-full"
              >
                <h2 className=" sm:text-[32px] text-[22px] text-center lg:text-start  text-[#344767] font-bold leading-[125%] sm:tracking-[-0.8px] w-full">
                  {text}
                  <span className="text-bg-gd"> {gdText}</span>
                </h2>

                <p className="text-[18px] text-[#67748E] font-normal leading-[133%] mt-[8px] max-w-[596px]">
                  Envíanos un mensaje, estaremos listos para ayudarte a
                  construir un futuro tecnológico exitoso.
                </p>

                <input
                  type="text"
                  className="sm:py-[18px] py-[12px] px-[14px] rounded-[8px] border border-[#CED4DA] bg-white outline-none text-[14px] text-[#67748E] leading-[150%] font-normal"
                  placeholder="Nombre/nombre de la empresa"
                  name="name"
                  required
                />
                <input
                  type="email"
                  className="sm:py-[18px] py-[12px] px-[14px] rounded-[8px] border border-[#CED4DA] bg-white outline-none text-[14px]  text-[#67748E] leading-[150%] font-normal"
                  placeholder="Correo Electronico"
                  name="email"
                  required
                />
                <input
                  type="text"
                  className="sm:py-[18px] py-[12px] px-[14px] rounded-[8px] border border-[#CED4DA] bg-white outline-none text-[14px] text-[#67748E] leading-[150%] font-normal"
                  placeholder="Cuéntanos sobre tu empresa"
                  name="message"
                  required
                />

                <button
                  type="submit"
                  className="bg-gd py-[12px] px-[24px] rounded-[6px] text-white text-[13px] font-bold  leading-[18px] uppercase t mx-auto lg:w-auto lg:inline lg:mx-0 w-full flex items-center justify-center"
                >
                  <span>ENVIAR</span>
                </button>
              </form>
            </div>
            <img
              className="  h-full w-full rounded-bl-[100px] lg:block hidden"
              src="assets/contact-mask.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
