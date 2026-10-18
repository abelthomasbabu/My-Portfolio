import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="mx-auto max-w-[760px] px-4 py-16 sm:py-24">
    <Intro />
    <main>
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </main>
    <Footer />
  </div>
);
