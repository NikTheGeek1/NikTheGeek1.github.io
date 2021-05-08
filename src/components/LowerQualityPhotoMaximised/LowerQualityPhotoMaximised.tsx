import { useEffect, useState } from 'react';
import './LowerQualityPhotoMaximised.css';

const LowerQualityPhotoMaximised = ({ lowerQualityPhoto, normalPhoto }: {
    lowerQualityPhoto: string,
    normalPhoto: string
}) => {
    const [lowerQualityLoaded, setLowerQualityPhotoLoaded] = useState(false);

    console.log(lowerQualityLoaded, 'LowerQualityPhotoMaximised.tsx', 'line: ', '16');
    const lowerQualityLoadedHandler = () => {
        setLowerQualityPhotoLoaded(true);
    };

    return (
        <>
            { lowerQualityLoaded && <img src={normalPhoto} className="photos-photo-maximised" />}
            <img
                src={lowerQualityPhoto}
                className={`photos-photo-maximised-reduced`}
                onLoad={lowerQualityLoadedHandler} 
            />
        </>
    );
};

export default LowerQualityPhotoMaximised;