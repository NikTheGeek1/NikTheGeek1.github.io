import './LandingPage.css';
import ThreeD from '../../components/ThreeD/ThreeD';
import { useEffect, useState } from 'react';
import Profile from '../../containers/Profile/Profile';
import PrimaryHeading from '../../components/Headings/PrimaryHeading/PrimaryHeading';
import SecondaryHeading from '../../components/Headings/SecondaryHeading/SecondaryHeading';

interface ExitingClasses { primaryHeading: string, clickOnSuzanne: string };
const LandingPage = () => {

    const [monkeyClicked, setMonkeyClicked] = useState<boolean>(false);
    const [exitingAnimationFinished, setExitingAnimationFinished] = useState<boolean>(false);
    const [landingPageClass, setLandingPageClass] = useState<string>("landing-page-main-before-animation");

    useEffect(() => {
        if (monkeyClicked) {
            const animationTimer = setTimeout(() => {
                setExitingAnimationFinished(true);
                setLandingPageClass("landing-page-main-after-animation");
                clearTimeout(animationTimer);
            }, 1500);
        }
    }, [monkeyClicked]);

    let exitingClasses: ExitingClasses = { primaryHeading: '', clickOnSuzanne: '' };
    if (monkeyClicked) {
        exitingClasses["primaryHeading"] = "primary-heading-exitting-animation";
        exitingClasses["clickOnSuzanne"] = "click-on-suzanne-exiting-animation";
    }

    const focusAreas = [
        {
            icon: "🧭",
            title: "Leadership",
            copy: "Lead cross-functional squads, coach engineers, and keep delivery rituals lightweight but predictable."
        },
        {
            icon: "🧱",
            title: "Architecture",
            copy: "Own the technical strategy for learning platforms that blend robotics, ML, and content systems."
        },
        {
            icon: "🚀",
            title: "Product Delivery",
            copy: "Translate research insights into shipped features, balancing experimentation with measurable outcomes."
        }
    ];

    return (
        <main className={"landing-page-main " + landingPageClass}>
            <div className="canvas-container-landing-page">
                <ThreeD setMonkeyClicked={setMonkeyClicked} />
            </div>
            {!exitingAnimationFinished ?
                <>
                    <section className={"landing-hero " + exitingClasses.primaryHeading}>
                        <PrimaryHeading content="Nikos Theodoropoulos" />
                        <SecondaryHeading content="Lead Developer & Product Engineer" />
                        <p className="landing-hero-summary">
                            I partner with educators, researchers, and product teams to ship resilient platforms that make robotics and learning more accessible.
                        </p>
                        <div className="landing-hero-focus">
                            {focusAreas.map(area => (
                                <article className="landing-hero-focus-card" key={area.title}>
                                    <div className="landing-hero-focus-icon">{area.icon}</div>
                                    <h3>{area.title}</h3>
                                    <p>{area.copy}</p>
                                </article>
                            ))}
                        </div>
                        <div className="landing-hero-ctas">
                            <button type="button" className="landing-hero-cta" onClick={() => setMonkeyClicked(true)}>View profile</button>
                        </div>
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
