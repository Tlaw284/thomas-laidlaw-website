import { useState } from "react"

const navItems = [
    {label: "About", href: "#about"},
    {label: "Skills", href: "#skills"},
    {label: "Experience", href: "#experience"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"}
]

const linkStyles = "rounded-md px-3 py-1.5 text-sm font-semibold text-green-100 transition-colors hover:bg-white/10 hover:text-white"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-10 border-b border-white/10 bg-brand">
            <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
                <a href="#home" className="text-lg font-bold text-white">
                    Thomas Laidlaw
                </a>

                {/* Desktop links */}
                <ul className="hidden gap-1 sm:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className={linkStyles}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className="rounded-md p-2 text-white hover:bg-white/10 sm:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        {isMenuOpen
                            ? <path d="M6 6l12 12M18 6L6 18" />
                            : <path d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <ul id="mobile-menu" className="space-y-1 border-t border-white/10 px-4 py-3 sm:hidden">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className={`block ${linkStyles}`} onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

export default Navbar
