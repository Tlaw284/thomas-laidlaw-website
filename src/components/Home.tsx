import { socialLinks } from "../data/profile"
import portrait from "../assets/portrait.webp"

function Home() {
    return (
        <section id="home" className="flex flex-col-reverse items-start gap-10 py-20 sm:py-28 md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-green-400">
                    Embedded Systems · Cloud &amp; IoT · Software
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                    Thomas Laidlaw
                </h1>
                <p className="mt-6 max-w-2xl text-lg">
                    Computer Engineering student at Michigan State University building embedded, cloud, and software systems.
                    Graduating December 2026.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#projects"
                        className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                    >
                        View Projects
                    </a>
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-200 dark:hover:border-green-400 dark:hover:text-green-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <img
                src={portrait}
                alt="Portrait of Thomas Laidlaw"
                width={256}
                height={256}
                className="h-40 w-40 shrink-0 rounded-full border-4 border-brand object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
            />
        </section>
    )
}

export default Home
