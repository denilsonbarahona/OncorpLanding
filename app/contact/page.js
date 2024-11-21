import React from "react";
import Hero from "./_components/Hero";
import Address from "./_components/Address";
import ContactInput from "./_components/ContactInput";
import ConnectSocialMedia from "./_components/ConnectSocialMedia";

export default function Contact() {
  return (
    <main>
      <Hero />
      <ContactInput />
      <Address />
      <ConnectSocialMedia />
    </main>
  );
}
