import ThemeButton from "./ThemeButton";

import { useContext } from "react";
import { currentTheme } from "../Context.mjs";
import Sidebar from "./Sidebar";
import MenuButton from "./MenuButton";
import Links from "./Links";

export default function Navbar() {
    const [theme] = useContext(currentTheme);

    return (
        <header className={`navbar navbar-${theme}`}>
            <Sidebar />
            <MenuButton />
            <Links />
            <ThemeButton />
        </header>
    );
}