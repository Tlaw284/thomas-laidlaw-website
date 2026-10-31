import { skillCategories } from "../data/skills"
import Section from "./Section"

function Skills() {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-8 sm:grid-cols-2">
                {skillCategories.map((category) => (
                    <div key={category.category}>
                        <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">{category.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
