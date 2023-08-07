import ProjectCard from "./projectsCard";
import GitHub from "../../imgs/githubprofile.png";
import Datapizza from "../../imgs/datapizzaprofile.png";
import "animate.css";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      title: "GitHub",
      description: "Qui trovi il codice sorgente dei miei progetti e tanto altro ancora.",
      imgUrl: GitHub,
      projUrl: "https://github.com/clarissacortese/",
    },
    {
      title: "Datapizza.tech",
      description: "Qui trovi un riassunto dei miei progetti, della mia formazione e delle mie esperienze lavorative.",
      imgUrl: Datapizza,
      projUrl: "https://datapizza.tech/folio/clarissacortese582",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Portfolio</h2>
      <br></br>
      <p>
        Sì, ok, ma nel concreto?
      <br/>
        Se vuoi sbirciare tra i miei progetti e curiosare nel codice che ho scritto, puoi fare un giretto qui:
      </p>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </section>
  );
}
