import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { WhatIBuild } from "@/components/WhatIBuild";
import { EngineeringProcess } from "@/components/EngineeringProcess";
import { Services } from "@/components/Services";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Experience />
        <Projects />
        <TechStack />
        <EngineeringProcess />
        <GitHubSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
