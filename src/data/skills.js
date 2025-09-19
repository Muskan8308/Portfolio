import html from "../assets/skills/htmlLogo.png";
import css from "../assets/skills/cssLogo.png";
import js from "../assets/skills/jsLogo.png";
import react from "../assets/skills/reactLogo.png";
import bootstrap from "../assets/skills/bootstrapLogo.png";
import java from "../assets/skills/javaLogo.png";
import springBoot from "../assets/skills/springbootLogo.png";
import mysql from "../assets/skills/mysqlLogo.png";
import github from "../assets/skills/githubLogo.png";
import vscode from "../assets/skills/vscodeLogo.png";
import eclipse from "../assets/skills/eclipseLogo.png";
import intellij from "../assets/skills/intellijLogo.png";
import postman from "../assets/skills/postmanLogo.png";

const skills = {
    frontend: [
        {
            name: "HTML",
            imageSrc: html,
            level: 90
        },
        {
            name: "CSS",
            imageSrc: css,
            level: 80
        },
        {
            name: "JavaScript",
            imageSrc: js,
            level: 70
        },
        {
            name: "React",
            imageSrc: react,
            level: 60
        },
        {
            name: "Bootstrap",
            imageSrc: bootstrap,
            level: 70
        }
    ],
    backend : [
        {
            name : "Java",
            imageSrc : java,
            level: 75
        },
        {
            name : "Spring Boot",
            imageSrc : springBoot,
            level: 60
        },
        {
            name : "MySQL",
            imageSrc : mysql,
            level: 60
        }
    ],
    languages : [
        {
            name : "Java",
            imageSrc : java,
            level: 75
        },
        {
            name : "JavaScript",
            imageSrc : js,
            level: 70
        },
    ],
    tools : [
        {
            name : "Git & GitHub",
            imageSrc : github
        },
        {
            name : "VS Code",
            imageSrc : vscode
        },
        {
            name : "Eclipse",
            imageSrc : eclipse
        },
        {
            name : "IntelliJ IDEA",
            imageSrc : intellij
        },
        {
            name : "Postman",
            imageSrc : postman
        }
    ]
}

export default skills;
