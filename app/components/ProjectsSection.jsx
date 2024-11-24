"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "motion/react";

const projectsData = [
    {
        id: 1,
        title: "Communication Platform as a Service (CPaaS)",
        description:
            "Built a microservice-based application with features like dynamic email templating, contact management, and message queuing. Reduced communication errors by 30% and accelerated delivery speed by 60%.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.linkedin.com/posts/aadsan_softwaredevelopment-microservices-quarkus-activity-7212244794717208576-mt-t/?utm_source=share&utm_medium=member_desktop",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Car Selling Website",
        description:
            "Developed a reactive car sales front-end interface with Angular, enabling efficient browsing and detailed ad views.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DaoudAA/Car-Selling-Website--Front-End-Angular-",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Project Management Application",
        description:
            "Created a project management tool with .NET and C#, focusing on resource allocation and temporal constraint management to reduce project durations by 20%.",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DaoudAA/ProjectManagement_CS",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Trading Simulation Application",
        description:
            "Designed a stock trading simulator in C++, integrating advanced financial modeling to improve trade execution accuracy by 20%.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DaoudAA/TradingSimulator",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Blog Website",
        description:
            "Developed a blog platform with user authentication, content management, and contact forms, enhancing user engagement by 40%.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DaoudAA/Blog_Website",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
