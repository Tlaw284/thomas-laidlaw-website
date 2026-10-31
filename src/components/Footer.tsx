function Footer() {
    return (
        <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Thomas Laidlaw · Built with React, TypeScript &amp; Tailwind CSS</p>
        </footer>
    )
}

export default Footer
