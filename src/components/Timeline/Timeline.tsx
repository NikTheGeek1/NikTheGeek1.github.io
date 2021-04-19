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

const Timeline = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        storeVisitorLocation(visitorToken, LOCATIONS_ENUM.TIMELINE);
    }, []);

    return (
        <>
            <GenericBox title="Intro" rowSpan={1} columnSpan={4}>
                <BoxPlainText>{TimelineTexts.intro}</BoxPlainText>
            </GenericBox>
            <GenericBox title="Latest news" rowSpan={2} columnSpan={3}>
                <LatestNewsBox title="CodeClan graduation" date={new Date()} icon={codeclanIcon} >
                    {TimelineTexts.codeClanGraduation}
                </LatestNewsBox>
            </GenericBox>
            <GenericBox title="Graduation" rowSpan={1} columnSpan={1}>
                <img src={codeclanGraduation} alt="graduation-pic" className="timeline-cc-graduation-pic"/>
            </GenericBox>
        </>
    );
};

export default Timeline;