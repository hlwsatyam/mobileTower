import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Find the funding you are interested in",
    text: "Reliance Jio invites property owners across India to lease their spaces for mobile tower installation. Earn a steady rental income by utilizing your vacant space.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "Access the platform",
    text: "Register your property with Jio's easy-to-use platform. Provide necessary details such as property size, location, and ownership documents.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Follow the step-by-step guidance",
    text: "Submit your application, undergo site inspection, and wait for Jio’s approval. Our team will guide you through each step of the process.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Let the tech work its magic",
    text: "Once approved, Jio will handle installation and maintenance of the tower, allowing you to enjoy a hassle-free rental income.",
  },
];

export default function HowItWorks() {
  return (
    <section id="application" className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
