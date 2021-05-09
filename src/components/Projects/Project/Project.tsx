import './Project.css';
import BoxText from '../../../components/Texts/BoxText';
import SVGIcon from '../../../components/SVGIcon/SVGIcon';
import gitHubIcon from '../../../assets/svgs/github.svg';
import websiteIcon from '../../../assets/svgs/website.svg';
import TagBubble from '../../../components/TagBubble/TagBubble';
import PhotosGallery from '../../../components/PhotosGallery/PhotosGallery';
import { useEffect } from 'react';
import { useStore } from 'src/hooks-store/store';
import { storeVisitorLocation } from 'src/utils/visitor-tracker';
import { LOCATIONS_ENUM } from 'src/hooks-store/stores/visitor-map';


const Project = ({ title, photos, gitHubRepoLink, website, details, technologies }: {
    title: string,
    photos: ImagesVersionsInterface,
    gitHubRepoLink?: string,
    website?: string,
    details: string,
    technologies: string[]
}) => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PROJECTS);
    }, []);
    const technologiesJSX = technologies.map(tech => {
        return <TagBubble key={tech} title={tech}/>;
    }); 

    return (
        <div className="project-container">
            <div className="project-title-container">{title}</div>
            <div className="project-photos-container">
                <PhotosGallery photos={photos} />
            </div>
            <div className="project-details-container">
                <div className="project-details">
                    <BoxText>{details}</BoxText>
                </div>
                <div className="project-technologies-container">
                    {technologiesJSX}
                </div>
                <div className="project-links">
                    {gitHubRepoLink && <SVGIcon icon={gitHubIcon} onClick={() => window?.open(gitHubRepoLink, '_blank')?.focus()} />}
                    {website && <SVGIcon icon={websiteIcon} onClick={() => window?.open(website, '_blank')?.focus()} />}
                </div>
            </div>
        </div>
    );
};

export default Project;