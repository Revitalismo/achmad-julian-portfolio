import { useContext } from "react";
import { currentTheme } from "./Context.mjs";
import profilePicture from "./../assets/profile-picture.png";

export default function About() {
    const [theme] = useContext(currentTheme);

    return (
        <main className={`main main-${theme}`}>
            <section className={`introduction introduction-${theme}`}>
                    <h1 className="max-w-[230px]">About Julian</h1>
                    
                    <img className="profile-picture-mobile md:profile-picture" 
                        src={profilePicture} alt="profile picture" />
            </section>

            <section className={`about-container`}>

                <p className={`about about-${theme}`}>Usually called Julian, I am a semester 2 student majoring in Engineering Informatics at Universitas Pamulang, even though I'm still in semester 2, I really want to being a Frontend Developer, therefore I am self-taught and want to do an internship to apply the knowledge I have learned.</p>

                <p className={`about about-${theme}`}>Biasa dipanggil Julian, saya mahasiswa semester 2 jurusan Teknik Informatika di Universitas Pamulang, walaupun saya masih semester 2, saya ingin sekali menjadi Frontend Developer, maka dari itu saya belajar secara otodidak dan ingin magang untuk mengaplikasikan ilmu yang sudah saya pelajari.</p>
            </section>
        </main>
    );
}