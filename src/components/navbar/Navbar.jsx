import ThemeButton from "./ThemeButton";

import { useContext } from "react";
import { currentTheme, sidebarOn } from "../Context.mjs";
import Sidebar from "./Sidebar";
import MenuButton from "./MenuButton";
import Links from "./Links";

export default function Navbar() {
    const [theme] = useContext(currentTheme);
    const [sidebar] = useContext(sidebarOn);

    let showSidebar = sidebar === "open" && <Sidebar />;

    return (
        <header className={`navbar navbar-${theme}`}>
            {showSidebar}
            <MenuButton />
            <Links />
            <ThemeButton />
        </header>
    );
}