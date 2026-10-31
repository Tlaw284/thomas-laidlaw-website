export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {category: "Languages", skills: ["C", "C++", "Python", "C#", "JavaScript", "SQL", "Bash/Shell", "HTML/CSS", "QML"]},
    {category: "Embedded & Hardware", skills: ["FreeRTOS", "Embedded Linux", "ARM", "FPGA", "I2C", "Arduino", "ESP32", "Circuit Design", "SPICE", "Digital Logic"]},
    {category: "Cloud & Networking", skills: ["AWS (EC2, S3, IAM, IoT Core, CloudWatch)", "MQTT", "TCP/IP", "REST APIs", "Docker", "Kubernetes", "LoRaWAN", "Matter"]},
    {category: "Tools & Frameworks", skills: ["Git", "GitLab CI/CD", "Linux", "Qt", "Flask", "React", "PyTest", "CMake", "SQLite", "Jira", "Agile"]}
]
