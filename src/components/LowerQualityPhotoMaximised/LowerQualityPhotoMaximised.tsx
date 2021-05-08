import { useEffect, useState } from 'react';
import './LowerQualityPhotoMaximised.css';

const LowerQualityPhotoMaximised = ({ lowerQualityPhoto, normalPhoto }: {
    lowerQualityPhoto: string,
    normalPhoto: string
}) => {
    const [lowerQualityLoaded, setLowerQualityPhotoLoaded] = useState(false);

    const lowerQualityLoadedHandler = () => {
        console.log(lowerQualityLoaded, 'LowerQualityPhotoMaximised.tsx', 'line: ', '16');
        setLowerQualityPhotoLoaded(true);
    };


    return (
        <>
            { lowerQualityLoaded && <img src={normalPhoto} className="photos-photo-maximised" />}
            <img
                src={lowerQualityPhoto}
                className={`photos-photo-maximised-reduced-z${lowerQualityLoaded ? "0" : "1"}`}
                onLoad={lowerQualityLoadedHandler} 
            />
        </>
    );
};

export default LowerQualityPhotoMaximised;