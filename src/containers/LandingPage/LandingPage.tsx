import './LandingPage.css';
import ThreeD from '../../components/ThreeD/ThreeD';
import PrimaryHeading from '../../components/Headings/PrimaryHeading/PrimaryHeading';
import SecondaryHeading from '../../components/Headings/SecondaryHeading/SecondaryHeading';

const LandingPage = () => {

    return (
        <main className="landing-page-main">
            <div className="canvas-container-landing-page">
                <ThreeD />
            </div>
            <div className="landing-page-title">
                <PrimaryHeading content="Welcome to my" />
            </div>
            <div className="landing-page-subtitle">
                <SecondaryHeading content="Personal space" />
            </div>
        </main>
    );
};

export default LandingPage;