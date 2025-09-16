import html from "../assets/skills/htmlLogo.png";
import css from "../assets/skills/cssLogo.png";
import js from "../assets/skills/jsLogo.png";
import react from "../assets/skills/reactLogo.png";
import bootstrap from "../assets/skills/bootstrapLogo.png";
import java from "../assets/skills/javaLogo.png";
import springBoot from "../assets/skills/springBootLogo.png";
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
            imageSrc: html
        },
        {
            name: "CSS",
            imageSrc: css
        },
        {
            name: "JavaScript",
            imageSrc: js
        },
        {
            name: "React",
            imageSrc: react
        },
        {
            name: "Bootstrap",
            imageSrc: bootstrap
        }
    ],
    backend : [
        {
            name : "Java",
            imageSrc : java
        },
        {
            name : "Spring Boot",
            imageSrc : springBoot
        },
        {
            name : "MySQL",
            imageSrc : mysql
        }
    ],
    languages : [
        {
            name : "Java",
            imageSrc : java
        },
        {
            name : "JavaScript",
            imageSrc : js
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