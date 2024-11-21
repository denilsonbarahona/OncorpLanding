import React from "react";
import Hero from "./_components/Hero";
import OnStage from "./_components/OnStage";
import Experiencia from "./_components/Experiencia";
import Estado from "./_components/Estado";
import Exito from "./_components/Exito";
import ContactForm from "../_components/ContactForm";

export default function Projects() {
  return (
    <main>
      <Hero />
      <OnStage />
      <Experiencia />
      <Estado />
      <Exito />
      <ContactForm
        text="Potencia tu negocio, potencia tus"
        gdText="proyectos"
      />
    </main>
  );
}
