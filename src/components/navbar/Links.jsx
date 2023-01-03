import { Link } from "react-router-dom";

import { useContext } from "react";
import { currentTheme } from "../Context.mjs";

export default function Links() {
    const [theme] = useContext(currentTheme);

    return (
        <section className={`links links-${theme}`}> 
            <Link to="/">home</Link>
            <a href="https://drive.google.com/file/d/1ugWMLvHMIQsdRGof4AKzdt1o3jHgcIQx/view?usp=sharing" target="_blank">resume</a>
            <Link to="contact">contacts</Link>
            <Link to="about">about</Link>
        </section>
    );
}