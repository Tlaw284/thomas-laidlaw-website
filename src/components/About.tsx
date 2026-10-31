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
                        As an embedded systems intern at DornerWorks, I profiled FreeRTOS firmware running on 2,000+ customer
                        machines, built a cloud-to-edge OTA update service on AWS IoT Core, and developed test frameworks for
                        wireless WAN protocols. Before that, I designed and maintained customer infrastructure on AWS at Daydream
                        Technologies. Since 2024 I've been a learning assistant for MSU's intro programming course, helping
                        hundreds of students debug their first Python programs.
                    </p>
                    <p>
                        I'm looking for full-time roles in embedded systems, cloud/IoT, or software starting in 2027.
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
