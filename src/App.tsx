import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three';
import { Suspense, useMemo, type JSX } from 'react';
import { Leva, useControls } from 'leva'
import './App.css'
import { Cup } from './models/Cup';
import { WaterBottle } from './models/Water_bottle';

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
      Color: { value: '#18191C' }
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
    rootWidth: '20%'
  }
  const theme = { sizes }

  return (
    <div id="canvas-container">
      <Leva
        titleBar={{ drag: false }}
        collapsed={false}
        theme={theme}
      />

      <Canvas camera={{ fov: 45, position: [3, 2, 6] }}>
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
  )
}

export default App
