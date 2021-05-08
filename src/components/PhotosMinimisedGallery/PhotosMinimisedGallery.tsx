import './PhotosMinimisedGallery.css';
import PhotoGalleryStyle from '../../utils/PhotoGalleryStyle';
import ReducedImage from '../ReducedImage/ReducedImage';

const PhotosMinimisedGallery = ({reducedPhotos,thumbnailPhotos, toggleMaximisedGallery }:
    {
        reducedPhotos: string[],
        thumbnailPhotos: string[],
        toggleMaximisedGallery: (showMaximisedFlag: false | number) => void
    }) => {


    const openMaximisedGalleryHanlder = (photoIdx: number) => {
        toggleMaximisedGallery(photoIdx);
    };

    const dynamicStyles = new PhotoGalleryStyle(reducedPhotos);
    const photosJSX = reducedPhotos.map((photo, photoIdx) => {
        if (photoIdx === 5) {
            return (
                <div className="photos-more-than-5-container" key={photo+photoIdx}>
                    <div className="photos-more-than-5-text">
                        +{(reducedPhotos.length) - 5} Photos
                    </div>
                </div>
            );
        } else if (photoIdx < 5) {
            return (
                <div key={photo+photoIdx} style={dynamicStyles.photosStyles[photoIdx]} className="photos-photo-container" onClick={openMaximisedGalleryHanlder.bind(this, photoIdx)}>
                    <div className="photos-photo-overlay"></div>
                    <ReducedImage reducedImage={thumbnailPhotos[photoIdx]} normalImage={reducedPhotos[photoIdx]} />
                </div>
            );
        }
    });

    return (
        <div className="photos-minimised-gallery-container" style={dynamicStyles.containerStyle}>
            {photosJSX}
        </div>
    );
};

export default PhotosMinimisedGallery;