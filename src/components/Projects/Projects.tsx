import Project from './Project/Project';
import './Projects.css';
import ProjectsTexts from '../../html-texts/Projects';
import allPhotos from '../../imports/import-project-photos';

const Projects = () => {

    return (
        <>
            <Project
                title="World Atlas 3D"
                details={ProjectsTexts.worldAtlas}
                photos={allPhotos.worldAtlas}
                gitHubRepoLink="https://github.com/NikTheGeek1/worldAtlas"
                website="https://world-atlas-webgl.web.app/"
                technologies={["WebGL", "Three.js", "React.js"]}
            />
            <Project
                title="Restaurant Booking App"
                photos={allPhotos.restaurant}
                details={ProjectsTexts.restaurant}
                gitHubRepoLink="https://github.com/NikTheGeek1/restaurant_app_java"
                website="https://restaurant-c.web.app/"
                technologies={["JAVA", "React.js", "React-native", "Hibernate", "Spring", "STOMP", "WebSockets"]}
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
                website="https://learning-task.herokuapp.com"
                technologies={["Node.js", "React.js", "Machine Learning", "MongoDB"]}
            />
            <Project
                title="xCovers"
                photos={allPhotos.xcovers}
                details={ProjectsTexts.xcovers}
                website="http://www.xcovers.gr/"
                technologies={["Node.js", "React.js", "SASS", "Responsive design"]}
            />
            <Project
                title="Online experiment"
                photos={allPhotos.onlineExperiment}
                details={ProjectsTexts.onlineExperiment1}
                gitHubRepoLink="https://github.com/NikTheGeek1/zendo-cond-3"
                website="http://zendo-cond-3.herokuapp.com"
                technologies={["Node.js", "React.js", "SASS", "IvanK.js"]}
            />

        </>

    );
};

export default Projects;