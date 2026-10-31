import type { ReactNode } from "react"

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

// Shared wrapper so every section gets the same spacing, heading style, and nav anchor offset
function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-20 border-t border-slate-200 py-16 sm:py-20 dark:border-slate-800">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                {title}
            </h2>
            {children}
        </section>
    )
}

export default Section
