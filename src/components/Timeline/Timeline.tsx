import './Timeline.css';
import { useStore } from '../../hooks-store/store';
import { useEffect } from 'react';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';
import GenericBox from '../ProfileBoxes/GenericBox/GenericBox';
import TimelineTexts from '../../html-texts/Timeline';
import BoxPlainText from '../Texts/BoxText';
import LatestNewsBox from '../ProfileBoxes/LatestNewsBox/LatestNewsBox';
import codeclanIcon from '../../assets/images/codeclan-icon.jpeg';
import codeclanGraduation from '../../assets/images/codeclan-graduation.jpeg';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import showcase from '../../assets/images/showcase-white.png';

const Timeline = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        storeVisitorLocation(visitorToken, LOCATIONS_ENUM.TIMELINE);
    }, []);

    return (
        <>
            <GenericBox title="Intro" rowSpan={1} columnSpan={3}>
                <BoxPlainText>{TimelineTexts.intro}</BoxPlainText>
            </GenericBox>
            <GenericBox title="Other networks" rowSpan={1} columnSpan={1}>
                <SocialNetworks />
            </GenericBox>
            <GenericBox title="Latest news" rowSpan={2} columnSpan={2}>
                <LatestNewsBox title="CodeClan graduation" date={new Date("3/6/2021")} icon={codeclanIcon} >
                    {TimelineTexts.codeClanGraduation}
                </LatestNewsBox>
                <LatestNewsBox title="Showcase presentation" date={new Date("3/25/2021")} icon={showcase} >
                    {TimelineTexts.showcasePresentation}
                </LatestNewsBox>
            </GenericBox>
            <GenericBox title="." rowSpan={1} columnSpan={2}>
                {/* <img src={codeclanGraduation} alt="graduation-pic" className="timeline-cc-graduation-pic"/> */}
            </GenericBox>
        </>
    );
};

export default Timeline;