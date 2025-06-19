import Examples from "./Examples/Examples";
import Features from "./Features/Features";
import Home from "./Home/Home";
import Pricing from "./Pricing/Pricing";
import './LandingPage.css';
import { MdArrowForward } from "react-icons/md";

export default function LandingPage() {
    const navigateTo = (dest: string) => {
        const targetElement = document.getElementById(dest);
        const offset = 67; // height of the fixed navbar

        if (targetElement) {
            const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = elementTop - offset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <div id="top-bar">
                <div id="app-name-container">
                    <div id="logo-dark"></div>
                    <div id="app-name-dark">Brand Craft</div>
                </div>
                <div id="navigation">
                    <div className="nav-item" onClick={() => navigateTo('home')}>Home</div>
                    <div className="nav-item" onClick={() => navigateTo('features')}>Features</div>
                    <div className="nav-item" onClick={() => navigateTo('examples')}>Gallery</div>
                    <div className="nav-item" onClick={() => navigateTo('pricing')}>Pricing</div>
                </div>
                <div id="contact">
                    Contact 
                    <MdArrowForward />
                </div>
            </div>
            <div id="content">
                <Home />
                <Features />
                <Examples />
                <Pricing />
            </div>
        </>
    )
}