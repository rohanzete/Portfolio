import './Hero.css';
import profilePic from '../assets/profile pic.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rohan Zete</span>
          </h1>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-description">
            Final-year Computer Engineering student with hands-on experience in MERN stack 
            and a solid understanding of Data Structures & Algorithms. Building full-stack 
            web applications with a focus on clean code and scalability.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1l0OOn3SH37NrBdslgj0-vy1nbhYcQY5C/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
