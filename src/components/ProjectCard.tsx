import type {Project} from "../data/projects"


interface ProjectCardProps {
    project : Project
}


function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
            {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
            ))}
        </ul>
    </article>
  )
}

export default ProjectCard