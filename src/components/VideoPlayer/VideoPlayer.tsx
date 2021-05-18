import './VideoPlayer.css';
import { videoPlayerType } from 'video-player-type';

const VideoPlayer = ({ video, type }: { video: string, type: videoPlayerType }) => {

    let videoJSX;
    if (type === "minimised") {
        videoJSX = (
            <video preload="metadata" className="video-minimised">
                <source src={video + "#t=0.1"} type="video/mp4" />
            </video>
        );
    } else if (type === "maximised") {
        videoJSX = (
            <video controls loop autoPlay className="video-maximised">
                <source src={video} type="video/mp4" />
            </video>
        );
    } else {
        videoJSX = (
            <video preload="metadata" className="video-carousel">
                <source src={video + "#t=0.1"} type="video/mp4" />
            </video>
        );
    }

    return videoJSX;
};

export default VideoPlayer;