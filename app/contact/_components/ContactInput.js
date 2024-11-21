"use client";
import toast from "react-hot-toast";

export default function ContactInput() {
  const onSubmit = async (event) => {
    event.preventDefault();

    // Show loading toast message
    const loadingToastId = toast.loading("Sending...");

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
      } else {
        toast.error(data.message, { id: loadingToastId }); // Update loading toast to error
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        id: loadingToastId,
      }); // Handle network or server errors
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      action=""
      className=" w-[90%] max-w-[732px] bg-white/80 sm:p-12 p-6 sm:pt-8 rounded-[16px] mx-auto md:mt-[-433px]  mt-[-220px] relative z-[3]"
      style={{
        boxShadow:
          "0px 20px 26px 0px rgba(0, 0, 0, 0.05), 0px 8px 9px 0px rgba(0, 0, 0, 0.06)",
        backdropFilter: "blur(15px)",
      }}
    >
      <h1 className="text-bg-gd lg:text-[30px] text-[22px] font-bold leading-[125%] sm:tracking-[-0.8px] text-center mx-auto">
        Contáctanos
      </h1>

      <p className="text-[#67748E] lg:text-center text-[14px] sm:text-[16px] leading-[162%] font-normal my-6 ">
        Ponte en contacto con nosotros y descubre cómo OnCorp puede impulsar tu
        éxito.
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6">
        <div>
          <h5 className="text-[12px] font-bold text-[#344767] mb-2">Nombre</h5>
          <input
            className="outline-none w-full border border-[#D2D6DA] py-[9px] px-[13px] bg-white rounded-[8px] text-[#495057] text-[14px] font-normal"
            type="text"
            placeholder="Nombre completo"
            name="name"
            required
          />
        </div>
        <div>
          <h5 className="text-[12px] font-bold text-[#344767] mb-2">Correo</h5>
          <input
            className="outline-none w-full border border-[#D2D6DA] py-[9px] px-[13px] bg-white rounded-[8px] text-[#495057] text-[14px] font-normal"
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            required
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <h5 className="text-[12px] font-bold text-[#344767] mb-2">
            Cuentanos tus ideas
          </h5>
          <textarea
            className="outline-none w-full border border-[#D2D6DA] py-[9px] px-[13px] bg-white rounded-[8px] text-[#495057] text-[14px] font-normal resize-none"
            type="text"
            placeholder="Describe como podemos ayudarte"
            rows={7}
            name="message"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-gd py-[12px] px-[48px] rounded-[8px] text-white text-[12px] font-bold  leading-[18px]  block w-fit mx-auto  mt-4 "
      >
        <span> Enviar</span>
      </button>
    </form>
  );
}
