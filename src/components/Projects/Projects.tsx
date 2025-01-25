import Project from './Project/Project';
import './Projects.css';
import ProjectsTexts from '../../html-texts/Projects';
import allPhotos from '../../imports/import-project-photos';
import { useEffect, useState } from 'react';
import { useStore } from '../../hooks-store/store';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';
import SectionTitle from '../SectionTitle/SectionTitle';

enum PROJECTS_ENUM {
    NETWORK_GRAPH = "network-graph",
    BLACKJACK = "blackJack",
    WORLD_ATLAS = "worldAtlas",
    RESTAURANT = "restaurant",
    CHECKERS = "checkers",
    REINFORCEMENT_LEARNING = "reinforcement-learning",
    XCOVERS = "xcovers",
    ONLINE_EXPERIMENT = "online-experiment",
    MACHINE_LEARNING_ROBOTICAL = "machine-learning-robotical",
    MARTY_CONTROLLER_ROBOTICAL = "marty-controller-robotical",
    LEARNING_PORTAL = "learning-portal",
    CODE_ASSESS = "code-assess",
    MINI_GAMES_ROBOTICAL = "mini-games-robotical",
    BLOCKS_TO_PYTHON_TRANSPILER = "blocks-to-python-transpiler",
    SENSORS_DASHBOARD = "sensors-dashboard",
    SCRATCHJR_WEB = "scratchjr-web",
    NEWS_HUB_ROBOTICAL = "news-hub-robotical",
    DREAMS_FOR_LITTLES = "dreams-for-littles",
}

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PROJECTS);
    }, []);

    useEffect(() => {
        const url = new URL(window.location.href);
        const projectParam = url.searchParams.get("project");
        setExpandedProject(projectParam);
        setTimeout(() => {
            if (projectParam) {
                const project = document.getElementById(projectParam);
                if (project) {
                    project.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 2000);
    }, []);

    return (
        <div className="projects-container">
            <h2 style={{ gridColumn: "span 4", color: "white", fontFamily: "Quicksand" }}>In all the projects listed below, I was the sole developer, fully responsible for all aspects of programming. Although I received design mockups and assets for some projects, the development was executed entirely by me.</h2>
            <SectionTitle title={"Robotical"} />
            <Project
                key={PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL + (expandedProject === PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL).toString()}
                id={PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL}
                title="Machine Learning in Scratch"
                photos={allPhotos.machineLearningRobotical}
                details={ProjectsTexts.machineLearningRobotical}
                expandedDetails={ProjectsTexts.machineLearningRoboticalExpanded}
                website=""
                technologies={["TensorFlow.js", "Service Workers", "Machine Learning", "Image Classification", "Audio Classification"]}
                expanded={expandedProject === PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL}
            />
            <Project
                key={PROJECTS_ENUM.CODE_ASSESS + (expandedProject === PROJECTS_ENUM.CODE_ASSESS).toString()}
                id={PROJECTS_ENUM.CODE_ASSESS}
                title="Code.assess"
                photos={allPhotos.codeAssess}
                details={ProjectsTexts.codeAssess}
                expandedDetails={ProjectsTexts.codeAssessExpanded}
                website=""
                technologies={["Websockets", "Node.js", "Firestore", "Google API"]}
                expanded={expandedProject === PROJECTS_ENUM.CODE_ASSESS}
            />
            <Project
                key={PROJECTS_ENUM.SENSORS_DASHBOARD + (expandedProject === PROJECTS_ENUM.SENSORS_DASHBOARD).toString()}
                id={PROJECTS_ENUM.SENSORS_DASHBOARD}
                title="Sensors Dashboard"
                photos={allPhotos.sensorsDashboard}
                details={ProjectsTexts.sensorsDashboard}
                expandedDetails={ProjectsTexts.sensorsDashboardExpanded}
                website=""
                technologies={["Data Visualization", "Plotly.js", "IoT", "Sensor Data"]}
                expanded={expandedProject === PROJECTS_ENUM.SENSORS_DASHBOARD}
            />
            <Project
                key={PROJECTS_ENUM.LEARNING_PORTAL + (expandedProject === PROJECTS_ENUM.LEARNING_PORTAL).toString()}
                id={PROJECTS_ENUM.LEARNING_PORTAL}
                title="Learning Portal"
                photos={allPhotos.learningPortal}
                details={ProjectsTexts.learningPortal}
                expandedDetails={ProjectsTexts.learningPortalExpanded}
                website=""
                technologies={["Next.js", "GraphQL", "Sanity.io", "Analytics", "Firebase", "SEO", "AWS"]}
                expanded={expandedProject === PROJECTS_ENUM.LEARNING_PORTAL}
            />
            <Project
                key={PROJECTS_ENUM.SCRATCHJR_WEB + (expandedProject === PROJECTS_ENUM.SCRATCHJR_WEB).toString()}
                id={PROJECTS_ENUM.SCRATCHJR_WEB}
                title="ScratchJr Web"
                photos={allPhotos.scratchJrWeb}
                details={ProjectsTexts.scratchJrWeb}
                expandedDetails={ProjectsTexts.scratchJrWebExpanded}
                website=""
                technologies={["IndexedDB", "Phone to Web Migration"]}
                expanded={expandedProject === PROJECTS_ENUM.SCRATCHJR_WEB}
            />
            <Project
                key={PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL + (expandedProject === PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL).toString()}
                id={PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL}
                title="Marty Controller"
                photos={allPhotos.martyController}
                details={ProjectsTexts.martyController}
                expandedDetails={ProjectsTexts.martyControllerExpanded}
                website=""
                technologies={["React.js", "HTML", "CSS"]}
                expanded={expandedProject === PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL}
            />
            <Project
                key={PROJECTS_ENUM.MINI_GAMES_ROBOTICAL + (expandedProject === PROJECTS_ENUM.MINI_GAMES_ROBOTICAL).toString()}
                id={PROJECTS_ENUM.MINI_GAMES_ROBOTICAL}
                title="Mini Games"
                photos={allPhotos.cogMiniGames}
                details={ProjectsTexts.cogMiniGames}
                expandedDetails={ProjectsTexts.cogMiniGamesExpanded}
                website=""
                technologies={["Canvas", "WebGL", "Event-driven programming"]}
                expanded={expandedProject === PROJECTS_ENUM.MINI_GAMES_ROBOTICAL}
            />
            <Project
                key={PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER + (expandedProject === PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER).toString()}
                id={PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER}
                title="Blocks to Python Transpiler"
                photos={allPhotos.blocksToPythonTranspiler}
                details={ProjectsTexts.blocksToPython}
                expandedDetails={ProjectsTexts.blocksToPythonExpanded}
                website=""
                technologies={["Algorithms", "Data Structures", "Transpilers", "Python", "Blockly"]}
                expanded={expandedProject === PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER}
            />
            <Project
                key={PROJECTS_ENUM.NEWS_HUB_ROBOTICAL + (expandedProject === PROJECTS_ENUM.NEWS_HUB_ROBOTICAL).toString()}
                id={PROJECTS_ENUM.NEWS_HUB_ROBOTICAL}
                title="News Hub"
                photos={allPhotos.newsHub}
                details={ProjectsTexts.newsHub}
                expandedDetails={ProjectsTexts.newsHubExpanded}
                website=""
                technologies={["React.js", "Firestore"]}
                expanded={expandedProject === PROJECTS_ENUM.NEWS_HUB_ROBOTICAL}
            />

            <SectionTitle title={"Freelance"} />
            <Project
                key={PROJECTS_ENUM.DREAMS_FOR_LITTLES + (expandedProject === PROJECTS_ENUM.DREAMS_FOR_LITTLES).toString()}
                id={PROJECTS_ENUM.DREAMS_FOR_LITTLES}
                title="Dreams for Littles"
                photos={allPhotos.dreamsForLittles}
                details={ProjectsTexts.dreamsForLittles}
                expandedDetails={ProjectsTexts.dreamsForLittlesExpanded}
                technologies={["React-Native", "Firestore", "Firebase", "Data Visualisation", "Data Analysis", "Subscriptions", "SaaS"]}
                expanded={expandedProject === PROJECTS_ENUM.DREAMS_FOR_LITTLES}
            />
            <Project
                key={PROJECTS_ENUM.XCOVERS + (expandedProject === PROJECTS_ENUM.XCOVERS).toString()}
                id={PROJECTS_ENUM.XCOVERS}
                title="xCovers"
                photos={allPhotos.xcovers}
                details={ProjectsTexts.xcovers}
                expandedDetails={ProjectsTexts.xcoversExpanded}
                website="http://www.xcovers.gr/"
                technologies={["Node.js", "Redux", "Redux-thunk", "React.js", "SASS", "Responsive design"]}
                expanded={expandedProject === PROJECTS_ENUM.XCOVERS}
            />

            <SectionTitle title={"Older"} />
            <Project
                key={PROJECTS_ENUM.REINFORCEMENT_LEARNING + (expandedProject === PROJECTS_ENUM.REINFORCEMENT_LEARNING).toString()}
                id={PROJECTS_ENUM.REINFORCEMENT_LEARNING}
                title="Reinforcement Learning task"
                photos={allPhotos.reinforcementLearning}
                details={ProjectsTexts.reinforcementLearning}
                expandedDetails={ProjectsTexts.reinforcementLearningExpanded}
                gitHubRepoLink="https://github.com/NikTheGeek1/reinforcement_learning_task"
                website="https://reinforcement-learning-task.web.app/"
                technologies={["Node.js", "React.js", "Reinforcement Learning", "MongoDB"]}
                expanded={expandedProject === PROJECTS_ENUM.REINFORCEMENT_LEARNING}
            />
            <Project
                key={PROJECTS_ENUM.BLACKJACK + (expandedProject === PROJECTS_ENUM.BLACKJACK).toString()}
                id={PROJECTS_ENUM.BLACKJACK}
                title="Multiplayer BlackJack"
                photos={allPhotos.blackJack}
                details={ProjectsTexts.blackJack}
                expandedDetails={ProjectsTexts.blackJackExpanded}
                gitHubRepoLink="https://github.com/NikTheGeek1/blackJack"
                website=""
                technologies={["JAVA", "React.js", "Custom hooks", "React-native", "Hibernate", "Spring Security", "STOMP", "WebSockets", "Testing"]}
                expanded={expandedProject === PROJECTS_ENUM.BLACKJACK}
            />
            <Project
                key={PROJECTS_ENUM.RESTAURANT + (expandedProject === PROJECTS_ENUM.RESTAURANT).toString()}
                id={PROJECTS_ENUM.RESTAURANT}
                title="Restaurant Booking App"
                photos={allPhotos.restaurant}
                details={ProjectsTexts.restaurant}
                expandedDetails={ProjectsTexts.restaurantExpanded}
                gitHubRepoLink="https://github.com/NikTheGeek1/restaurant_app_java"
                technologies={["JAVA", "React.js", "Redux", "React-native", "Hibernate", "Spring", "STOMP", "WebSockets"]}
                expanded={expandedProject === PROJECTS_ENUM.RESTAURANT}
            />
            <Project
                key={PROJECTS_ENUM.CHECKERS + (expandedProject === PROJECTS_ENUM.CHECKERS).toString()}
                id={PROJECTS_ENUM.CHECKERS}
                title="!Checkers"
                photos={allPhotos.checkers}
                details={ProjectsTexts.checkers}
                expandedDetails={ProjectsTexts.checkersExpanded}
                gitHubRepoLink="https://github.com/NikTheGeek1/board_game_app"
                technologies={["Node.js", "React.js", "MongoDB", "Socket.io"]}
                expanded={expandedProject === PROJECTS_ENUM.CHECKERS}
            />
            <Project
                key={PROJECTS_ENUM.NETWORK_GRAPH + (expandedProject === PROJECTS_ENUM.NETWORK_GRAPH).toString()}
                id={PROJECTS_ENUM.NETWORK_GRAPH}
                title="Facebook Friends Network Graph"
                photos={allPhotos.networkGraph}
                details={ProjectsTexts.networkGraph}
                expandedDetails={ProjectsTexts.networkGraphExpanded}
                website=""
                technologies={["Three.js", "3d-force-graph", "React.js", "Typescript", "Node.js", "Express.js", "Python", "Graph Theory"]}
                expanded={expandedProject === PROJECTS_ENUM.NETWORK_GRAPH}
            />
            <Project
                key={PROJECTS_ENUM.WORLD_ATLAS + (expandedProject === PROJECTS_ENUM.WORLD_ATLAS).toString()}
                id={PROJECTS_ENUM.WORLD_ATLAS}
                title="World Atlas 3D"
                details={ProjectsTexts.worldAtlas}
                expandedDetails={ProjectsTexts.worldAtlasExpanded}
                photos={allPhotos.worldAtlas}
                gitHubRepoLink="https://github.com/NikTheGeek1/worldAtlas"
                website="https://world-atlas-webgl.web.app/"
                technologies={["WebGL", "Three.js", "React.js", "Typescript"]}
                expanded={expandedProject === PROJECTS_ENUM.WORLD_ATLAS}
            />
            <Project
                key={PROJECTS_ENUM.ONLINE_EXPERIMENT + (expandedProject === PROJECTS_ENUM.ONLINE_EXPERIMENT).toString()}
                id={PROJECTS_ENUM.ONLINE_EXPERIMENT}
                title="Online experiment"
                photos={allPhotos.onlineExperiment}
                details={ProjectsTexts.onlineExperiment1}
                expandedDetails={ProjectsTexts.onlineExperiment1Expanded}
                gitHubRepoLink="https://github.com/NikTheGeek1/zendo-cond-3"
                technologies={["Node.js", "React.js", "Redux", "SASS", "IvanK.js"]}
                expanded={expandedProject === PROJECTS_ENUM.ONLINE_EXPERIMENT}
            />

        </div>

    );
};

export default Projects;