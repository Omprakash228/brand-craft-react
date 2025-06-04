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

export default function Scene() {
    const productStore = useProductStore();
    const envStore = useEnvironmentStore();
    const componentMap: Record<string, JSX.Element> = {
        'Cup': <Cup />,
        'Water bottle': <WaterBottle />,
        'Soda can': <SodaCan />
    }

    const hdrMap: Record<string, string> = {
        'Apartment': 'hdr/lebombo_1k.hdr',
        'City': 'hdr/potsdamer_platz_1k.hdr',
        'Dawn': 'hdr/kiara_1_dawn_1k.hdr',
        'Forest': 'hdr/forest_slope_1k.hdr',
        'Lobby': 'hdr/st_fagans_interior_1k.hdr',
        'Night': 'hdr/dikhololo_night_1k.hdr',
        'Studio': 'hdr/studio_small_03_1k.hdr'
    }

    return (
        <>
            <div id="transparent-bg"></div>
            <Canvas id="scene-canvas" camera={{ fov: 45, position: [3, 2, 6] }}>
                <OrbitControls makeDefault />
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

                {/* <primitive object={model.scene} scale={product.scale} /> */}

                <Suspense>{componentMap[productStore.product]}</Suspense>
            </Canvas>
        </>
    )
}