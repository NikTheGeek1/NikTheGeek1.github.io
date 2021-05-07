import { useState } from 'react';
import PhotosMaximisedGallery from '../PhotosMaximisedGallery/MaximisedGallery';
import PhotosMinimisedGallery from '../PhotosMinimisedGallery/PhotosMinimisedGallery';
import './PhotosGallery.css';

const PhotosGallery = ({ photos, reducedPhotos }: {
    photos: string[],
    reducedPhotos: string[]
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
            <PhotosMinimisedGallery photos={photos} reducedPhotos={reducedPhotos} toggleMaximisedGallery={toggleMaximisedGallery} />
            {selectedPhoto !== false && <PhotosMaximisedGallery
                toggleMaximisedGallery={toggleMaximisedGallery}
                photos={photos}
                startingPhotoIdx={selectedPhoto}
            />}
        </>
    );
};

export default PhotosGallery;