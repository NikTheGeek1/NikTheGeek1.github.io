import { useState } from 'react';
import PhotosMaximisedGallery from '../PhotosMaximisedGallery/MaximisedGallery';
import PhotosMinimisedGallery from '../PhotosMinimisedGallery/PhotosMinimisedGallery';
import './PhotosGallery.css';

const PhotosGallery = ({ photos }: {
    photos: ImagesVersionsInterface,
}) => {
    const [selectedPhoto, setSelectedPhoto] = useState<false | number>(false);

    const toggleMaximisedGallery = (showMaximisedFlag: false | number) => {
        if (showMaximisedFlag === false) {
            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: auto");
        }
        setSelectedPhoto(showMaximisedFlag);
    };

    return (
        <>
            <PhotosMinimisedGallery normalPhotos={photos.reducedMin} lowerQualityPhotos={photos.lowerQualityMin} toggleMaximisedGallery={toggleMaximisedGallery} />
            {selectedPhoto !== false &&
                <PhotosMaximisedGallery
                    toggleMaximisedGallery={toggleMaximisedGallery}
                    normalPhotos={photos.reducedMax}
                    lowerQualityPhotos={photos.lowerQualityMax}
                    startingPhotoIdx={selectedPhoto}
                    thumbnailPhotos={photos.thumbnail}
                />
            }
        </>
    );
};

export default PhotosGallery;