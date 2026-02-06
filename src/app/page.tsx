import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Achievements />
      <Contact />
      <ScrollAnimator />
    </>
  );
}
