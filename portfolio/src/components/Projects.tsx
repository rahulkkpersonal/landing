const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the first project.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the second project.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A brief description of the third project.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline font-semibold">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;