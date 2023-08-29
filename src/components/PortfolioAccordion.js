import './PortfolioAccordion.css'; // Add your own CSS file for styling

const PortfolioAccordion = () => {
    const projects = [
        {
          title: 'Simulation',
          description: 'Developed a 2D platformer game using Unity and C#. Implemented player controls, enemy AI, and level design.',
          technologies: 'Unity, C#',
        },
        {
          title: 'Unified Communications',
          description: 'Created an AR app that overlays virtual objects onto the real world using Unity\'s AR Foundation and C# scripting.',
          technologies: 'Unity, AR Foundation, C#'
        },
        {
          title: 'DevOps',
          description: 'Designed and programmed a simulation tool in C# to model real-world physics scenarios and visualize the results.',
          technologies: 'C#',
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
