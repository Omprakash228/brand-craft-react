import { Center, Text3D } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const material = new THREE.MeshMatcapMaterial({ color: '#7d7f84' })

export default function Loading() {
    const textRef = useRef<THREE.Group>(null)
    const { camera } = useThree()

    useFrame(() => {
        if (textRef.current) {
            textRef.current.lookAt(camera.position)
        }
    })

    return <>
        <Center ref={textRef}>
            <Text3D material={material} font="/fonts/Roboto_Regular.json" scale={0.3}>
                Loading Scene...
            </Text3D>
        </Center>
    </>
}