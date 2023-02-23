import ProjectCard from "./projectsCard";
import projImg1 from "../../imgs/bibliophile.png";
import projImg2 from "../../imgs/flow.png";
import projImg3 from "../../imgs/vegtables.png";
import projImg4 from "../../imgs/portfolio.png";
import projImg5 from "../../imgs/nodejs-api.png";
import projImg6 from "../../imgs/linktree-clone.png";
import "animate.css";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "Esatto! Questo sito è stato creato da me!",
      imgUrl: projImg4,
      projUrl: "https://github.com/clarissacortese/portfolio",
    },
    {
      title: "API RESTful - Node.js",
      description: "Progetto per il corso Node.js di Start2impact University",
      imgUrl: projImg5,
      projUrl: "https://github.com/clarissacortese/nodejs-project",
    },
    {
      title: "VegTables",
      description: "Progetto Finale per il Master di Start2impact University",
      imgUrl: projImg3,
      projUrl: "https://github.com/clarissacortese/progetto-finale",
    },
    {
      title: "Flow",
      description: "Progetto per il corso React di Start2impact University",
      imgUrl: projImg2,
      projUrl: "https://github.com/clarissacortese/progetto-react",
    },
    {
      title: "Linktree Clone",
      description: "Progetto sviluppato con HTML, Tailwind CSS e Javascript",
      imgUrl: projImg6,
      projUrl: "https://github.com/clarissacortese/linktree-clone",
    },
    {
      title: "Bibliophile",
      description:
        "Progetto per il corso JavaScript Advanced di Start2impact University",
      imgUrl: projImg1,
      projUrl: "https://github.com/clarissacortese/ProgettoJavaScriptAdvanced",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Progetti</h2>
      <p>
        Questa è una raccolta dei progetti che ho sviluppato dall'inizio del mio
        percorso di studi ad oggi. Cliccando sul progetto di tuo interesse
        potrai curiosare nel codice (nella repository di GitHub) e troverai
        anche il file Read Me, completo di link per vedere il risultato finale.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </section>
  );
}
