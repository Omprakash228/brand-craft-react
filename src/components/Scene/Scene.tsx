import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, type JSX } from "react";
import * as THREE from 'three';
import { Cup } from "../../models/Cup/Cup";
import { WaterBottle } from "../../models/WaterBottle/WaterBottle";
import './Scene.css'
import { SodaCan } from "../../models/SodaCan/SodaCan";
import useProductStore from "../Product/ProductStore";
import useEnvironmentStore from "./SceneStore";
import Loading from "./Loading";
import { hdrMap } from "../../shared/Constants";

export default function Scene() {
    const productStore = useProductStore();
    const envStore = useEnvironmentStore();
    const componentMap: Record<string, JSX.Element> = {
        'Cup': <Cup />,
        'Water bottle': <WaterBottle />,
        'Soda can': <SodaCan />
    }

    return (
        <>
            <Canvas id="scene-canvas" camera={{ fov: 45, position: [3, 2, 6] }} resize={{debounce: 100}} gl={{ preserveDrawingBuffer: true }}>
                <OrbitControls makeDefault enableDamping dampingFactor={0.1}/>
                {
                    envStore.environment !== 'HDRI' &&
                    <>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1.5} />
                        <directionalLight position={[0, -10, 0]} intensity={0.1} />
                        <directionalLight position={[-10, -10, 10]} intensity={0.5} />
                        <directionalLight position={[0, 0, -10]} intensity={0.2} />
                    </>
                }

                <Suspense fallback={<Loading />}>
                    {
                        envStore.environment === 'Solid color' &&
                        <Environment background={!envStore.colorTransparent} near={1} far={1000} resolution={256} environmentIntensity={envStore.colorIntensity}>
                            <mesh scale={100}>
                                <sphereGeometry args={[1, 64, 64]} />
                                <meshBasicMaterial color={envStore.color} side={THREE.BackSide} />
                            </mesh>
                        </Environment>
                    }
                    {
                        envStore.environment === 'HDRI' &&
                            <Environment
                                background={!envStore.hdriTransparent}
                                near={1}
                                far={1000}
                                environmentIntensity={envStore.hdriIntensity}
                                environmentRotation={[0, envStore.hdriRotation, 0]}
                                backgroundIntensity={envStore.hdriIntensity}
                                backgroundBlurriness={envStore.hdriBlurness}
                                backgroundRotation={[0, envStore.hdriRotation, 0]}
                                files={hdrMap[envStore.hdri]}></Environment>
                    }

                    {componentMap[productStore.product]}
                </Suspense>
            </Canvas>
        </>
    )
}