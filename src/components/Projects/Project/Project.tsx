import './Project.css';
import { useState } from 'react';
import PhotosMinimisedGallery from '../../../components/PhotosMinimisedGallery/PhotosMinimisedGallery';
import PhotosMaximisedGallery from '../../../components/PhotosMaximisedGallery/MaximisedGallery';
import BoxText from '../../../components/Texts/BoxText';
import SVGIcon from '../../../components/SVGIcon/SVGIcon';
import gitHubIcon from '../../../assets/svgs/github.svg';
import websiteIcon from '../../../assets/svgs/website.svg';
import TagBubble from '../../../components/TagBubble/TagBubble';

const Project = ({ title, photos, gitHubRepoLink, website, details, technologies }: {
    title: string,
    photos: string[],
    gitHubRepoLink?: string,
    website?: string,
    details: string,
    technologies: string[]
}) => {

    const [selectedPhoto, setSelectedPhoto] = useState<false | number>(false);
    const toggleMaximisedGallery = (showMaximisedFlag: false | number) => {
        if (showMaximisedFlag === false) {
            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: auto");
        }
        setSelectedPhoto(showMaximisedFlag);
    };

    const technologiesJSX = technologies.map(tech => {
        return <TagBubble key={tech} title={tech}/>;
    }); 

    return (
        <div className="project-container">
            <div className="project-title-container">{title}</div>
            <div className="project-photos-container">
                <PhotosMinimisedGallery photos={photos} toggleMaximisedGallery={toggleMaximisedGallery} />
                {selectedPhoto !== false && <PhotosMaximisedGallery
                    toggleMaximisedGallery={toggleMaximisedGallery}
                    photos={photos}
                    startingPhotoIdx={selectedPhoto}
                />}
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