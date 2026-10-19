import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import { useReveal } from "../lib/useReveal";

export const Home = () => {
  useReveal();

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30 focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Header />
      <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
        <Intro />
        <main>
          <Projects />
          <Experience />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
};
