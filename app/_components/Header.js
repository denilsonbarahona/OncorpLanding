"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "/public/assets/logo.svg";
import { MenuIcon } from "../Icons";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full transition-all duration-300 ease-in-out z-10 ${
        scrollY ? "bg-white top-0 lg:top-0 " : "lg:top-[55px] top-[24px]"
      }`}
    >
      <div className="container">
        <div
          className={`bg-white/80 flex justify-between items-center py-[11px]  sm:pl-[52px] sm:pr-[24px] px-[14px] rounded-[40px] transition-all duration-300 ease-in-out ${
            scrollY ? "bg-white py-[16px] " : ""
          }`}
          style={{
            boxShadow:
              "0px 4px 6px -10px rgba(20, 20, 20, 0.12), 0px 2px 4px -10px rgba(20, 20, 20, 0.07)",
          }}
        >
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>

          <nav className="hidden lg:flex items-center xl:gap-[35px] gap-[20px]">
            {navItems.map((it, i) => (
              <Link
                key={i}
                href={it.link}
                className="text-[#495975] text-[14px] leading-[150%] font-[400] hover:text-[#7928CA] transition-all ease-linear duration-150"
              >
                {it.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-[10px]">
            <Link
              href="https://tidycal.com/oncorp/30-minute-meeting"
              target="_blank"
              className="text-white text-[12px] font-bold leading-[100%] tracking-[-0.48px] bg-gd xl:px-[56px] lg:px-[30px] sm:px-[40px] sm:py-[10px] px-[18px] py-[8px] rounded-[16px]"
            >
              <span>Habla con Nosotros</span>
            </Link>

            <Drawer />
          </div>
        </div>
      </div>
    </header>
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
    title: "Contáctanos",
    link: "/contact",
  },
];

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-full bg-white w-[80%] max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-4 text-lg font-semibold w-fit ml-auto block"
          onClick={toggleDrawer}
        >
          <IoClose size={28} />
        </button>
        <div className="p-4">
          <nav className="flex flex-col items-center gap-[15px]">
            {navItems.map((it, i) => (
              <Link
                onClick={toggleDrawer}
                key={i}
                href={it.link}
                className="text-[#495975] text-[14px] leading-[150%] font-[400] hover:text-[#7928CA]"
              >
                {it.title}
              </Link>
            ))}{" "}
          </nav>
        </div>
      </div>

      {/* Toggle Button */}

      <button className="lg:hidden" onClick={toggleDrawer}>
        <MenuIcon />
      </button>
    </>
  );
};
