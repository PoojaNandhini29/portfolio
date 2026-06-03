import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-dark-bg dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
