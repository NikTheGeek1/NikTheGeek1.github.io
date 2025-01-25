import styles from "./texts-styles.module.css";

const getTxtFromJsx = (jsx: JSX.Element): string => {
    // recursively extract text from JSX
    if (typeof jsx === "string") {
        return jsx;
    }
    if (Array.isArray(jsx)) {
        return jsx.map(getTxtFromJsx).join(" ");
    }
    if (typeof jsx === "object") {
        return getTxtFromJsx(jsx.props.children);
    }
    return "";
}

class ProjectsText {

    /* Expanded descriptions */
    public static worldAtlasExpanded = <>
        <p className={styles.paragraph}>WorldAtlas is a 3D globe visualization built with Three.js, offering an interactive interface for an intuitive user experience.</p>
        <p className={styles.paragraph}>Users can navigate the globe in 3D, zoom, rotate, and select countries to access detailed information. The app is fully responsive, working seamlessly across all devices, including mobile phones and tablets.</p>
    </>;

    public static restaurantExpanded = <>
        <p className={styles.paragraph}>RestaurantBooking is a table reservation system designed to simplify bookings for both customers and staff through user-friendly web and mobile apps for iOS and Android.</p>
        <p className={styles.paragraph}>Customers can reserve tables, browse menus, and place orders, while staff can efficiently manage reservations and orders in real time. The system is secure, scalable, and supports multiple restaurants and users.</p>
    </>;

    public static checkersExpanded = <>
        <p className={styles.paragraph}>!Checkers (Bang Checkers) is a multiplayer game developed in just six days by a small team, demonstrating effective project collaboration.</p>
        <p className={styles.paragraph}>Players can compete in real time, chat, and review their game history. The game is designed to be secure and scalable, supporting multiple simultaneous matches.</p>
    </>;

    public static reinforcementLearningExpanded = <>
        <p className={styles.paragraph}>GridWorld is a 2D simulation game that allows players to experiment with reinforcement learning algorithms such as Value Iteration, Q-Learning, and Monte-Carlo.</p>
        <p className={styles.paragraph}>Users can train agents to complete tasks, analyze their performance, and compare algorithms. The game offers an engaging way to learn reinforcement learning concepts.</p>
    </>;

    public static xcoversExpanded = <>
        <p className={styles.paragraph}>A website created for a family business during my time as a Psychology graduate, blending professional and amateur design elements.</p>
    </>;

    public static onlineExperiment1Expanded = <>
        <p className={styles.paragraph}>An experiment focused on hypothesis updating, conducted as part of a broader research project to enhance understanding of cognitive processes.</p>
    </>;

    public static blackJackExpanded = <>
        <p className={styles.paragraph}>BlackJack is an online card game featuring smooth animations powered by WebGL and canvas, with a robust back-end incorporating unit tests, web sockets, and Spring Security.</p>
        <p className={styles.paragraph}>Players can engage in real-time matches, chat, and track their game history. The game is built for scalability and security, supporting multiple concurrent players.</p>
    </>;

    public static networkGraphExpanded = <>
        <p className={styles.paragraph}>NetworkGraph is an interactive visualization of Facebook connections, built using Three.js and 3d-force-graph.</p>
        <p className={styles.paragraph}>A custom web crawler gathers data from around 150,000 users, with Node.js handling back-end processing and caching for optimized performance. Users can explore and analyze their social networks in an intuitive and visually appealing way.</p>
    </>;

    public static machineLearningRoboticalExpanded = <>
        <p className={styles.paragraph}>A tool for creating machine learning models in Scratch without requiring coding or prior expertise. These models can be integrated with Sprites or Robots to respond to predictions.</p>
        <p className={styles.paragraph}>Users can build models in three steps: data collection, model training, and prediction.</p>
        <p className={styles.paragraph}>The tool also supports models from Google's Teachable Machine platform.</p>
        <p className={styles.paragraph}>Built with TensorFlow.js and Service Workers, all processing is handled on the front end.</p>
        <p className={styles.paragraph}>This project introduced the first machine learning feature in Robotical's product lineup.</p>
    </>;

