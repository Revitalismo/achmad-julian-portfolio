import { useContext} from "react";
import { currentTheme, sidebarOn } from "../Context.mjs";

import lightModeIcon from "./../../assets/light-menu.svg";
import darkModeIcon from "./../../assets/dark-menu.svg";

export default function MenuButton() {
    const [theme] = useContext(currentTheme);
    let iconMode = theme === "light" ? darkModeIcon : lightModeIcon;
    
    const [sidebar, setSidebar] = useContext(sidebarOn);

    function toggleMenu() {
      sidebar === "close" ? setSidebar("open") : setSidebar("close");
    }

    return (
        <img className="menu" src={iconMode} onClick={toggleMenu} alt="icon theme" />
    );
}