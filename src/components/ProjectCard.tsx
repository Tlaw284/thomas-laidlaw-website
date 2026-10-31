import type { Project } from "../data/projects"

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="flex flex-col rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800 dark:hover:shadow-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">{project.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>

            {project.award && (
                <p className="mt-2 self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    🏆 {project.award}
                </p>
            )}

            <p className="mt-3 flex-1 text-sm">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <li key={tech} className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-brand dark:bg-green-950 dark:text-green-300">
                        {tech}
                    </li>
                ))}
            </ul>

            {project.links && (
                <div className="mt-4 flex gap-4 text-sm font-semibold">
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-brand hover:underline dark:text-green-400">
                            Source →
                        </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-brand hover:underline dark:text-green-400">
                            Live demo →
                        </a>
                    )}
                </div>
            )}
        </article>
    )
}

export default ProjectCard
