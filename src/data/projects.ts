export interface Project {
    name: string;
    description: string;
    techStack: string[];
}

export const projects: Project[] = [
    {name : "Raspberry Pi Home Assistant", description: "Designed a Raspberry Pi-hosted home assistant dashboard using Flask and HTML/CSS, implementing 4 RESTful API endpoints to asynchronously retrieve and display real-time weather, calendar events, time, and geolocation data from external APIs.", techStack: ["Python", "RESTful API", "Flask", "HTML", "CSS", "JavaScript"]},
    {name : "Producer-Consumer Concurrency Simulation", description : "Developed a multithreaded inventory and order processing system in C++ using POSIX threads and semaphores to model concurrent producer-consumer workflows, process customer orders from 5+ input files, maintain synchronized shared inventory data, and generate transaction logs and updated inventory reports.", techStack : ["C++", "Linux", "Concurrency", "POSIX Threads"]},
    {name : "Thomas Laidlaw Website", description : "Created a React and Typescript based website to showcase my portfolio and gain valuable experience with React and other web development technologies", techStack : ["React", "TypeScript", "Vite", "TailWind CSS"]}
]