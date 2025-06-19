// src/App.jsx
import About from "./components/About";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "2rem" }}> {/* ← ヘッダー高さ分の余白 */}
        <About />
        <Skills />
        <Career />
        <Works />
      </main>
      <Footer />
    </div>
  );
}

export default App;
