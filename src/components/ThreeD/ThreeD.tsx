import { createRef, useEffect, useState } from 'react';
import './ThreeD.css';
import Main from '../../threeD/Main';
import Monkey from 'src/threeD/Monkey';

const ThreeD = ({ setMonkeyClicked }: { setMonkeyClicked: (clicked: boolean) => void }) => {
  const [monkeyInstance, setMonkeyInstance] = useState<Monkey | null>(null);
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const webGLMainInstance: Main = Main.createOrGetInstance(canvasRef.current, setMonkeyClicked);
      webGLMainInstance.init();
      setMonkeyInstance(webGLMainInstance.monkeyInstance);
    }
  }, []);

  useEffect(() => {
    // get path parameter from the URL
    const url = new URL(window.location.href);
    const path = url.searchParams.get("path");
    // if there is a path parameter, click on the monkey
    if (path && monkeyInstance) {
      setTimeout(() => {
        monkeyInstance.onClick(true);
      }, 2000);
    }
  }, [monkeyInstance]);

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
};

export default ThreeD;