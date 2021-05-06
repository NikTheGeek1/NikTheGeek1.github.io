import Project from './Project/Project';
import './Projects.css';
import ProjectsTexts from '../../html-texts/Projects';
import worldAtlasPhoto1 from '../../assets/images/projects/world-atlas/world-atlas-1.png';
import worldAtlasPhoto2 from '../../assets/images/projects/world-atlas/world-atlas-2.png';
import worldAtlasPhoto3 from '../../assets/images/projects/world-atlas/world-atlas-3.png';
import worldAtlasPhotoR1 from '../../assets/images/projects/world-atlas/world-atlas-1-r.png';
import worldAtlasPhotoR2 from '../../assets/images/projects/world-atlas/world-atlas-2-r.png';
import worldAtlasPhotoR3 from '../../assets/images/projects/world-atlas/world-atlas-3-r.png';
import restaurantPhoto1 from '../../assets/images/projects/restaurant-app/restaurant-1.png';
import restaurantPhoto2 from '../../assets/images/projects/restaurant-app/restaurant-2.png';
import restaurantPhoto3 from '../../assets/images/projects/restaurant-app/restaurant-3.png';
import restaurantPhoto4 from '../../assets/images/projects/restaurant-app/restaurant-4.png';
import restaurantPhotoR1 from '../../assets/images/projects/restaurant-app/restaurant-1-r.png';
import restaurantPhotoR2 from '../../assets/images/projects/restaurant-app/restaurant-2-r.png';
import restaurantPhotoR3 from '../../assets/images/projects/restaurant-app/restaurant-3-r.png';
import restaurantPhotoR4 from '../../assets/images/projects/restaurant-app/restaurant-4-r.png';
import checkersPhoto1 from '../../assets/images/projects/checkers/checkers-1.png';
import checkersPhoto2 from '../../assets/images/projects/checkers/checkers-2.png';
import checkersPhoto3 from '../../assets/images/projects/checkers/checkers-3.png';
import checkersPhoto4 from '../../assets/images/projects/checkers/checkers-4.png';
import checkersPhoto5 from '../../assets/images/projects/checkers/checkers-5.png';
import checkersPhoto6 from '../../assets/images/projects/checkers/checkers-6.png';
import checkersPhoto7 from '../../assets/images/projects/checkers/checkers-7.png';
import checkersPhoto8 from '../../assets/images/projects/checkers/checkers-8.png';
import checkersPhoto9 from '../../assets/images/projects/checkers/checkers-9.png';
import checkersPhotoR1 from '../../assets/images/projects/checkers/checkers-1-r.png';
import checkersPhotoR2 from '../../assets/images/projects/checkers/checkers-2-r.png';
import checkersPhotoR3 from '../../assets/images/projects/checkers/checkers-3-r.png';
import checkersPhotoR4 from '../../assets/images/projects/checkers/checkers-4-r.png';
import checkersPhotoR5 from '../../assets/images/projects/checkers/checkers-5-r.png';
import checkersPhotoR6 from '../../assets/images/projects/checkers/checkers-6-r.png';
import checkersPhotoR7 from '../../assets/images/projects/checkers/checkers-7-r.png';
import checkersPhotoR8 from '../../assets/images/projects/checkers/checkers-8-r.png';
import checkersPhotoR9 from '../../assets/images/projects/checkers/checkers-9-r.png';
import rlPhoto1 from '../../assets/images/projects/reinforcement-learning/rl-1.png';
import rlPhoto2 from '../../assets/images/projects/reinforcement-learning/rl-2.png';
import rlPhoto3 from '../../assets/images/projects/reinforcement-learning/rl-3.png';
import rlPhoto4 from '../../assets/images/projects/reinforcement-learning/rl-4.png';
import rlPhotoR1 from '../../assets/images/projects/reinforcement-learning/rl-1-r.png';
import rlPhotoR2 from '../../assets/images/projects/reinforcement-learning/rl-2-r.png';
import rlPhotoR3 from '../../assets/images/projects/reinforcement-learning/rl-3-r.png';
import rlPhotoR4 from '../../assets/images/projects/reinforcement-learning/rl-4-r.png';
import xcoversPhoto1 from '../../assets/images/projects/xcovers/xcovers-1.png';
import xcoversPhoto2 from '../../assets/images/projects/xcovers/xcovers-2.png';
import xcoversPhoto3 from '../../assets/images/projects/xcovers/xcovers-3.png';
import xcoversPhoto4 from '../../assets/images/projects/xcovers/xcovers-4.png';
import xcoversPhotoR1 from '../../assets/images/projects/xcovers/xcovers-1-r.png';
import xcoversPhotoR2 from '../../assets/images/projects/xcovers/xcovers-2-r.png';
import xcoversPhotoR3 from '../../assets/images/projects/xcovers/xcovers-3-r.png';
import xcoversPhotoR4 from '../../assets/images/projects/xcovers/xcovers-4-r.png';

