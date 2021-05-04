import './PhotosMinimisedGallery.css';

const PhotosMinimisedGallery = ({ photos }:
    {
        photos: string[]
    }) => {

    const numOfPhotosClass = `photos-${photos.length}`;

    const photosJSX = photos.map(photo => {
        // let imgHeight;
        // let img = new Image();
        // img.src = photo;
        // img.onload = () => {
        //     imgHeight = img.height;
        // }
        return <img key={photo} src={photo} className="photos-photo"/>;
    });

    return (
        <div className={`photos-minimised-gallery-container ${numOfPhotosClass}`}>
            {photosJSX}
        </div>
    );
};

export default PhotosMinimisedGallery;