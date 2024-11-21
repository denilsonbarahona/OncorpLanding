import Image from "next/image";
import React from "react";
import logo from "/public/assets/white-logo.svg";
import Link from "next/link";
import instagram from "/public/assets/social/instagram.svg";
import facebook from "/public/assets/social/facebook.svg";
import linkedin from "/public/assets/social/linkedin.svg";
import youtube from "/public/assets/social/youtube.svg";

export default function Footer() {
  return (
    <footer id="footer" className="py-[48px] lg:py-[90px] mt-12">
      <div className="container">
        <div className="flex justify-between gap-8 gap-y-12 lg:items-center flex-col lg:flex-row">
          <div className="flex flex-col md:gap-6 gap-240">
            <Image className="w-[100px] md:w-[157px]" src={logo} alt="" />
            <h5 className="text-white text-[16px] font-bold leading-[150%]">
              OnCorp S de RL
            </h5>

            <p className="text-white text-[16px] font-normal leading-[150%] lg:max-w-[298px]">
              Centro Empresarial los Próceres, Novacentro, Boulevard Morazán,
              Tegucigalpa MDC.
            </p>
          </div>
          <div className="flex flex-col lg:gap-6 gap-12 lg:items-end">
            <nav className="flex gap-6 gap-y-3 md:items-center flex-col md:flex-row">
              {navItems.map((it, i) => (
                <Link
                  key={i}
                  href={it.link}
                  className="text-white text-[16px] leading-[150%] hover:text-[#7928CA] transition-all ease-linear duration-150 font-normal"
                >
                  {it.title}
                </Link>
              ))}
            </nav>

            <div>
              <p className="text-white text-[16px] leading-[150%]">
                <span className="hidden lg:block">
                  {" "}
                  Visita nuestras redes sociales
                </span>
                <span className="lg:hidden"> Derechos reservados © 2024.</span>
              </p>
              <div className="flex lg:gap-4 gap-6 items-center lg:justify-end mt-2">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/oncorpsite"
                >
                  <Image src={instagram} alt="" />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/oncorpfb">
                  <Image src={facebook} alt="" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/oncorp/"
                >
                  <Image src={linkedin} alt="" />
                </Link>
                <Link target="_blank" href="https://www.youtube.com/@OnCorpYT">
                  <Image src={youtube} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center hidden lg:block text-white text-[16px] leading-[150%] mt-8">
          Derechos reservados © 2024.
        </p>
      </div>
    </footer>
  );
}

const navItems = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Sobre nosotros",
    link: "/about-us",
  },
  {
    title: "Proyectos",
    link: "/projects",
  },
  {
    title: "Servicios",
    link: "/services",
  },
  {
    title: "Contactanos",
    link: "/contact",
  },
];
