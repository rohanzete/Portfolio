import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year Computer Engineering student at MET Institute of Engineering, 
            passionate about building full-stack web applications using the MERN stack. 
            With hands-on experience in developing real-time applications and a strong foundation 
            in Data Structures & Algorithms, I focus on writing clean, scalable code.
          </p>
          <p>
            I've built projects like Talkify (a real-time chat app) and DiaryX (a personal travel diary), 
            implementing secure authentication, real-time messaging, and efficient database design. 
            I also participated in hackathons, developing AI-driven solutions for agriculture.
          </p>
          
          <div className="interests">
            <h3>Interests</h3>
            <div className="interest-tags">
              <span className="tag">Full Stack Development</span>
              <span className="tag">MERN Stack</span>
              <span className="tag">Data Structures & Algorithms</span>
              <span className="tag">Problem Solving</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">Real-time Applications</span>
              <span className="tag">Bodybuilding & Powerlifting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
