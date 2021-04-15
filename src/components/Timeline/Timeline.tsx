import './Timeline.css';
import BoxTitle from '../BoxTitle/BoxTitle';
import { useStore } from '../../hooks-store/store';
import { useEffect } from 'react';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';

const Timeline = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        storeVisitorLocation(visitorToken, LOCATIONS_ENUM.TIMELINE);
    }, []);
    return (
        <>
            <div className="timeline-profile-intro timeline-side-box">
                <BoxTitle title="Intro" />
            </div>
            <div className="timeline-profile-latest-news timeline-main-box">
                <BoxTitle title="Latest news" />
            </div>
        </>
    );
};

export default Timeline;