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
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import showcase from '../../assets/images/showcase-white.png';
import regularTimelinePostIcon from '../../assets/svgs/regular-timeline-post.svg';
import BlogPostBox from '../BlogPost/BlogPostBox/BlogPostBox';
import PhotoGalleryBlog from '../BlogPost/Posts/PhotoGalleryBlog/PhotoGalleryBlog';
import timelinePhotos from '../../imports/import-timeline-photos';

const Timeline = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.TIMELINE);
    }, []);
    
    return (
        <>
            <GenericBox title="Intro" rowSpan={1} columnSpan={3} titleType="title">
                <BoxPlainText>{TimelineTexts.intro}</BoxPlainText>
            </GenericBox>
            <GenericBox title="Other networks" rowSpan={1} columnSpan={1} titleType="subtitle">
                <SocialNetworks />
            </GenericBox>
            <GenericBox title="Latest news" rowSpan={3} columnSpan={3} titleType="title">
                <LatestNewsBox title="Notice of Intention To Submit" date={new Date("4/28/2021")} icon={regularTimelinePostIcon} >
                    {TimelineTexts.NITS}
                </LatestNewsBox>
                <LatestNewsBox title="Showcase presentation" date={new Date("3/24/2021")} icon={showcase} >
                    {TimelineTexts.showcasePresentation}
                </LatestNewsBox>
                <LatestNewsBox title="CodeClan graduation" date={new Date("3/5/2021")} icon={codeclanIcon} photos={timelinePhotos.codeclanGraduation} >
                    {TimelineTexts.codeClanGraduation}
                </LatestNewsBox>
            </GenericBox>
            <BlogPostBox title="Gallery" rowSpan={1} columnSpan={1} subtitle="Creating the gallery component used in this site (working on it).">
                <PhotoGalleryBlog />
            </BlogPostBox>
            <BlogPostBox title="Meet Suzanne" rowSpan={1} columnSpan={1} subtitle="Creating the 3D monkey used in this site (working on it).">
            </BlogPostBox>
        </>
    );
};

export default Timeline;