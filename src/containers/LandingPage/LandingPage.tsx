import './LandingPage.css';
import ThreeD from '../../components/ThreeD/ThreeD';
import PrimaryHeading from '../../components/Headings/PrimaryHeading/PrimaryHeading';
import SecondaryHeading from '../../components/Headings/SecondaryHeading/SecondaryHeading';
import { useEffect, useState } from 'react';
import Profile from '../../containers/Profile/Profile';

interface ExitingClasses { primaryHeading: string, secondaryHeading: string };
const LandingPage = () => {

    const [monkeyClicked, setMonkeyClicked] = useState<boolean>(false);
    const [exitingAnimationFinished, setExitingAnimationFinished] = useState<boolean>(false);

    useEffect(() => {
        if (monkeyClicked) {
            const animationTimer = setTimeout(() => {
                setExitingAnimationFinished(true);
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
        <main className="landing-page-main">
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
                <Profile />
            }
        </main >
    );
};

export default LandingPage;