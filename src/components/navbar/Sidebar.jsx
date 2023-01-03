import { Link } from "react-router-dom";
import { useContext } from "react";
import { currentTheme, sidebarOn } from "../Context.mjs";

import { homeLight, homeDark, fileLight, fileDark, contactLight, contactDark, aboutLight, aboutDark, close } from "./../../assets/sidebar/sidebarIcon.mjs";

export default function Sidebar() {
    const [theme] = useContext(currentTheme);
    const [sidebar, setSidebar] = useContext(sidebarOn);

    let homeIcon = theme === "light" ? homeDark : homeLight;
    let fileIcon = theme === "light" ? fileDark : fileLight;
    let contactIcon = theme === "light" ? contactDark : contactLight;
    let aboutIcon = theme === "light" ? aboutDark : aboutLight;

    return (
        <nav className={`sidebar sidebar-${sidebar} sidebar-${theme}`}>
            
            <section>
                <ul className="navigation">
                    
                    <li className="navigation-link">
                        <img src={homeIcon} alt="home icon" />
                        <Link to="/">home</Link>
                    </li>

                    <li className="navigation-link">
                        <img src={fileIcon} alt="file icon" />
                        <a href="https://drive.google.com/file/d/1ugWMLvHMIQsdRGof4AKzdt1o3jHgcIQx/view?usp=sharing" target="_blank">resume</a>
                    </li>

                    <li className="navigation-link">
                        <img src={contactIcon} alt="contact icon" />
                        <Link to="contact">contact</Link>
                    </li>

                    <li className="navigation-link">
                        <img src={aboutIcon} alt="about icon" />
                        <Link to="about">about</Link>
                    </li>
                </ul>

                <img src={close} alt="close icon"
                     onClick={fn => setSidebar("close")}
                     className={`close-btn close-btn-${theme}`} />
            </section>
        </nav>
    );
}