    public static martyControllerExpanded = <>
        <p className={styles.paragraph}>Marty Controller was one of my first projects at Robotical. It is a platform for controlling Marty the Robot, offering two modes: a real-time joystick and a sequencer.</p>
        <p className={styles.paragraph}>In joystick mode, Marty responds instantly to commands, providing real-time control. In sequencer mode, users can create a sequence of commands that Marty will execute in order.</p>
        <p className={styles.paragraph}>While not a complex project, it holds personal significance as it marked the beginning of my journey at Robotical. A before-and-after comparison image is included to showcase improvements made during the update.</p>
    </>;

    public static learningPortalExpanded = <>
        <p className={styles.paragraph}>The Learning Portal is a platform offering over 100 courses on robotics and Marty. It is built with Next.js for both the front and back end, with content managed through Sanity.io.</p>
        <p className={styles.paragraph}>This project replaced an older Gatsby-based static site, introducing features such as dynamic filtering, server-side rendering, and a caching mechanism for improved performance.</p>
        <p className={styles.paragraph}>The platform aligns with educational standards from multiple regions, including Australia, the UK, the US, and more. Migrating to Next.js enabled dynamic content delivery based on the user's location, with plans to incorporate comments and reviews for lessons and activities in the future.</p>
    </>;

    public static codeAssessExpanded = <>
        <p className={styles.paragraph}>Code Assess is a platform designed to support teachers in delivering computer science and programming education, particularly for non-specialist educators.</p>
        <p className={styles.paragraph}>It assists teachers by automating assessment, identifying students who need additional support, and those ready for advanced challenges. The platform evaluates students' understanding of coding concepts, regardless of the specific code they create.</p>
        <p className={styles.paragraph}>Compatible with existing Scratch-based lessons, with or without Marty, it provides insights into coding habits and student engagement. The platform tracks competency development over time and offers detailed reports via a teacher dashboard.</p>
        <p className={styles.paragraph}>Future updates will introduce personalized lesson recommendations and progress badges for students, as well as performance reports for school administrators to support curriculum planning and communication with stakeholders.</p>
        <p className={styles.paragraph}>The platform leverages WebSockets for real-time communication between clients and the server, ensuring seamless interaction and updates.</p>
    </>;

    public static cogMiniGamesExpanded = <>
        <p className={styles.paragraph}>A collection of mini-games designed for Cog, Robotical's educational device, aimed at introducing young learners to fundamental programming concepts and ScratchJr.</p>
        <p className={styles.paragraph}>Games include:</p>
        <ul>
            <li><strong>Code Wheel:</strong> Introduces sequencing by demonstrating how code blocks execute in order.</li>
            <li><strong>Jumping Game:</strong> Players use Cog as a joystick to avoid obstacles, learning about event-based programming.</li>
            <li><strong>Maze:</strong> A 2D maze where players associate Cog's tilt actions with directional movement, reinforcing event handling concepts.</li>
        </ul>
        <br />
        <p className={styles.paragraph}>Instead of using a keyboard, the games utilize Cog's IR and accelerometer sensors to interact with the gameplay.</p>
    </>;

    public static blocksToPythonExpanded = <>
        <p className={styles.paragraph}>Feedback from users highlighted challenges in moving from block-based programming to Python due to differences in syntax and complexity.</p>
        <p className={styles.paragraph}>So the Blocks to Python transpiler is a feature that converts Scratch blocks into Python code, bridging the gap between visual and text-based programming.</p>
        <p className={styles.paragraph}>This feature allows young learners to control Marty the Robot using either Scratch or Python, helping them transition between the two environments.</p>
    </>;

