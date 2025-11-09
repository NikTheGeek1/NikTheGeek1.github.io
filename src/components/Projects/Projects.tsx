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
    DIY_ALARM_SYSTEM = "diy-alarm-system",
}

const SECTION_KEYS = {
    CONNECTED_HARDWARE: "connectedHardware",
    ROBOTICAL: "robotical",
    FREELANCE: "freelance",
    OLDER: "older",
} as const;

type SectionKey = typeof SECTION_KEYS[keyof typeof SECTION_KEYS];

const projectSectionMap: Partial<Record<PROJECTS_ENUM, SectionKey>> = {
    [PROJECTS_ENUM.DIY_ALARM_SYSTEM]: SECTION_KEYS.CONNECTED_HARDWARE,
    [PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.CODE_ASSESS]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.SENSORS_DASHBOARD]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.LEARNING_PORTAL]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.SCRATCHJR_WEB]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.MINI_GAMES_ROBOTICAL]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.NEWS_HUB_ROBOTICAL]: SECTION_KEYS.ROBOTICAL,
    [PROJECTS_ENUM.DREAMS_FOR_LITTLES]: SECTION_KEYS.FREELANCE,
    [PROJECTS_ENUM.XCOVERS]: SECTION_KEYS.FREELANCE,
    [PROJECTS_ENUM.REINFORCEMENT_LEARNING]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.BLACKJACK]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.RESTAURANT]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.CHECKERS]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.NETWORK_GRAPH]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.WORLD_ATLAS]: SECTION_KEYS.OLDER,
    [PROJECTS_ENUM.ONLINE_EXPERIMENT]: SECTION_KEYS.OLDER,
};

const isProjectKey = (value: string): value is PROJECTS_ENUM => {
    return Object.values(PROJECTS_ENUM).includes(value as PROJECTS_ENUM);
};

const defaultCollapsedState: Record<SectionKey, boolean> = {
    [SECTION_KEYS.CONNECTED_HARDWARE]: true,
    [SECTION_KEYS.ROBOTICAL]: true,
    [SECTION_KEYS.FREELANCE]: true,
    [SECTION_KEYS.OLDER]: true,
};

const sectionProjectCounts: Record<SectionKey, number> = {
    [SECTION_KEYS.CONNECTED_HARDWARE]: 0,
    [SECTION_KEYS.ROBOTICAL]: 0,
    [SECTION_KEYS.FREELANCE]: 0,
    [SECTION_KEYS.OLDER]: 0,
};

