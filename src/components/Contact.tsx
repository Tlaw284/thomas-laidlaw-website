import { email, socialLinks } from "../data/profile"
import Section from "./Section"

function Contact() {
    return (
        <Section id="contact" title="Contact">
            <p className="max-w-2xl">
                I'm open to full-time opportunities starting in 2027. The best way to reach me is by email,
                or connect with me on LinkedIn.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                    href={`mailto:${email}`}
                    className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                    {email}
                </a>
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-brand hover:underline dark:text-green-400"
                    >
                        {link.label} →
                    </a>
                ))}
            </div>
        </Section>
    )
}

export default Contact
