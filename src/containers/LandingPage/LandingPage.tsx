import './LandingPage.css';
import ThreeD from '../../components/ThreeD/ThreeD';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../../containers/Profile/Profile';

const LandingPage = () => {

    const [monkeyClicked, setMonkeyClicked] = useState<boolean>(false);
    const [monkeyTransitionRequested, setMonkeyTransitionRequested] = useState<boolean>(false);
    const [exitingAnimationFinished, setExitingAnimationFinished] = useState<boolean>(false);
    const [landingPageClass, setLandingPageClass] = useState<string>("landing-page-main-before-animation");
    const location = useLocation();

    useEffect(() => {
        if (monkeyClicked) {
            const animationTimer = setTimeout(() => {
                setExitingAnimationFinished(true);
                setLandingPageClass("landing-page-main-after-animation");
                clearTimeout(animationTimer);
            }, 1500);
        }
    }, [monkeyClicked]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const isDeepLink = location.pathname !== "/" || params.get("path") || params.get("project");
        if (isDeepLink && !monkeyClicked) {
            setMonkeyClicked(true);
        }
    }, [location.pathname, location.search, monkeyClicked]);

    const heroExitingClass = monkeyClicked ? "landing-hero-exiting-animation" : "";
    const suzanneVisibleClass = monkeyClicked || monkeyTransitionRequested ? "canvas-container-landing-page-visible" : "";

    const viewProfileHandler = () => {
        setMonkeyTransitionRequested(true);
    };

    return (
        <main className={"landing-page-main " + landingPageClass}>
            <div className={"canvas-container-landing-page " + suzanneVisibleClass}>
                <ThreeD setMonkeyClicked={setMonkeyClicked} playExitAnimation={monkeyTransitionRequested} />
            </div>
            {!exitingAnimationFinished ?
                <>
                    <section className={"landing-hero " + heroExitingClass}>
                        <div className="landing-hero-accent" />
                        <h1 className="landing-hero-name">Nikos<br />Theodoropoulos</h1>
                        <p className="landing-hero-role">Lead Developer &amp; Product Engineer</p>
                        <p className="landing-hero-summary">
                            I build practical software where robotics, education, and analysis meet.
                        </p>
                        <div className="landing-hero-ctas">
                            <button type="button" className="landing-hero-cta" onClick={viewProfileHandler} disabled={monkeyTransitionRequested || monkeyClicked}>View profile</button>
                        </div>
                        <p className="landing-hero-context">Robotics / education / analysis</p>
                    </section>
                </>
                :
                <>
                    <div className="gap gap1"></div>
                    <section className="profile-section">
                        <Profile />
                    </section>
                    <div className="gap gap2"></div>
                </>

            }
        </main >
    );
};

export default LandingPage;
