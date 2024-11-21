import React from "react";
import Hero from "./_components/Hero";
import OnSoft from "./_components/OnSoft";
import Mejores from "./_components/Mejores";
import Utilizamos from "./_components/Utilizamos";
import OnSoftBasa from "./_components/OnSoftBasa";
import OnSupply from "./_components/OnSupply";
import OnPartners from "./_components/OnPartners";
import OnGear from "./_components/OnGear";
import OnGuide from "./_components/OnGuide";
import Technology from "./_components/Technology";
import ContactForm from "../_components/ContactForm";
import OnCorpOfrece from "./_components/OnCorpOfrece";

export default function Services() {
  return (
    <main>
      <Hero />
      <OnCorpOfrece />
      <OnSoft />
      <Mejores />
      <Utilizamos />
      <OnSoftBasa />
      <OnSupply />
      <OnPartners />
      <OnGear />
      <OnGuide />
      <Technology />
      <ContactForm text="Comienza tu futuro " gdText="tecnológico" />
    </main>
  );
}
