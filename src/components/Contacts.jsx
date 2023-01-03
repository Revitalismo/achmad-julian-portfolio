import { useContext } from "react";
import { currentTheme } from "./Context.mjs";
import profilePicture from "./../assets/profile-picture.png";
import Socialmedia from "./Socialmedia";

export default function Contacts() {
    const [theme] = useContext(currentTheme);

    return (
        <main className={`main main-${theme}`}>           
            <section className={`introduction introduction-${theme}`}>
                    <h1 className="max-w-[230px]">My Contacts</h1>
                    
                    <img className="profile-picture-mobile md:profile-picture" 
                            src={profilePicture} alt="profile picture" />
            </section>

            <Socialmedia />    
        </main>
    );
}