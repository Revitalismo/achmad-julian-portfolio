import { useContext} from "react";
import { currentTheme } from "../Context.mjs";

import lightModeIcon from "./../../assets/light-mode.svg";
import darkModeIcon from "./../../assets/dark-mode.svg";

export default function ThemeButton() {
    const [theme, setTheme] = useContext(currentTheme);
    let iconMode = theme === "light" ? darkModeIcon : lightModeIcon;

    function toggleTheme() {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <img className={`justify-self-end`} src={iconMode} onClick={toggleTheme} alt="icon theme" />
    );
}