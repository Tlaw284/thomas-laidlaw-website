import { experiences } from "../data/experience"
import Section from "./Section"

function Experience() {
    return (
        <Section id="experience" title="Experience">
            <ol className="space-y-12">
                {experiences.map((job) => (
                    <li key={`${job.company}-${job.role}`}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {job.role}
                                <span className="text-brand dark:text-green-400"> · {job.company}</span>
                            </h3>
                            <p className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                                {job.startDate} – {job.endDate ?? "Present"}
                            </p>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5">
                            {job.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </Section>
    )
}

export default Experience
