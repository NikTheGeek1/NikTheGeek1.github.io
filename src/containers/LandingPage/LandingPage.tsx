import './LandingPage.css';
import ThreeD from '../../components/ThreeD/ThreeD';
import PrimaryHeading from '../../components/Headings/PrimaryHeading/PrimaryHeading';
import SecondaryHeading from '../../components/Headings/SecondaryHeading/SecondaryHeading';
import { useEffect, useState } from 'react';
import Profile from '../../containers/Profile/Profile';
import { useHistory } from 'react-router';
import { pathsEnum } from '../../enums/paths';

interface ExitingClasses { primaryHeading: string, secondaryHeading: string };
const LandingPage = () => {

    const [monkeyClicked, setMonkeyClicked] = useState<boolean>(false);
    const [exitingAnimationFinished, setExitingAnimationFinished] = useState<boolean>(false);
    const [landingPageClass, setLandingPageClass] = useState<string>("landing-page-main-before-animation");
    const history = useHistory();
    
    useEffect(() => {
        if (monkeyClicked) {
            const animationTimer = setTimeout(() => {
                setExitingAnimationFinished(true);
                setLandingPageClass("landing-page-main-after-animation");
                clearTimeout(animationTimer);
            }, 1800);
        }
    }, [monkeyClicked]);

    let exitingClasses: ExitingClasses = { primaryHeading: '', secondaryHeading: '' };
    if (monkeyClicked) {
        exitingClasses["primaryHeading"] = "primary-heading-exitting-animation";
        exitingClasses["secondaryHeading"] = "secondary-heading-exitting-animation";
    }

    return (
        <main className={"landing-page-main " + landingPageClass}>
            <div className="canvas-container-landing-page">
                <ThreeD setMonkeyClicked={setMonkeyClicked} />
            </div>
            { !exitingAnimationFinished ?
                <>
                    <div className={"landing-page-title " + exitingClasses.primaryHeading}>
                        <PrimaryHeading content="Welcome to my" />
                    </div>
                    <div className={"landing-page-subtitle " + exitingClasses.secondaryHeading}>
                        <SecondaryHeading content="Personal space" />
                    </div>
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