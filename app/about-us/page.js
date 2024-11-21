import React from "react";
import Hero from "./_components/Hero";
import ContactForm from "../_components/ContactForm";
import Section1 from "./_components/Section1";
import Expertos from "./_components/Expertos";
import Transformer from "./_components/Transformer";
import OnStack from "./_components/OnStack";
import TodoLo from "./_components/TodoLo";

export default function AboutUs() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Expertos />
      <Transformer />
      <TodoLo />
      <OnStack />
      <ContactForm text="Únete a la transformación " gdText="digital" />
    </main>
  );
}
