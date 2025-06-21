import { AppBar, BottomBar } from "./components/molecules/common";
import { HeroSection, SkillSection } from "./pages";

function App() {
  return (
    <main className="bg-secondary-background h-full">
      {/* app bar component */}
      <AppBar />

      {/* body of content */}
      <HeroSection />

      {/* Skill Container */}
      <SkillSection />

      <BottomBar />
    </main>
  );
}

export default App;
