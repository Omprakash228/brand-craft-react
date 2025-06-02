import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useMemo, type JSX } from "react";
import * as THREE from 'three';
import { Cup } from "../../models/Cup";
import { WaterBottle } from "../../models/Water_bottle";
import './Scene.css'
import { SodaCan } from "../../models/Soda_can";

export default function Scene() {
    const componentMap: Record<string, JSX.Element> = {
        'Cup': <Cup />,
        'Water bottle': <WaterBottle />,
        'Soda can': <SodaCan/>
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

    const envOptions = useMemo(() => {
        return {
            Background: { options: ['Solid color', 'HDRI'], value: 'Solid color' },
        }
    }, [])

    const colorOptions = useMemo(() => {
        return {
            Color: { value: '#2d2f34', render: (get: (arg0: string) => any) => get("Environment.Background") === 'Solid color' },
            Transparent: { value: false, render: (get: (arg0: string) => any) => get("Environment.Background") === 'Solid color' },
            Intensity: { value: 1, min: 0, max: 1, step: 0.05, render: (get: (arg0: string) => any) => get("Environment.Background") === 'Solid color' },
        }
    }, [])

    const hdrOptions = useMemo(() => {
        return {
            HDR: {
                options: Object.keys(hdrMap),
                value: 'Apartment',
                render: (get: (arg0: string) => any) => get("Environment.Background") === 'HDRI'
            },
            Transparent: { value: false, render: (get: (arg0: string) => any) => get("Environment.Background") === 'HDRI' },
            Blur: { value: 0, min: 0, max: 1, step: 0.1, render: (get: (arg0: string) => any) => get("Environment.Background") === 'HDRI' },
            Intensity: { value: 1, min: 0, max: 1, step: 0.05, render: (get: (arg0: string) => any) => get("Environment.Background") === 'HDRI' },
            Rotation: { value: 0, min: 0, max: Math.PI * 2, step: 0.1, render: (get: (arg0: string) => any) => get("Environment.Background") === 'HDRI' }
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
    const color = useControls('Background Color', colorOptions)
    const hdr = useControls('HDRI', hdrOptions)
    const product = useControls('Product', productOptions)
    
    return (
        <>
            <div id="transparent-bg"></div>
            <Canvas id="scene-canvas" camera={{ fov: 45, position: [3, 2, 6] }}>
                <OrbitControls makeDefault />
                {
                    environment.Background !== 'HDRI' &&
                    <>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1.5} />
                        <directionalLight position={[0, -10, 0]} intensity={0.1} />
                        <directionalLight position={[-10, -10, 10]} intensity={0.5} />
                        <directionalLight position={[0, 0, -10]} intensity={0.2} />
                    </>
                }

                {
                    environment.Background === 'Solid color' &&
                    <Environment background={!color.Transparent} near={1} far={1000} resolution={256} environmentIntensity={color.Intensity}>
                        <mesh scale={100}>
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshBasicMaterial color={color.Color} side={THREE.BackSide} />
                        </mesh>
                    </Environment>
                }
                {
                    environment.Background === 'HDRI' &&
                    <Environment
                        background={!hdr.Transparent}
                        near={1}
                        far={1000}
                        environmentIntensity={hdr.Intensity}
                        environmentRotation={[0, hdr.Rotation, 0]}
                        backgroundIntensity={hdr.Intensity}
                        backgroundBlurriness={hdr.Blur}
                        backgroundRotation={[0, hdr.Rotation, 0]}
                        files={hdrMap[hdr.HDR]}></Environment>
                }

                {/* <primitive object={model.scene} scale={product.scale} /> */}

                <Suspense>{componentMap[product.Product]}</Suspense>
            </Canvas>
        </>
    )
}