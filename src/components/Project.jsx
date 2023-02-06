import Projects from "./Projects";
import { useContext } from "react";
import { currentTheme } from "./Context.mjs";

export default function Project() {
    const [theme] = useContext(currentTheme);

    return (
        <section className={`tech-stack`}>
            <article>
                <h1 className={`tech-stack-title tech-stack-title-${theme}`}>Portfolio</h1>
                <p className={`tech-stack-subtitle tech-stack-subtitle-${theme}`}>A list of my Portfolio.</p>
            </article>

            <Projects className={`tech-stack-subtitle tech-stack-subtitle-${theme}`} />
        </section>
    );
}