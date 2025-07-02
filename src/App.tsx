import { AppBar, BottomBar } from "./components/molecules/common";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from "./pages";

function App() {
  return (
    <main className="bg-secondary-background h-full">
      {/* app bar component */}
      <AppBar />

      {/* body of content */}
      <HeroSection />

      {/* Skill Container */}
      <SkillSection />

      {/* Experience Container */}
      <ExperienceSection />

      {/* Project Container */}
      <ProjectSection />

      {/* Experience Container */}
      <ContactSection />

      {/* Bottom navigation */}
      <BottomBar />
    </main>
  );
}

export default App;