    public static sensorsDashboardExpanded = <>
        <p className={styles.paragraph}>The Sensors Dashboard is a data visualization tool for Marty the Robot, providing insights from various built-in sensors such as color, infrared, light, noise, accelerometer, magnetometer, and more.</p>
        <p className={styles.paragraph}>It serves as an introduction to data science concepts and graphing for young learners, helping them understand real-time data processing.</p>
        <p className={styles.paragraph}>The dashboard is available as a standalone tool and is also integrated into MartyBlocks, Robotical's Scratch-based programming environment, allowing users to visualize sensor data as they interact with Marty.</p>
    </>;

    public static scratchJrWebExpanded = <>
        <p className={styles.paragraph}>ScratchJr Web is a web-based adaptation of the ScratchJr platform, originally developed for mobile devices. Due to high demand, a web version was created to provide broader accessibility.</p>
        <p className={styles.paragraph}>To the best of my knowledge, there are no other web-based implementations of ScratchJr available online. While a desktop version exists, it relies on Electron.</p>
        <p className={styles.paragraph}>One of the key challenges was implementing a front-end database for asset storage, similar to the phone application version. LocalStorage was not a suitable option, so IndexedDB was used instead.</p>
        <p className={styles.paragraph}>IndexedDB, a low-level NoSQL database built into modern web browsers, allows efficient client-side storage of structured data, making it a fitting solution for managing assets within the application.</p>
    </>;

    public static newsHubExpanded = <>
        <p className={styles.paragraph}>News Hub is a feature developed to facilitate communication with users of Marty the Robot, implemented in under two days to address the need for firmware update notifications.</p>
        <p className={styles.paragraph}>It enables targeted communication with users running outdated firmware, allowing them to receive relevant update alerts. Additionally, the platform supports two-way interaction, enabling users to provide feedback and respond to a weekly question that refreshes periodically.</p>
    </>;

    public static dreamsForLittlesExpanded = <>
        <p className={styles.paragraph}>Dreams for Littles is a baby activity tracking app available for iOS and Android devices, allowing users to log activities such as breastfeeding, diaper changes, and more.</p>
        <p className={styles.paragraph}>The app provides data analysis and visualization features in the analysis tab, which is accessible through a premium subscription.</p>
        <p className={styles.paragraph}>Additional features include reminders and notifications to help parents stay organized.</p>
    </>;




    /* Small descriptions */
    public static worldAtlas = getTxtFromJsx(ProjectsText.worldAtlasExpanded);
    public static restaurant = getTxtFromJsx(ProjectsText.restaurantExpanded);
    public static checkers = getTxtFromJsx(ProjectsText.checkersExpanded);
    public static reinforcementLearning = getTxtFromJsx(ProjectsText.reinforcementLearningExpanded);
    public static xcovers = getTxtFromJsx(ProjectsText.xcoversExpanded);
    public static onlineExperiment1 = getTxtFromJsx(ProjectsText.onlineExperiment1Expanded);
    public static blackJack = getTxtFromJsx(ProjectsText.blackJackExpanded);
    public static networkGraph = getTxtFromJsx(ProjectsText.networkGraphExpanded);
    public static machineLearningRobotical = getTxtFromJsx(ProjectsText.machineLearningRoboticalExpanded);
    public static martyController = getTxtFromJsx(ProjectsText.martyControllerExpanded);
    public static learningPortal = getTxtFromJsx(ProjectsText.learningPortalExpanded);
    public static codeAssess = getTxtFromJsx(ProjectsText.codeAssessExpanded);
    public static cogMiniGames = getTxtFromJsx(ProjectsText.cogMiniGamesExpanded);
    public static blocksToPython = getTxtFromJsx(ProjectsText.blocksToPythonExpanded);
    public static sensorsDashboard = getTxtFromJsx(ProjectsText.sensorsDashboardExpanded);
    public static scratchJrWeb = getTxtFromJsx(ProjectsText.scratchJrWebExpanded);
    public static newsHub = getTxtFromJsx(ProjectsText.newsHubExpanded);
    public static dreamsForLittles = getTxtFromJsx(ProjectsText.dreamsForLittlesExpanded);

}

export default ProjectsText;