import { useState } from 'react';
import './ReducedImageMaximised.css';

const ReducedImageMaximised = ({ reducedImage, normalImage }: {
    reducedImage: string,
    normalImage: string
}) => {
    const [reducedImageLoaded, setReducedImageLoaded] = useState(false);

    const reducedImageLoadedHandler = () => {
        setReducedImageLoaded(true);
    };



    return (
        <>
            { reducedImageLoaded && <img src={normalImage} className="photos-photo-maximised" />}
            <img
                src={reducedImage}
                className="photos-photo-maximised-reduced"
                onLoad={reducedImageLoadedHandler} 
            />
        </>
    );
};

export default ReducedImageMaximised;