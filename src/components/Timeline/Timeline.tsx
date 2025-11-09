import './Timeline.css';
import { useStore } from '../../hooks-store/store';
import { useEffect } from 'react';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';
import GenericBox from '../ProfileBoxes/GenericBox/GenericBox';
import TimelineTexts from '../../html-texts/Timeline';
import BoxPlainText from '../Texts/BoxText';
import LatestNewsBox from '../ProfileBoxes/LatestNewsBox/LatestNewsBox';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import regularTimelinePostIcon from '../../assets/svgs/regular-timeline-post.svg';
import showcaseIcon from '../../assets/images/showcase-white.png';

const Timeline = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.TIMELINE);
    }, []);

    const highlightEntries = [
        {
            title: "Platform modernisation",
            date: new Date("2024-05-01"),
            icon: showcaseIcon,
            copy: TimelineTexts.platformModernisation
        },
        {
            title: "Engineering leadership rituals",
            date: new Date("2023-11-01"),
            icon: regularTimelinePostIcon,
            copy: TimelineTexts.leadershipRituals
        },
        {
            title: "Telemetry & ML enablement",
            date: new Date("2023-04-01"),
            icon: regularTimelinePostIcon,
            copy: TimelineTexts.telemetryAndML
        }
    ];
    
    return (
        <>
            <GenericBox title="About" rowSpan={2} columnSpan={2} titleType="title">
                <BoxPlainText>{TimelineTexts.intro}</BoxPlainText>
            </GenericBox>
            <GenericBox title="Recent highlights" rowSpan={2} columnSpan={2} titleType="title">
                {highlightEntries.map(entry => (
                    <LatestNewsBox
                        key={entry.title}
                        title={entry.title}
                        date={entry.date}
                        icon={entry.icon}
                    >
                        {entry.copy}
                    </LatestNewsBox>
                ))}
            </GenericBox>
            <GenericBox title="Other networks" rowSpan={1} columnSpan={4} titleType="subtitle">
                <SocialNetworks />
            </GenericBox>
        </>
    );
};

export default Timeline;
