import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <section className="bg-gray-900 text-white text-center py-20 md:py-32">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jules - Software Engineer</h1>
          <p className="text-lg md:text-xl mb-8">I build beautiful and functional web applications.</p>
          <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full transition-transform transform hover:scale-105">
            View My Work
          </a>
        </div>
      </section>
      <Projects />
      <Contact />
    </main>
  );
}