import Benefits from "../components/Benifits";
import Discover from "../components/Home/Discover";
import Front from "../components/Home/Front";
import Funds from "../components/Home/Funds";
import HowItWorks from "../components/Home/HowItWorks";
import News from "../components/Home/News";
import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";
import Stories from "../components/Home/Stories";
import Trusted from "../components/Home/Trusted";
import WhyChooseUs from "../components/Home/Whychooseus";
import ContactUs from "./Contactus";
import EligibilityCriteria from "./EligibalityArea";
import FAQ from "./Faq";
import Testimonials from "./Testomonial";

export default function Home({ isOpen, setIsOpen }) {
  return (
    <main>
      <Front isOpen={isOpen} setIsOpen={setIsOpen} />
      <WhyChooseUs />
      <Stats />
      {/* <Funds /> */}
      <Quiz isOpen={isOpen} setIsOpen={setIsOpen} />
      <Discover />
      <Benefits />
      <HowItWorks />
      {/* <News /> */}
      {/* <Stories /> */}
      <EligibilityCriteria />

      <FAQ />
      <Testimonials  />
      <Trusted />
    </main>
  );
}
