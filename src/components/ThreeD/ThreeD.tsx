import { createRef, useEffect, useState } from 'react';
import './ThreeD.css';
import Main from '../../threeD/Main';

const ThreeD = ({ setMonkeyClicked }: {setMonkeyClicked:(clicked: boolean) => void}) => {
  const [webGLMainInstance, setWebGLMainInstance] = useState<Main>();
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const webGLMainInstance: Main = new Main(canvasRef.current, setMonkeyClicked);
      setWebGLMainInstance(webGLMainInstance);
      webGLMainInstance.init();
    }
  }, []);

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
};

export default ThreeD;