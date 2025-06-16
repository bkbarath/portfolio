import { AppBar } from "./components/molecules/common";
import { HomeSection } from "./pages";

function App() {
  return (
    <main className="relative h-screen bg-secondary-background">
      {/* app bar component */}
      <AppBar />

      {/* body of content */}
      <div className="h-full">
        <HomeSection />
      </div>
       <div className="h-full">
        <HomeSection />
      </div>
    </main>
  );
}

export default App;
