import { skillCategories } from "../data/skills"

function Skills() {
    return (
        <section id="skills-section">
        {skillCategories.map((category) => (
            <div key={category.category}>
            <h3>{category.category}</h3>
            <ul>
                {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
                ))}
            </ul>
            </div>
        ))}
    </section>
    )
}

export default Skills