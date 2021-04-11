import { createRef, useEffect, useState } from 'react';
import './ThreeD.css';
import Main from '../../threeD/Main';

const ThreeD = () => {
    const [webGLMainInstance, setWebGLMainInstance] = useState<Main>();
    const canvasRef = createRef<HTMLCanvasElement>();
  
    useEffect(() => {
      if (canvasRef && canvasRef.current) {
        const webGLMainInstance: Main = new Main(canvasRef.current);
        setWebGLMainInstance(webGLMainInstance);
        webGLMainInstance.init();
      }
  
    }, []);
  
    return (
      <canvas ref={canvasRef}></canvas>
    );
};

export default ThreeD;