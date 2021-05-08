import { useState } from 'react';
import PhotosMaximisedGallery from '../PhotosMaximisedGallery/MaximisedGallery';
import PhotosMinimisedGallery from '../PhotosMinimisedGallery/PhotosMinimisedGallery';
import './PhotosGallery.css';

const PhotosGallery = ({ photos, reducedPhotos, thumbnailPhotos }: {
    photos: string[],
    reducedPhotos: string[],
    thumbnailPhotos: string[]
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
            <PhotosMinimisedGallery reducedPhotos={reducedPhotos} thumbnailPhotos={thumbnailPhotos} toggleMaximisedGallery={toggleMaximisedGallery} />
            {selectedPhoto !== false &&
                <PhotosMaximisedGallery
                    toggleMaximisedGallery={toggleMaximisedGallery}
                    photos={photos}
                    startingPhotoIdx={selectedPhoto}
                    thumbnailPhotos={thumbnailPhotos}
                />
            }
        </>
    );
};

export default PhotosGallery;