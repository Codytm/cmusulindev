import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Hobbies } from "./components/Hobbies";
import { Education } from "./components/Education";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";
import { ProjectPage } from "./pages/ProjectPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { profile } from "./data/resume";
import { useRouter } from "./router";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
      <Education />
    </>
  );
}

function Page() {
  const { path } = useRouter();

  if (path === "/") return <Home />;
  if (path === "/about") return <AboutPage />;
  if (path === "/projects") return <ProjectsPage />;

  const projectPrefix = "/projects/";
  if (path.startsWith(projectPrefix)) {
    const slug = decodeURIComponent(path.slice(projectPrefix.length));
    return <ProjectPage slug={slug} />;
  }

  return <NotFound />;
}

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <TopNav />
        <div className="content">
          <Page />
        </div>
        <footer>{profile.name} · Built with React &amp; TypeScript</footer>
      </main>
    </div>
  );
}

export default App;
