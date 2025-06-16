import { AppBar } from "./components/molecules/common";
import { HeroSection } from "./pages";

function App() {
  return (
    <main className="relative h-screen bg-secondary-background">
      {/* app bar component */}
      <AppBar />

      {/* body of content */}
      <div className="h-full">
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
