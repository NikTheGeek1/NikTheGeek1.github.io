import './Project.css';
import BoxText from '../../../components/Texts/BoxText';
import SVGIcon from '../../../components/SVGIcon/SVGIcon';
import gitHubIcon from '../../../assets/svgs/github.svg';
import websiteIcon from '../../../assets/svgs/website.svg';
import TagBubble from '../../../components/TagBubble/TagBubble';
import PhotosGallery from '../../../components/PhotosGallery/PhotosGallery';

const Project = ({ title, photos, reducedPhotos, thumbnailPhotos, gitHubRepoLink, website, details, technologies }: {
    title: string,
    photos: string[],
    reducedPhotos: string[],
    thumbnailPhotos: string[],
    gitHubRepoLink?: string,
    website?: string,
    details: string,
    technologies: string[]
}) => {

   
    const technologiesJSX = technologies.map(tech => {
        return <TagBubble key={tech} title={tech}/>;
    }); 

    return (
        <div className="project-container">
            <div className="project-title-container">{title}</div>
            <div className="project-photos-container">
                <PhotosGallery photos={photos} reducedPhotos={reducedPhotos} thumbnailPhotos={thumbnailPhotos} />
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