import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

export default function TechyScene() {
    return (
        <Canvas
            camera={{
                fov: 75,
                position: [0, 0, 5],
            }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 2, 2]} />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls />
            <Stars />

            <TechyObject />
        </Canvas>
    );
}

function TechyObject() {
    // Create a ref to control the rotation of the object
    const techyObjectRef = React.useRef();

    // Add animation to the object
    useFrame(() => {
        if (techyObjectRef.current) {
            techyObjectRef.current.rotation.x += 0.005;
            techyObjectRef.current.rotation.y += 0.005;
        }
    });

    return (
        <mesh ref={techyObjectRef} scale={1.5}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#2196F3" emissive="#FFD700" metalness={1} roughness={0.5} />
        </mesh>
    );
}
