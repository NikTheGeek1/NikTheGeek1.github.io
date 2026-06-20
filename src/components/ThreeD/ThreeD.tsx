import { createRef, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ThreeD.css';
import Main from '../../threeD/Main';
import Monkey from 'src/threeD/Monkey';

const ThreeD = ({ setMonkeyClicked, playExitAnimation = false }: { setMonkeyClicked: (clicked: boolean) => void, playExitAnimation?: boolean }) => {
  const [monkeyInstance, setMonkeyInstance] = useState<Monkey | null>(null);
  const exitAnimationStarted = useRef<boolean>(false);
  const canvasRef = createRef<HTMLCanvasElement>();
  const location = useLocation();

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const webGLMainInstance: Main = Main.createOrGetInstance(canvasRef.current, setMonkeyClicked);
      webGLMainInstance.init();
      setMonkeyInstance(webGLMainInstance.monkeyInstance);
    }
  }, []);

  useEffect(() => {
    if (!playExitAnimation || !monkeyInstance || exitAnimationStarted.current) {
      return;
    }

    const startExitAnimation = () => {
      const started = monkeyInstance.onClick(true);
      if (started) {
        exitAnimationStarted.current = true;
      }
      return started;
    };

    if (startExitAnimation()) {
      return;
    }

    const retryTimer = window.setInterval(() => {
      if (startExitAnimation()) {
        window.clearInterval(retryTimer);
      }
    }, 100);

    return () => window.clearInterval(retryTimer);
  }, [playExitAnimation, monkeyInstance]);

  useEffect(() => {
    // get path parameter from the URL
    const params = new URLSearchParams(location.search);
    const path = params.get("path");
    const isDeepLink = location.pathname !== "/" || path || params.get("project");
    // if there is a path parameter, click on the monkey
    if (isDeepLink && monkeyInstance) {
      setTimeout(() => {
        monkeyInstance.onClick(true);
      }, 2000);
    }
  }, [location.pathname, location.search, monkeyInstance]);

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
};

export default ThreeD;
