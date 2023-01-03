import { Routes, Route } from "react-router-dom";
import Home from "./../Home";
import About from "./../About";
import Contacts from "./../Contacts";

export default function RouteLayout() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}