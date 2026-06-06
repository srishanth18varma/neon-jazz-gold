import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srishanth Varma — Student. Builder. Curious mind." },
      {
        name: "description",
        content:
          "Personal portfolio of Srishanth Varma — computer science student at Scaler School of Technology. Projects, certifications, and contact.",
      },
      { property: "og:title", content: "Srishanth Varma — Portfolio" },
      {
        property: "og:description",
        content: "Student. Builder. Curious mind. CS at Scaler School of Technology.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