(Object.values(PROJECTS_ENUM) as PROJECTS_ENUM[]).forEach(projectKey => {
    const sectionKey = projectSectionMap[projectKey];
    if (sectionKey) {
        sectionProjectCounts[sectionKey] += 1;
    }
});

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const [collapsedSections, setCollapsedSections] = useState<Record<SectionKey, boolean>>(defaultCollapsedState);
    const visitorToken = useStore(false)[0].visitorToken;

    const toggleSection = (sectionKey: SectionKey) => {
        setCollapsedSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey],
        }));
    };

    useEffect(() => {
        visitorToken && storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PROJECTS);
    }, []);

    useEffect(() => {
        const url = new URL(window.location.href);
        const projectParam = url.searchParams.get("project");
        setExpandedProject(projectParam);
        if (projectParam && isProjectKey(projectParam)) {
            const sectionKey = projectSectionMap[projectParam];
            if (sectionKey) {
                setCollapsedSections(prev => ({
                    ...prev,
                    [sectionKey]: false,
                }));
            }
        }
        setTimeout(() => {
            if (projectParam) {
                const project = document.getElementById(projectParam);
                if (project) {
                    project.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 2000);
    }, []);

    const leadershipStats = [
        { value: "5+ years", label: "building education, robotics, and SaaS platforms" },
        { value: "4 squads", label: "led concurrently across web, mobile, and data" },
        { value: "90%+", label: "of roadmap items delivered on time without heroics" }
    ];

    const projectHeadlines: Record<string, string> = {
        [PROJECTS_ENUM.DIY_ALARM_SYSTEM]: "Prototyped an ESP32 alarm that marries firmware, BLE provisioning, and a Web Bluetooth control surface.",
        [PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL]: "Led launch of Robotical's first ML-powered learning feature for classrooms.",
        [PROJECTS_ENUM.CODE_ASSESS]: "Created the live coding assessment workflow used by instructors and sales demos.",
        [PROJECTS_ENUM.SENSORS_DASHBOARD]: "Productised telemetry dashboards aligning firmware, data, and education teams.",
        [PROJECTS_ENUM.LEARNING_PORTAL]: "Directed a CMS + Next.js portal that unifies content, analytics, and subscriptions.",
        [PROJECTS_ENUM.SCRATCHJR_WEB]: "Ported ScratchJR to the browser to widen access for schools without tablets.",
        [PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL]: "Productised joystick and sequenced control flows for Marty robots.",
        [PROJECTS_ENUM.MINI_GAMES_ROBOTICAL]: "Designed mini-games that teach coding concepts via Marty the Robot.",
        [PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER]: "Bridged block-based lessons to production Python code for advanced learners.",
        [PROJECTS_ENUM.NEWS_HUB_ROBOTICAL]: "Centralised product storytelling so marketing can publish without engineers.",
        [PROJECTS_ENUM.DREAMS_FOR_LITTLES]: "Shipped a subscription RN app with activity analytics for childcare coaches.",
        [PROJECTS_ENUM.XCOVERS]: "Delivered a quoting portal automating manual brokerage workflows.",
        [PROJECTS_ENUM.REINFORCEMENT_LEARNING]: "Turned reinforcement-learning research tooling into a shareable web app.",
        [PROJECTS_ENUM.BLACKJACK]: "Architected a real-time multiplayer engine with secure authentication and chat.",
        [PROJECTS_ENUM.RESTAURANT]: "Built omni-channel ordering for diners and staff with synced mobile and web apps.",
        [PROJECTS_ENUM.CHECKERS]: "Mentored a small team to ship a multiplayer game and present it publicly.",
        [PROJECTS_ENUM.NETWORK_GRAPH]: "Visualised 150k Facebook nodes with custom crawling and 3D graph layouts.",
        [PROJECTS_ENUM.WORLD_ATLAS]: "Crafted immersive 3D data visualisation for geography storytelling.",
        [PROJECTS_ENUM.ONLINE_EXPERIMENT]: "Automated cognitive science experiments to collect clean data remotely."
    };

    return (
        <div className="projects-container">
            <section className="projects-intro">
                <h2>Selected deliveries</h2>
                <p>
                    I lead initiatives end-to-end—from shaping the brief with stakeholders, to steering architecture,
                    to pairing with engineers so we land features with measurable outcomes.
                </p>
                <ul className="projects-stats">
                    {leadershipStats.map(stat => (
                        <li key={stat.label}>
                            <strong>{stat.value}</strong>
                            {stat.label}
                        </li>
                    ))}
                </ul>
            </section>
            <SectionTitle
                title={`Connected Hardware (${sectionProjectCounts[SECTION_KEYS.CONNECTED_HARDWARE]})`}
                collapsible
                collapsed={collapsedSections[SECTION_KEYS.CONNECTED_HARDWARE]}
                onToggle={() => toggleSection(SECTION_KEYS.CONNECTED_HARDWARE)}
            />
            {!collapsedSections[SECTION_KEYS.CONNECTED_HARDWARE] && (
                <Project
                    key={PROJECTS_ENUM.DIY_ALARM_SYSTEM + (expandedProject === PROJECTS_ENUM.DIY_ALARM_SYSTEM).toString()}
                    id={PROJECTS_ENUM.DIY_ALARM_SYSTEM}
                    title="Smart Home Demo"
                    photos={allPhotos.diyAlarmSystem}
                    details={ProjectsTexts.diyAlarmSystem}
                    expandedDetails={ProjectsTexts.diyAlarmSystemExpanded}
                    technologies={["ESP32", "FreeRTOS", "NimBLE", "Web Bluetooth", "TypeScript", "ESP-IDF", "Puppeteer"]}
                    headline={projectHeadlines[PROJECTS_ENUM.DIY_ALARM_SYSTEM]}
                    expanded={expandedProject === PROJECTS_ENUM.DIY_ALARM_SYSTEM}
                />
            )}
            <SectionTitle
                title={`Robotical (${sectionProjectCounts[SECTION_KEYS.ROBOTICAL]})`}
                collapsible
                collapsed={collapsedSections[SECTION_KEYS.ROBOTICAL]}
                onToggle={() => toggleSection(SECTION_KEYS.ROBOTICAL)}
            />
            {!collapsedSections[SECTION_KEYS.ROBOTICAL] && (
                <>
                    <Project
                        key={PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL + (expandedProject === PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL).toString()}
                        id={PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL}
                        title="Machine Learning in Scratch"
                        photos={allPhotos.machineLearningRobotical}
                        details={ProjectsTexts.machineLearningRobotical}
                        expandedDetails={ProjectsTexts.machineLearningRoboticalExpanded}
                        website=""
                        technologies={["TensorFlow.js", "Service Workers", "Machine Learning", "Image Classification", "Audio Classification"]}
                        headline={projectHeadlines[PROJECTS_ENUM.MACHINE_LEARNING_ROBOTICAL]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.CODE_ASSESS]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.SENSORS_DASHBOARD]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.LEARNING_PORTAL]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.SCRATCHJR_WEB]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.MARTY_CONTROLLER_ROBOTICAL]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.MINI_GAMES_ROBOTICAL]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.BLOCKS_TO_PYTHON_TRANSPILER]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.NEWS_HUB_ROBOTICAL]}
                        expanded={expandedProject === PROJECTS_ENUM.NEWS_HUB_ROBOTICAL}
                    />
                </>
            )}

            <SectionTitle
                title={`Freelance (${sectionProjectCounts[SECTION_KEYS.FREELANCE]})`}
                collapsible
                collapsed={collapsedSections[SECTION_KEYS.FREELANCE]}
                onToggle={() => toggleSection(SECTION_KEYS.FREELANCE)}
            />
            {!collapsedSections[SECTION_KEYS.FREELANCE] && (
                <>
                    <Project
                        key={PROJECTS_ENUM.DREAMS_FOR_LITTLES + (expandedProject === PROJECTS_ENUM.DREAMS_FOR_LITTLES).toString()}
                        id={PROJECTS_ENUM.DREAMS_FOR_LITTLES}
                        title="Dreams for Littles"
                        photos={allPhotos.dreamsForLittles}
                        details={ProjectsTexts.dreamsForLittles}
                        expandedDetails={ProjectsTexts.dreamsForLittlesExpanded}
                        technologies={["React-Native", "Firestore", "Firebase", "Data Visualisation", "Data Analysis", "Subscriptions", "SaaS"]}
                        headline={projectHeadlines[PROJECTS_ENUM.DREAMS_FOR_LITTLES]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.XCOVERS]}
                        expanded={expandedProject === PROJECTS_ENUM.XCOVERS}
                    />
                </>
            )}

            <SectionTitle
                title={`Older (${sectionProjectCounts[SECTION_KEYS.OLDER]})`}
                collapsible
                collapsed={collapsedSections[SECTION_KEYS.OLDER]}
                onToggle={() => toggleSection(SECTION_KEYS.OLDER)}
            />
            {!collapsedSections[SECTION_KEYS.OLDER] && (
                <>
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
                        headline={projectHeadlines[PROJECTS_ENUM.REINFORCEMENT_LEARNING]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.BLACKJACK]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.RESTAURANT]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.CHECKERS]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.NETWORK_GRAPH]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.WORLD_ATLAS]}
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
                        headline={projectHeadlines[PROJECTS_ENUM.ONLINE_EXPERIMENT]}
                        expanded={expandedProject === PROJECTS_ENUM.ONLINE_EXPERIMENT}
                    />
                </>
            )}

        </div>

    );
};

export default Projects;
