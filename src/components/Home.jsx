import { currentTheme } from "./Context.mjs";
import { useContext } from "react";

import profilePicture from "./../assets/profile-picture.png";
import fileAttach from "./../assets/file-attach-01.svg";
import phoneIcon from "./../assets/phone.svg";
import TechStack from "./TechStack";

export default function Home() {
    const [theme] = useContext(currentTheme);

    return (
        <main className={`main home-${theme}`}>

            <section>
                <section className={`introduction introduction-${theme}`}>
                    <h1 className="max-w-[230px]">Hey, I am Achmad Julian</h1>
                    
                    <img className="profile-picture-mobile md:profile-picture" 
                        src={profilePicture} alt="profile picture" />
                </section>

                <article className={`title-and-buttons title-and-buttons-${theme}`}>
                    <p>I am Frontend Developer from Indonesia, who focused on web frontend and UI/UX.</p>

                    <form>
                        <button className={`btn btn-${theme}`} type="button">
                            <img src={fileAttach} alt="file attach icon" />
                            <a href="https://drive.google.com/file/d/1ugWMLvHMIQsdRGof4AKzdt1o3jHgcIQx/view?usp=drivesdk" target="_blank">resume</a>
                        </button>

                        <button className={`btn btn-${theme}`} type="button">
                            <img src={phoneIcon} alt="phone icon" />
                            <a href="https://wa.me/qr/6QA6FFJ55TYDL1" target="_blank">contact</a>
                        </button>
                    </form>
                </article>
            </section>

            <TechStack />
        </main>
    );
}