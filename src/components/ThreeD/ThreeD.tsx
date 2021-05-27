import { createRef, useEffect } from 'react';
import './ThreeD.css';
import Main from '../../threeD/Main';

const ThreeD = ({ setMonkeyClicked }: {setMonkeyClicked:(clicked: boolean) => void}) => {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const webGLMainInstance: Main = Main.createOrGetInstance(canvasRef.current, setMonkeyClicked);
      webGLMainInstance.init();
    }
  }, []);

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
};

export default ThreeD;