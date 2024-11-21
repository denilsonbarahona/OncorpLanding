import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ConnectSocialMedia() {
  return (
    <section>
      <div className="container">
        <h1 className="sm:text-[36px] text-[24px] text-bg-gd leading-[137%] tracking-[-0.8px] font-bold text-center text-bg-gd ">
          Conoce nuestras redes sociales
        </h1>

        <div className="flex items-center flex-col sm:flex-row justify-center gap-x-[76px] py-8 gap-y-6">
          {data.map((dt, i) => (
            <Link
              target="_blank"
              href={dt.link}
              key={i}
              className="flex items-center gap-2"
            >
              <Image src={dt.icon} alt="" width={20} height={20} />
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] lg:tracking-[-0.8px] font-normal text-[#344767] leading-[130%]">
                {dt.title}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-[18px] sm:text-[20px] lg:text-[24px] lg:tracking-[-0.8px] font-normal text-[#344767] leading-[130%] text-center">
          Experimenta la diferencia de trabajar con verdaderos expertos.
        </p>
      </div>
    </section>
  );
}

const data = [
  {
    title: "Facebook",
    icon: "/assets/icon/facebook.svg",
    link: "https://www.facebook.com/oncorpfb",
  },
  {
    title: "Instagram",
    icon: "/assets/icon/instagram.svg",
    link: "https://www.instagram.com/oncorpsite",
  },
  {
    title: "Linkedin",
    icon: "/assets/icon/linkedin.svg",
    link: "https://www.linkedin.com/company/oncorp/",
  },
  {
    title: "Twitter",
    icon: "/assets/icon/twitter.svg",
    link: "https://x.com/OnCorpsite",
  },
];
