export interface SkillCategories {
    skills : string[]
    category: string
}

export const skillCategories: SkillCategories[] = [
    {category: "Programming", skills: ["C++", "C", "CSS", "C#", "Python", "Scripting (Bash/Shell)", "JavaScript", "React", "QML", "CMake"]},
    {category: "Hardware", skills: ["ARM", "FPGA", "I2C", "GPU", "CPU", "SPICE", "Circuit Design", "Digital Logic", "Signaling"]},
    {category: "Software", skills: ["QT", "FreeRTOS", "AWS IoT Core", "AWS S3", "AWS EC2", "SQLite3", "REST APIs", "TCP/IP", "PyTest"]},
    {category: "Dev Tools", skills: ["Git", "Unix/Linux", "AI Development", "Microvision", "Docker", "Kubernetes", "CI/CD (GitLab)", "Agile", "Jira"]}
]