import { AppBar, BottomBar } from "./components/molecules/common";
import { HeroSection } from "./pages";

function App() {
  return (
    <main className="bg-secondary-background relative h-screen">
      {/* app bar component */}
      <AppBar />

      {/* body of content */}
      <div className="h-full">
        <HeroSection />
      </div>

      <BottomBar />
    </main>
  );
}

export default App;
