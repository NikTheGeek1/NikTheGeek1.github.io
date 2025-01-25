import './Project.css';
import BoxText from '../../../components/Texts/BoxText';
import SVGIcon from '../../../components/SVGIcon/SVGIcon';
import gitHubIcon from '../../../assets/svgs/github.svg';
import websiteIcon from '../../../assets/svgs/website.svg';
import TagBubble from '../../../components/TagBubble/TagBubble';
import PhotosGallery from '../../../components/PhotosGallery/PhotosGallery';
import { ImagesVersionsInterface } from '../../../types/images-versions-interface';
import { useState } from 'react';

const Project = ({ title, photos, gitHubRepoLink, website, details, expandedDetails, technologies, id, expanded = false }: {
    title: string,
    photos: ImagesVersionsInterface,
    gitHubRepoLink?: string,
    website?: string,
    details: string,
    expandedDetails: JSX.Element,
    technologies: string[],
    id: string,
    expanded?: boolean
}) => {
   const [isExpanded, setIsExpanded] = useState(expanded);

    const technologiesJSX = technologies.map(tech => {
        return <TagBubble key={tech} title={tech}/>;
    }); 

    return (
        <div className={isExpanded ? "project-container project-container-expanded" : "project-container"} id={id}>
            <div className="project-title-container">{title}</div>
            <div className="project-photos-container">
                <PhotosGallery photos={photos} />
            </div>
            <div className="project-details-container">
                <div className="project-details">
                    {isExpanded ? expandedDetails : <BoxText extraClasses='inline-text-box'>{truncateText(details, 300)} </BoxText>}
                    <p style={{display: "inline", textDecoration: "underline", cursor: "pointer"}} onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "Read less" : "Read more"}
                    </p>
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


const truncateText = (text: string, length: number) => {    
    return text.length > length ? text.slice(0, length) + "..." : text;
};