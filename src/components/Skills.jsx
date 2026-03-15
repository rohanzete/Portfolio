import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Technologies & Frameworks',
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'RESTful APIs']
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
