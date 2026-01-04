import Examples from "./Examples/Examples";
import Features from "./Features/Features";
import Home from "./Home/Home";
import './LandingPage.css';
import { MdArrowForward } from "react-icons/md";
import { usePath } from "crossroad";
import Problem from "./Problem/Problem";
import Solution from "./Solution/Solution";
import MobileMenu from "../../shared/components/MobileMenu/MobileMenu";

export default function LandingPage() {
    const setPath = usePath()[1];
    const navigateTo = (dest: string, offset: number = 67) => {
        const targetElement = document.getElementById(dest);

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
                <div id="top-bar-contents">
                    <div id="app-name-container" onClick={() => setPath('/')}>
                        <div id="logo-dark"></div>
                        <div id="app-name-dark">Brand Craft</div>
                    </div>
                    <div id="navigation">
                        <div className="nav-item" onClick={() => navigateTo('home')}>Home</div>
                        <div className="nav-item" onClick={() => navigateTo('features')}>Features</div>
                        <div className="nav-item" onClick={() => navigateTo('examples')}>Gallery</div>
                        {/* <div className="nav-item" onClick={() => navigateTo('pricing')}>Pricing</div> */}
                    </div>
                    <div id="right-ctr">
                        <div id="contact">
                            Contact
                            <MdArrowForward />
                        </div>
                        {/* {
                            !authStore.session &&
                            <CustomAuth />
                        }
                        {
                            authStore.session !== null &&
                            <User />
                        } */}
                    </div>
                    <div id="mobile-menu">
                        <MobileMenu navigateTo={navigateTo}/>
                        {/* {
                            !authStore.session &&
                            <CustomAuth />
                        }
                        {
                            authStore.session !== null &&
                            <User />
                        } */}
                    </div>
                </div>
            </div>
            <div id="content">
                <Home />
                <Problem />
                <Solution />
                <Features />
                <Examples />
                {/* <Pricing /> */}
            </div>
        </>
    )
}