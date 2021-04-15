import './Timeline.css';
import BoxTitle from '../BoxTitle/BoxTitle';

const Timeline = () => {

    return (
        <>
            <div className="timeline-profile-intro timeline-side-box">
                <BoxTitle title="Intro"/>
            </div>
            <div className="timeline-profile-latest-news timeline-main-box">
                <BoxTitle title="Latest news"/>
            </div>
        </>
    );
};

export default Timeline;