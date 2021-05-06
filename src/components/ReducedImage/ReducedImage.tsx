import { useState } from 'react';
import './ReducedImage.css';

const ReducedImage = ({reducedImage, normalImage}: {
    reducedImage: string,
    normalImage: string
}) => {
    const [normalImageLoaded, setNormalImageLoaded] = useState(false);

    return (
        <>
            <img src={normalImage} className="photos-photo" onLoad={setNormalImageLoaded.bind(this, true)}/>
            { !normalImageLoaded && <img src={reducedImage} className="photos-photo-reduced" /> }
        </>
    );
};

export default ReducedImage;