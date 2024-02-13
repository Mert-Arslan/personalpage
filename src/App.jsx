import "./index.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./Contexts/DataContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
