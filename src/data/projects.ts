export interface ProjectLinks {
    github?: string;
    demo?: string;
}

export interface Project {
    name: string;
    date: string;
    description: string;
    techStack: string[];
    award?: string;
    links?: ProjectLinks;
}

export const projects: Project[] = [
    {
        name: "Dietary Filter Support for Capstone Course",
        date: "Fall 2026 · In progress",
        description: "Collaborating with a team on a capstone project to add Low FODMAP and SSRD diet filters across the company's React/React Native frontend, Node.js/Express REST API, and PostgreSQL database, extending the filters to its GPT-based AI recipe generation pipeline.",
        techStack: ["React", "React Native", "Node.js", "Express", "PostgreSQL"]
    },
    {
        name: "Inventory Management System",
        date: "2026",
        description: "Built a store inventory system with a shell CLI that validates and bulk-loads CSV records into a relational database and supports querying and filtering entries against the persisted dataset.",
        techStack: ["Python", "SQLite", "CLI"],
        award: "2nd Place, MWC3 Python Programming Competition"
    },
    {
        name: "Producer-Consumer Concurrency Simulation",
        date: "March 2026",
        description: "Developed a multithreaded inventory and order processing system in C++ using POSIX threads and semaphores to model concurrent producer-consumer workflows, process customer orders from 5+ input files, maintain synchronized shared inventory data, and generate transaction logs and updated inventory reports.",
        techStack: ["C++", "Linux", "POSIX Threads", "Semaphores"]
    },
    {
        name: "Cache Simulator",
        date: "Spring 2026",
        description: "Built a C++ cache simulator modeling a direct-mapped, write-back cache (8 lines, 8-byte blocks) over a 64 KB RAM, decoding addresses into tag/index/offset with bitwise operations and tracking valid and modified bits to report hits, misses, and dirty-line write-backs for LDR/STR instruction traces.",
        techStack: ["C++", "Computer Architecture", "Bitwise Operations"]
    },
    {
        name: "Virtual Memory Simulator",
        date: "Spring 2026",
        description: "Implemented a multi-process virtual memory simulator in C++ with per-process page tables, FIFO page replacement across 8 physical frames and a 32-area swap disk, dirty-page write-back, and protection-fault detection, logging each access's hit/miss, frame allocation, eviction, and physical address.",
        techStack: ["C++", "Operating Systems", "STL"]
    },
    {
        name: "Raspberry Pi Home Assistant",
        date: "December 2025",
        description: "Designed a Raspberry Pi-hosted home assistant dashboard using Flask and HTML/CSS, implementing 4 RESTful API endpoints to asynchronously retrieve and display real-time weather, calendar events, time, and geolocation data from external APIs.",
        techStack: ["Python", "Flask", "REST APIs", "JavaScript", "Raspberry Pi"]
    },
    {
        name: "Thomas Laidlaw Website",
        date: "2026",
        description: "Created this React and TypeScript portfolio website to showcase my work and gain hands-on experience with modern frontend development.",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        links: {github: "https://github.com/Tlaw284/thomas-laidlaw-website"}
    }
]
