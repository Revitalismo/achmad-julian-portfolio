import { useContext } from "react";
import { currentTheme } from "./Context.mjs"; 
import Technologies from "./Technologies";

export default function TechStack() {
    const [theme] = useContext(currentTheme);

    return (
        <section className={`tech-stack`}>
            <article>
                <h1 className={`tech-stack-title tech-stack-title-${theme}`}>Tech Stack</h1>
                <p className={`tech-stack-subtitle tech-stack-subtitle-${theme}`}>A list of my favorite technologies that I usually use.</p>
            </article>

            <Technologies />
        </section>
    );
}