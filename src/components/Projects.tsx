import {projects} from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <section id="projects-section">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </section>
    )
}

export default Projects