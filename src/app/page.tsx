import CaseStudies from "@/components/sections/CaseStudies";
import Header from "@/components/sections/Header";
import OurProcess from "@/components/sections/OurProcess";
import Services from "@/components/sections/Services";
import Sponsor from "@/components/sections/Spensors";


export default function Home() {
  return (
    <main className="">
      <Header />
      <Sponsor />
      <Services />
      <CaseStudies />
      <OurProcess />
    </main>
  );
}
