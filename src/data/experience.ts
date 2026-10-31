export interface Experience {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string; // undefined means the role is current
    highlights: string[];
}

export const experiences: Experience[] = [
    {
        role: "Embedded Systems Engineering Intern",
        company: "DornerWorks Ltd.",
        location: "Grand Rapids, MI",
        startDate: "May 2025",
        endDate: "August 2026",
        highlights: [
            "Analyzed RAM utilization of 10 FreeRTOS tasks on software deployed to 2,000+ customer machines internationally using a custom test procedure, reclaiming 20% of RAM through stack resizing to enable future development",
            "Designed and shipped a cloud-to-edge software delivery service in Python using MQTT over AWS IoT Core, S3-backed artifact storage, and CloudWatch observability, deploying versioned updates to Docker-built Linux images and managing 3+ networked clients concurrently",
            "Architected an Embedded C-based testing framework for 4+ wireless WAN protocols including LoRaWAN, DECT NR+, and Wi-SUN, automating remote analysis across 10+ KPIs for internal and customer use",
            "Built an automated data ingestion pipeline in Python, designing a URL schema and parser that extracts structured metadata from FTP paths to normalize and persist 1,500+ records per month into a database, validated with PyTest unit test suites"
        ]
    },
    {
        role: "Undergraduate Learning Assistant (CSE 231)",
        company: "Michigan State University",
        location: "East Lansing, MI",
        startDate: "August 2024",
        highlights: [
            "Teach weekly Python programming labs for 30+ students, delivering instruction on object-oriented design, data structures, and systematic debugging methodology",
            "Diagnosed and resolved 400+ technical inquiries spanning runtime exceptions, algorithmic misunderstandings, and environment configuration failures, coordinating with instructional staff to triage recurring issues",
            "Recognized as \"Most Active Responder\" on the class forum across four semesters"
        ]
    },
    {
        role: "Cloud Solutions Engineer",
        company: "Daydream Technologies",
        location: "East Lansing, MI",
        startDate: "June 2024",
        endDate: "November 2025",
        highlights: [
            "Consulted with clients and engineers to architect, migrate, and host 5+ customer websites using AWS services including EC2, S3, Amplify, and Lightsail",
            "Designed and implemented a company-wide AWS IAM access control architecture including roles, groups, policies, and MFA to secure sensitive databases, cloud resources, and customer information while onboarding 10+ employees",
            "Resolved production IT and cloud infrastructure issues across AWS, Linux, WordPress, and Git, troubleshooting DNS failures, deployment issues, and service outages to maintain 99.999% uptime goals"
        ]
    }
]
