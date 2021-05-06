import { useState } from 'react';
import './ReducedImage.css';

const ReducedImage = ({reducedImage, normalImage}: {
    reducedImage: string,
    normalImage: string
}) => {
    const [normalImageLoaded, setNormalImageLoaded] = useState(false);
    const [reducedImageLoaded, setReducedImageLoaded] = useState(false);
    const reducedImageLoadedHandler = () => {
        setReducedImageLoaded(true);
    };
    
    const normalImageLoadedHandler = () => {
        setNormalImageLoaded(true);
    };

    return (
        <>
            { !reducedImageLoaded && <img src={normalImage} className="photos-photo" onLoad={normalImageLoadedHandler}/> }
            { !normalImageLoaded && <img src={reducedImage} className="photos-photo-reduced" onLoad={reducedImageLoadedHandler} /> }
        </>
    );
};

export default ReducedImage;