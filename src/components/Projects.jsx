import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Talkify - Real Time Chat App',
      description: 'A full-stack real-time chat application using the MERN stack with Socket.io for seamless instant messaging, JWT authentication, and optimized MongoDB schemas for efficient data storage.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
      github: 'https://github.com/rohanzete/chatapp_mern',
      live: '#'
    },
    {
      title: 'DiaryX - Personal Travel Diary App',
      description: 'A full-stack travel diary application enabling users to create, store, and manage personal travel experiences with secure JWT authentication and Multer for file upload functionality.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Multer'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      github: 'https://github.com/rohanzete/personal-travel-diary-app_mern',
      live: '#'
    },
    {
      title: 'AI Powered Code Reviewer',
      description: 'An intelligent code review tool that analyzes code quality, detects bugs, suggests improvements, and provides best practice recommendations using AI and machine learning algorithms.',
      technologies: ['React.js', 'Node.js', 'AI/ML', 'REST APIs', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      github: 'https://github.com/rohanzete/ai-powered-code-reviewer-mern',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
