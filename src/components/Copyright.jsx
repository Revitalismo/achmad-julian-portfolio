import { useContext } from "react";
import { currentTheme } from "./Context.mjs";

export default function Copyright() {
    const [theme] = useContext(currentTheme);

    return (
        <footer className={`copyright copyright-${theme}`}>
            <p>copyright © Julian 2022</p>
        </footer>
    );
}