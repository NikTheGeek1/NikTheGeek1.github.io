import './About.css';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';
import { useStore } from '../../hooks-store/store';
import { useEffect } from 'react';

const About = () => {
    const visitorToken = useStore(false)[0].visitorToken;
    
    useEffect(() => {
        storeVisitorLocation(visitorToken, LOCATIONS_ENUM.ABOUT);
    }, []);
    return (
        <div>about</div>
    );
};

export default About;