import React, { useState } from "react";
import SkillGrid from "./SkillsGrid";

const languages = [
    { title: "Java", link: "/assets/images/skil-icon/java.svg" },
    { title: "PHP", link: "/assets/images/skil-icon/php.svg" },
    { title: "JavaScript", link: "/assets/images/skil-icon/javascript.svg" },
    { title: "HTML", link: "/assets/images/skil-icon/html.svg" },
    { title: "CSS", link: "/assets/images/skil-icon/css.svg" },
];

const frameworks = [
    { title: "Spring Boot", link: "/assets/images/skil-icon/spring.svg" },
    { title: "Laravel", link: "/assets/images/skil-icon/laravel.svg" },
    { title: "React", link: "/assets/images/skil-icon/react.svg" },
    { title: "Tailwind CSS", link: "/assets/images/skil-icon/tailwind.svg" },
];

const database = [
    { title: "PostgreSQL", link: "/assets/images/skil-icon/postgre.svg" },
    { title: "MySQL", link: "/assets/images/skil-icon/mysql.svg" },
];

const tools = [
    { title: "git", link: "/assets/images/skil-icon/git.svg" },
    { title: "postman", link: "/assets/images/skil-icon/postman.svg"},
    { title: "maven", link: "https://maven.apache.org/images/maven-logo-black-on-white.png" },
];

const allSkills = [
    { title: "Languages", items: languages },
    { title: "Frameworks", items: frameworks },
    { title: "Database", items: database },
    { title: "Tools", items: tools },
];

export default function SkillsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full max-w-7xl px-5 py-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-6">My Skills</h2>

            <nav className="w-full flex flex-wrap justify-end gap-4 mb-8">
                {allSkills.map((skill, index) => (
                    <button
                        key={skill.title}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 rounded-md font-semibold ${activeIndex === index
                                ? "bg-satin-sheen-gold-600 text-brunswick-green-300 font-black"
                                : "bg-brunswick-green-400 hover:bg-satin-sheen-gold-400 text-ivory-800"
                            }`}
                    >
                        {skill.title}
                    </button>
                ))}
            </nav>

            <SkillGrid
                key={activeIndex}
                title={allSkills[activeIndex].title}
                items={allSkills[activeIndex].items}
            />
        </div>
    );
}
