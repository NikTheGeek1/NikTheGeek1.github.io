import { useState } from 'react';
import './ReducedImage.css';

const ReducedImage = ({ reducedImage, normalImage }: {
    reducedImage: string,
    normalImage: string
}) => {
    const [reducedImageLoaded, setReducedImageLoaded] = useState(false);

    const reducedImageLoadedHandler = () => {
        setReducedImageLoaded(true);
    };



    return (
        <>
            { reducedImageLoaded && <img src={normalImage} className="photos-photo" />}
            <img
                src={reducedImage}
                className="photos-photo-reduced"
                onLoad={reducedImageLoadedHandler} 
            />
        </>
    );
};

export default ReducedImage;