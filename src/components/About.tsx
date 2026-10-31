import Section from "./Section"

function About() {
    return (
        <Section id="about" title="About">
            <div className="grid gap-10 md:grid-cols-3">
                <div className="space-y-4 md:col-span-2">
                    <p>
                        I'm a Computer Engineering senior at Michigan State University, minoring in Information Technology.
                        I'm most interested in the space where hardware meets software, and where devices meet the cloud.
                    </p>
                    <p>
                        I'm interested in pursuing Software Engineering roles either in the Embedded or Application development space.
                    </p>
                </div>

                <aside className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Education
                    </h3>
                    <p className="mt-3 font-semibold text-slate-900 dark:text-white">Michigan State University</p>
                    <p className="text-sm">B.S. Computer Engineering</p>
                    <p className="text-sm">Minor in Information Technology</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Graduating December 2026</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Dean's List (4 semesters)</p>
                </aside>
            </div>
        </Section>
    )
}

export default About
