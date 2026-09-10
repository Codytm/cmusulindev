import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Hobbies } from "./components/Hobbies";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { navItems } from "./components/navItems";
import { useActiveSection } from "./hooks/useActiveSection";
import { profile } from "./data/resume";

const sectionIds = navItems.map((item) => item.id);

function App() {
  const active = useActiveSection(sectionIds);

  return (
    <div className="layout">
      <Sidebar active={active} />

      <main className="main">
        <TopNav active={active} />
        <div className="content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Hobbies />
          <Education />
          <Contact />
        </div>
        <footer>
          {profile.name} · Built with React &amp; TypeScript
        </footer>
      </main>
    </div>
  );
}

export default App;
