import './PortfolioAccordion.css'; // Add your own CSS file for styling

const PortfolioAccordion = () => {
    const projects = [
        {
          title: 'Simulation',
          description: 'Developing cutting-edge software solutions that simulate and optimize various aspects of railroad operations.',
          technologies: 'Unity, C#, C++',
        },
        {
          title: 'Unified Communications',
          description: 'Building large real time communication networks and media applications.',
          technologies: 'VoIP, FreeSWITCH, TCP/IP, Alexa'
        },
        {
          title: 'DevOps',
          description: 'Capable of building software pipelines to fit given needs.',
          technologies: 'Git CI, Azure, AWS, Sonar',
        },
      ];
    
      return (
        <div className="portfolio-accordion">
          <h1>"Innovative Solutions through Creative Thinking"</h1>
          <p>As a software developer with 10+ years of experience, I've worked on a variety of projects from enterprise level to startup.  These are my main areas of focus.</p>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Technologies used: {project.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default PortfolioAccordion;
