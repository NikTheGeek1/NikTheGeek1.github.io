import PhotosMinimisedGallery from '../../../components/PhotosMinimisedGallery/PhotosMinimisedGallery';
import './Project.css';

const Project = ({title, photos}: {
    title: string,
    photos: string[]
}) => {

    return (
        <div className="project-container">
            <div className="project-title-container">{title}</div>
            <div className="project-photos-container">
                <PhotosMinimisedGallery photos={photos}/>
            </div>
            <div className="project-details-container">details</div>
        </div>
    );
};

export default Project;