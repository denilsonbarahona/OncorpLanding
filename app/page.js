import ContactForm from "./_components/ContactForm";
import Hero from "./_components/Hero";
import InnovamosPara from "./_components/InnovamosPara";
import OnClients from "./_components/OnClients";
import OncorpOfrece from "./_components/OncorpOfrece";
import OnLabs from "./_components/OnLabs";
import Onsoft from "./_components/Onsoft";
import Proveedores from "./_components/Proveedores";
import Soluciones from "./_components/Soluciones";

export default function Home() {
  return (
    <>
      <Hero />
      <InnovamosPara />
      <Soluciones />
      <OncorpOfrece />
      <Onsoft />
      <OnLabs />
      <Proveedores />
      <OnClients />
      <ContactForm text="Innovación Redefinida por " gdText="OnCorp" />
    </>
  );
}
