import './App.css'
import Navbar from './components/Navbar/Navbar';
import Scene from './components/Scene/Scene';
import Properties from './components/Properties/Properties';
import { useEffect, useRef, useState } from 'react';
import useExportStore from './components/Properties/Export/ExportStore';
import useEnvironmentStore from './components/Properties/Scene/SceneStore';
import { Canvas } from '@react-three/fiber';
import { Bvh } from '@react-three/drei';

function App() {
  const [showToast, setShowToast] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null)
  const aspectRatio = useExportStore((s) => s.aspectRatio)
  const solidTransparent = useEnvironmentStore((s) => s.colorTransparent)
  const hdriTransparent = useEnvironmentStore((s) => s.hdriTransparent)
  const [containerDim, setContainerDim] = useState<[number, number]>([100, 100])

  // Calculate scene container size on resize and on aspect ratio change
  useEffect(() => {
    const updateSize = () => {
      if (!sceneRef.current) return;
      const newCtrDim = calculateNewDim(sceneRef.current.offsetWidth - 20, sceneRef.current.offsetHeight - 20, aspectRatio)
      setContainerDim(newCtrDim)
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [aspectRatio]);

  // Display toast message on phone
  useEffect(() => {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches
    const isMobile = window.innerWidth <= 768
    if (isPortrait && isMobile) {
      setShowToast(true)
    }
  }, [])

  // Hide toast message after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false)
      }, 5000)

      return () => clearTimeout(timeout) // Cleanup on unmount or re-render
    }
  }, [showToast])

  const calculateNewDim = (maxWidth: number, maxHeight: number, aspect: string): [number, number] => {
    if (aspect === 'Default') return [100, 100]
    const aspectRatio = aspect.split(':').map((s) => Number(s));
    const widthFactor = maxWidth / aspectRatio[0];
    const heightFactor = maxHeight / aspectRatio[1];

    const multiplier = Math.min(widthFactor, heightFactor);
    const newWidth = aspectRatio[0] * multiplier;
    const newHeight = aspectRatio[1] * multiplier;

    const newWidthPercent = (newWidth * 100) / maxWidth
    const newHeightPercent = (newHeight * 100) / maxHeight

    return [newWidthPercent, newHeightPercent]
  }

  return (
    <div>
      <Navbar />
      <div id="app-container">
        <div ref={sceneRef} id="scene-container">
          <div id="aspect-container" style={{ width: `${containerDim[0]}%`, height: `${containerDim[1]}%` }}>
            <div id="transparent-bg" style={{ display: solidTransparent || hdriTransparent ? 'block' : 'none' }}></div>
            <Canvas id="scene-canvas" camera={{ fov: 45, position: [3, 2, 6] }} resize={{ debounce: 100 }} gl={{ preserveDrawingBuffer: true }}>
              <Bvh>
                <Scene />
              </Bvh>
            </Canvas>
          </div>
        </div>
        <div id="property-container">
          <Properties />
        </div>
        {showToast && (
          <div id="info-message">
            Please view on desktop browser or switch to landscape mode
          </div>
        )}
      </div>
    </div>
  )
}

export default App
