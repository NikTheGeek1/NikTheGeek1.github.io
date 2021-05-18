import './PhotosMinimisedGallery.css';
import PhotoGalleryStyle from '../../utils/PhotoGalleryStyle';
import LowerQualityPhotoMinimised from '../LowerQualityPhotoMinimised/LowerQualityPhotoMinimised';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const PhotosMinimisedGallery = ({ normalPhotos, lowerQualityPhotos, toggleMaximisedGallery }:
    {
        normalPhotos: string[],
        lowerQualityPhotos: string[],
        toggleMaximisedGallery: (showMaximisedFlag: false | number) => void
    }) => {


    const openMaximisedGalleryHanlder = (photoIdx: number) => {
        toggleMaximisedGallery(photoIdx);
    };

    const dynamicStyles = new PhotoGalleryStyle(normalPhotos);
    const photosJSX = normalPhotos.map((photo, photoIdx) => {
        if (photoIdx === 5) {
            return (
                <div className="photos-more-than-5-container" key={photo + photoIdx}>
                    <div className="photos-more-than-5-text">
                        +{(normalPhotos.length) - 5} Photos
                    </div>
                </div>
            );
        } else if (photoIdx < 5) {
            return (
                <div key={photo + photoIdx} style={dynamicStyles.photosStyles[photoIdx]} className="photos-photo-container" onClick={openMaximisedGalleryHanlder.bind(this, photoIdx)}>
                    <div className="photos-photo-overlay"></div>
                    {
                        photo.slice(-3) === "mp4" ?
                         <VideoPlayer video={photo} type="minimised" />
                        :
                            <LowerQualityPhotoMinimised lowerQualityPhoto={lowerQualityPhotos[photoIdx]} normalPhoto={normalPhotos[photoIdx]} />

                    }

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