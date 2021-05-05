import Project from './Project/Project';
import './Projects.css';
import worldAtlasPhoto1 from '../../assets/images/projects/world-atlas/world-atlas-1.png';
import restaurantPhoto1 from '../../assets/images/projects/restaurant-app/restaurant-1.png';
import restaurantPhoto2 from '../../assets/images/projects/restaurant-app/restaurant-2.png';
import restaurantPhoto3 from '../../assets/images/projects/restaurant-app/restaurant-3.png';

const Projects = () => {

    return (
        <>
            <h1 style={{color: "white", fontFamily: "monospace", gridColumn: "2/span 2"}}>STILL UNDER CONSTRUCTION</h1>
            <Project
                title="World Atlas 3D"
                details="This project uses Three.js (WebGL wrapper) to depict a 3D representation of the World Atlas, with some basic GUI."
                photos={[worldAtlasPhoto1]}
                gitHubRepoLink="https://github.com/NikTheGeek1/worldAtlas"
                website="https://world-atlas-webgl.web.app/"
            />
            <Project
                title="Restaurant Booking App"
                photos={[restaurantPhoto3, restaurantPhoto1, restaurantPhoto2]}
                details="This a booking system for a restaurant. The restaurant needs a way to book and arrange tables for customers who whant to book. This system is for the staff and the customers to use."
                gitHubRepoLink="https://github.com/NikTheGeek1/restaurant_app_java"
                website="https://restaurant-c.web.app/"
            />

        </>

    );
};

export default Projects;