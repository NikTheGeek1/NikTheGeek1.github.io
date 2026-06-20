import { createRef, useEffect, useRef, useState } from 'react';
import './ThreeD.css';
import Main from '../../threeD/Main';
import Monkey from 'src/threeD/Monkey';

const ThreeD = ({ setMonkeyClicked, playExitAnimation = false }: { setMonkeyClicked: (clicked: boolean) => void, playExitAnimation?: boolean }) => {
  const [monkeyInstance, setMonkeyInstance] = useState<Monkey | null>(null);
  const exitAnimationStarted = useRef<boolean>(false);
  const canvasRef = createRef<HTMLCanvasElement>();

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

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
};

export default ThreeD;
