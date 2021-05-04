import Project from './Project/Project';
import './Projects.css';
import worldAtlasPhoto1 from '../../assets/images/projects/world-atlas/world-atlas-1.png';
import restaurantPhoto1 from '../../assets/images/projects/restaurant-app/restaurant-1.png';
import restaurantPhoto2 from '../../assets/images/projects/restaurant-app/restaurant-2.png';
import restaurantPhoto3 from '../../assets/images/projects/restaurant-app/restaurant-3.png';

const Projects = () => {

    return (
        <>
            <Project title="title" photos={[worldAtlasPhoto1]}/>
            <Project title="title" photos={[restaurantPhoto1, restaurantPhoto2]}/>
            <Project title="title" photos={[restaurantPhoto1, restaurantPhoto2, restaurantPhoto3]}/>
        </>
    );
};

export default Projects;