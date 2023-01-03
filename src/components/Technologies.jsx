import javascriptIcon from "./../assets/tech-stacks/javascript.svg";
import reactIcon from "./../assets/tech-stacks/react.svg";
import tailwindcssIcon from "./../assets/tech-stacks/tailwindcss.svg";
import figmaIcon from "./../assets/tech-stacks/figma.svg";
import gitIcon from "./../assets/tech-stacks/git.svg";
import githubIcon from "./../assets/tech-stacks/github.svg";

import { useContext } from "react";
import { currentTheme } from "./Context.mjs";

export default function Technologies() {
    const [theme] = useContext(currentTheme);

    return (
        <ul className={`technologies technologies-${theme}`}>
            <li className={`tech tech-${theme}`}>

                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={javascriptIcon} alt="javascript icon" />
                </figure>
                <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
            </li>

            <li className={`tech tech-${theme}`}>
                
                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={reactIcon} alt="react icon" />
                </figure>
                <a href="https://beta.reactjs.org/" target="_blank">React</a>
            </li>

            <li className={`tech tech-${theme}`}>

                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={tailwindcssIcon} alt="tailwindcss icon" />
                </figure>
                <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
            </li>

            <li className={`tech tech-${theme}`}>

                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={figmaIcon} alt="figma icon" />
                </figure>
                <a href="https://www.figma.com/" target="_blank">Figma</a>
            </li>

            <li className={`tech tech-${theme}`}>

                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={gitIcon} alt="git icon" />
                </figure>
                <a href="https://git-scm.com/" target="_blank">Git</a>
            </li>

            <li className={`tech tech-${theme}`}>

                <figure className={`tech-icon tech-icon-${theme}`}>
                    <img src={githubIcon} alt="github icon" />
                </figure>
                <a href="https://github.com/" target="_blank">Github</a>
            </li>
        </ul>
    );
}