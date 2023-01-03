import gmailIcon from "./../assets/socialmedia/gmail.svg";
import githubIcon from "./../assets/tech-stacks/github.svg";
import whatsappIcon from "./../assets/socialmedia/whatsapp.svg";
import youtubeIcon from "./../assets/socialmedia/youtube.svg";
import instagramIcon from "./../assets/socialmedia/instagram.svg";

import { useContext } from "react";
import { currentTheme } from "./Context.mjs";

export default function Technologies() {
    const [theme] = useContext(currentTheme);

    return (
        <ul className={`socialmedia-container`}>
            <li className={`socialmedia socialmedia-${theme}`}>

                <figure className={`socialmedia-icon socialmedia-icon-${theme}`}>
                    <img src={gmailIcon} alt="gmail icon" />
                </figure>
                <a>achmadjulian80@gmail.com</a>
            </li>

            <li className={`socialmedia socialmedia-${theme}`}>

                <figure className={`socialmedia-icon socialmedia-icon-${theme}`}>
                    <img src={githubIcon} alt="github icon" />
                </figure>
                <a href="https://github.com/Revitalismo" target="_blank">Revitalismo</a>
            </li>

            <li className={`socialmedia socialmedia-${theme}`}>

                <figure className={`socialmedia-icon socialmedia-icon-${theme}`}>
                    <img src={whatsappIcon} alt="whatsapp icon" />
                </figure>
                <a href="https://wa.me/qr/6QA6FFJ55TYDL1" target="_blank">Achmad Julian</a>
            </li>

            <li className={`socialmedia socialmedia-${theme}`}>

                <figure className={`socialmedia-icon socialmedia-icon-${theme}`}>
                    <img src={youtubeIcon} alt="youtube icon" />
                </figure>
                <a href="https://www.youtube.com/@achmadjulian741" target="_blank">Achmad Julian</a>
            </li>

            <li className={`socialmedia socialmedia-${theme}`}>

                <figure className={`socialmedia-icon socialmedia-icon-${theme}`}>
                    <img src={instagramIcon} alt="instagram icon" />
                </figure>
                <a href="https://www.instagram.com/add.achmadjulian" target="_blank">add.achmadjulian</a>
            </li>            
        </ul>
    );
}