import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three';
import { Suspense, useMemo, type JSX } from 'react';
import { Leva, useControls } from 'leva'
import './App.css'
import { Cup } from './models/Cup';
import { WaterBottle } from './models/Water_bottle';
import Navbar from './components/Navbar';

function App() {
  // const model: any = useGLTF('/cup.glb');
  // model.scene.traverse(function (node: any) {
  //   node.castShadow = true;
  //   node.receiveShadow = true;
  // })

  const componentMap: Record<string, JSX.Element> = {
    'Cup': <Cup />,
    'Water bottle': <WaterBottle />,
  }

  const envOptions = useMemo(() => {
    return {
      Intensity: { value: 1, min: 0, max: 1, step: 0.05 },
      Color: { value: '#2d2f34' }
    }
  }, [])

  const productOptions = useMemo(() => {
    return {
      Product: {
        options: Object.keys(componentMap),
        value: 'Cup', // default selected
      }
    }
  }, [])

  const environment = useControls('Environment', envOptions)
  const product = useControls('Product', productOptions)

  const sizes = {
    folderTitleHeight: '40px'
  }
  const fonts = {
    mono: `'Roboto'`,
    sans: `Roboto`,
  }
  const fontSizes = {
    root: '12px',
  }
  const colors = {
    elevation1: '#292d39',
    elevation2: '#101012',
    elevation3: '#373C4B',
    accent1: '#0066DC',
    accent2: '#007BFF',
    accent3: '#3C93FF',
    highlight1: '#535760',
    highlight2: '#8C92A4',
    highlight3: '#FEFEFE',
    vivid1: '#ffcc00',
  }
  const theme = { colors, fonts, fontSizes, sizes }

  return (
    <div>
      <Navbar />
      <div id="app-container">
        <div id="scene-container">
          <Canvas id="scene-canvas" camera={{ fov: 45, position: [3, 2, 6] }}>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[0, -10, 0]} intensity={0.1} />
            <directionalLight position={[-10, -10, 10]} intensity={0.5} />
            <directionalLight position={[0, 0, -10]} intensity={0.2} />


            <Environment background near={1} far={1000} resolution={256} environmentIntensity={environment.Intensity}>
              <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial color={environment.Color} side={THREE.BackSide} />
              </mesh>
            </Environment>


            {/* <primitive object={model.scene} scale={product.scale} /> */}

            <Suspense>{componentMap[product.Product]}</Suspense>
          </Canvas>
        </div>
        <div id="property-container">
          <Leva
            titleBar={{ drag: false }}
            collapsed={false}
            fill={true}
            flat={true}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}

export default App