const Projects = () => {

    return (
        <>
            <h1 style={{ color: "white", fontFamily: "monospace", gridColumn: "2/span 2" }}>STILL UNDER CONSTRUCTION</h1>
            <Project
                title="World Atlas 3D"
                details={ProjectsTexts.worldAtlas}
                photos={[worldAtlasPhoto1, worldAtlasPhoto2, worldAtlasPhoto3]}
                reducedPhotos={[worldAtlasPhotoR1, worldAtlasPhotoR2, worldAtlasPhotoR3]}
                gitHubRepoLink="https://github.com/NikTheGeek1/worldAtlas"
                website="https://world-atlas-webgl.web.app/"
                technologies={["WebGL", "Three.js", "React.js"]}
            />
            <Project
                title="Restaurant Booking App"
                photos={[restaurantPhoto3, restaurantPhoto1, restaurantPhoto2, restaurantPhoto4]}
                reducedPhotos={[restaurantPhotoR3, restaurantPhotoR1, restaurantPhotoR2, restaurantPhotoR4]}
                details={ProjectsTexts.restaurant}
                gitHubRepoLink="https://github.com/NikTheGeek1/restaurant_app_java"
                website="https://restaurant-c.web.app/"
                technologies={["JAVA", "React.js", "React-native", "Hibernate", "Spring", "STOMP", "WebSockets"]}
            />
            <Project
                title="!Checkers"
                photos={[checkersPhoto1, checkersPhoto2, checkersPhoto3, checkersPhoto4, checkersPhoto5, checkersPhoto6, checkersPhoto7, checkersPhoto8, checkersPhoto9]}
                reducedPhotos={[checkersPhotoR1, checkersPhotoR2, checkersPhotoR3, checkersPhotoR4, checkersPhotoR5, checkersPhotoR6, checkersPhotoR7, checkersPhotoR8, checkersPhotoR9]}
                details={ProjectsTexts.checkers}
                gitHubRepoLink="https://github.com/NikTheGeek1/board_game_app"
                website="https://checkers-43176.web.app"
                technologies={["Node.js", "React.js", "MongoDB", "Socket.io"]}
            />
            <Project
                title="Reinforcement Learning task"
                photos={[rlPhoto1, rlPhoto2, rlPhoto3, rlPhoto4 ]}
                reducedPhotos={[rlPhotoR1, rlPhotoR2, rlPhotoR3, rlPhotoR4 ]}
                details={ProjectsTexts.reinforcementLearning}
                gitHubRepoLink="https://github.com/NikTheGeek1/reinforcement_learning_task"
                website="https://learning-task.herokuapp.com"
                technologies={["Node.js", "React.js", "Machine Learning", "MongoDB"]}
            />
            <Project
                title="xCovers"
                photos={[xcoversPhoto1, xcoversPhoto2, xcoversPhoto3, xcoversPhoto4]}
                reducedPhotos={[xcoversPhotoR1, xcoversPhotoR2, xcoversPhotoR3, xcoversPhotoR4]}
                details={ProjectsTexts.xcovers}
                website="http://www.xcovers.gr/"
                technologies={["Node.js", "React.js", "SASS", "Responsive design"]}
            />

        </>

    );
};

export default Projects;