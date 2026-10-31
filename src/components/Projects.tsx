import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import Section from "./Section"

function Projects() {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </Section>
    )
}

export default Projects
