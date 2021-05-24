import Project from './Project/Project';
import './Projects.css';
import ProjectsTexts from '../../html-texts/Projects';
import allPhotos from '../../imports/import-project-photos';
import { useEffect } from 'react';
import { useStore } from '../../hooks-store/store';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';

const Projects = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PROJECTS);
    }, []);
    console.log(allPhotos, 'Projects.tsx', 'line: ', '16');
    return (
        <>
        <Project
                title="Multiplayer BlackJack"
                photos={allPhotos.blackJack}
                details={ProjectsTexts.blackJack}
                gitHubRepoLink="https://github.com/NikTheGeek1/blackJack"
                website=""
                technologies={["JAVA", "React.js", "Custom hooks", "React-native", "Hibernate", "Spring Security", "STOMP", "WebSockets", "Testing"]}
            />
            <Project
                title="World Atlas 3D"
                details={ProjectsTexts.worldAtlas}
                photos={allPhotos.worldAtlas}
                gitHubRepoLink="https://github.com/NikTheGeek1/worldAtlas"
                website="https://world-atlas-webgl.web.app/"
                technologies={["WebGL", "Three.js", "React.js", "Typescript"]}
            />
            <Project
                title="Restaurant Booking App"
                photos={allPhotos.restaurant}
                details={ProjectsTexts.restaurant}
                gitHubRepoLink="https://github.com/NikTheGeek1/restaurant_app_java"
                website="https://restaurant-c.web.app/"
                technologies={["JAVA", "React.js", "Redux", "React-native", "Hibernate", "Spring", "STOMP", "WebSockets"]}
            />
            <Project
                title="!Checkers"
                photos={allPhotos.checkers}
                details={ProjectsTexts.checkers}
                gitHubRepoLink="https://github.com/NikTheGeek1/board_game_app"
                website="https://checkers-43176.web.app"
                technologies={["Node.js", "React.js", "MongoDB", "Socket.io"]}
            />
            <Project
                title="Reinforcement Learning task"
                photos={allPhotos.reinforcementLearning}
                details={ProjectsTexts.reinforcementLearning}
                gitHubRepoLink="https://github.com/NikTheGeek1/reinforcement_learning_task"
                website="https://reinforcement-learning-task.web.app/"
                technologies={["Node.js", "React.js", "Machine Learning", "MongoDB"]}
            />
            <Project
                title="xCovers"
                photos={allPhotos.xcovers}
                details={ProjectsTexts.xcovers}
                website="http://www.xcovers.gr/"
                technologies={["Node.js", "Redux", "Redux-thunk", "React.js", "SASS", "Responsive design"]}
            />
            <Project
                title="Online experiment"
                photos={allPhotos.onlineExperiment}
                details={ProjectsTexts.onlineExperiment1}
                gitHubRepoLink="https://github.com/NikTheGeek1/zendo-cond-3"
                website="http://zendo-cond-3.herokuapp.com"
                technologies={["Node.js", "React.js", "Redux", "SASS", "IvanK.js"]}
            />
            
        </>

    );
};

export default Projects;