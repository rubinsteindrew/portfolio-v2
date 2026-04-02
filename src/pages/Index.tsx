import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border-subtle bg-surface py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted text-sm">
            © 2024 Drew Rubinstein. Built with modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
