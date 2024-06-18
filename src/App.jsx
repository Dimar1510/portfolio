import Header from "./components/header/Header";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrolltop/ScrollTop";
import { useInView } from "react-intersection-observer";
import Portfolio from "./components/portfolio/Portfolio";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

function App() {
  // checking theme
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // for header collision
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "50px",
  });

  // lenis anchor workaround
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-body-clr transition-colors duration-500">
        <Header inView={inView} />
        <div className="fixed z-[100] flex gap-4">
          <button
            onClick={() => {
              localStorage.theme = "light";
              document.documentElement.classList.remove("dark");
            }}
          >
            Light
          </button>
          <button
            onClick={() => {
              localStorage.theme = "dark";
              document.documentElement.classList.add("dark");
            }}
          >
            Dark
          </button>
        </div>
        <main className="main">
          <Hero refer={ref} />
          <Skills />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </ReactLenis>
  );
}

export default App;
