import "./projects.css";

export default function ProjectCard ({ title, description, imgUrl, projUrl }) {
  return (
    <div className="proj-imgbx">
      <a href={projUrl} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt="copertina progetto" className="proj-cover"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </div>  
  )
}