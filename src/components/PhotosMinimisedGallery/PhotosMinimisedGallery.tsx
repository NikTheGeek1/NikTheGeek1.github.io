import './PhotosMinimisedGallery.css';
import PhotoGalleryStyle from '../../utils/PhotoGalleryStyle';
import ReducedImage from '../ReducedImage/ReducedImage';

const PhotosMinimisedGallery = ({ photos, reducedPhotos, toggleMaximisedGallery }:
    {
        photos: string[],
        reducedPhotos: string[],
        toggleMaximisedGallery: (showMaximisedFlag: false | number) => void
    }) => {


    const openMaximisedGalleryHanlder = (photoIdx: number) => {
        toggleMaximisedGallery(photoIdx);
    };

    const dynamicStyles = new PhotoGalleryStyle(photos);
    const photosJSX = photos.map((photo, photoIdx) => {
        if (photoIdx === 5) {
            return (
                <div className="photos-more-than-5-container" key={photo+photoIdx}>
                    <div className="photos-more-than-5-text">
                        +{(photos.length) - 5} Photos
                    </div>
                </div>
            );
        } else if (photoIdx < 5) {
            return (
                <div key={photo+photoIdx} style={dynamicStyles.photosStyles[photoIdx]} className="photos-photo-container" onClick={openMaximisedGalleryHanlder.bind(this, photoIdx)}>
                    <div className="photos-photo-overlay"></div>
                    <ReducedImage reducedImage={reducedPhotos[photoIdx]} normalImage={photo} />
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