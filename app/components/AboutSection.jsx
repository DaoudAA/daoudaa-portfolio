"use client";
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>Angular</li>
                <li>C++</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>Docker</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Engineer’s Degree in Computer Science </li>
                <li> National Engineering School of Tunis (ENIT), 2022 – Present</li>
                <li>Preparatory Diploma for Engineering Studies </li>
                <li> Preparatory Institute for Engineering Studies El Manar, 2020 – 2022</li>
            </ul>
        ),
    }// ,
    // {
    //   title: "Certifications",
    //   id: "certifications",
    //   content: (
    //     <ul className="list-disc pl-2">
    //       <li>AWS Cloud Practitioner</li>
    //       <li>Google Professional Cloud Developer</li>
    //     </ul>
    //   ),
    // },
];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="./images/About-image.png"
                    width={400}
                    height={400}
                    alt="Profile image: chill samurai geek sitting in front of his computer"></Image>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a Software Engineering student at ENIT with a passion for developing
                        scalable and efficient software solutions. My academic and professional
                        experiences include working with diverse technologies,such as Java, Angular,
                        and Docker,and contributing to projects that emphasize innovation and
                        optimization. I am a quick learner and  I am continuously seeking
                        opportunities to apply my skills to real-world challenges. I am a team player
                        and I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        {/* <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton> */}
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
