const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">I&apos;m available for freelance work and exciting new projects.</p>
        <a href="mailto:jules@example.com" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105">
          Get In Touch
        </a>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;