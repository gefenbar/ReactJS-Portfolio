import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'; // Import Three.js

const SocialBall = ({ position, logo }) => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const texture = useTexture('texture.jpg');
    const logoTexture = useTexture(logo); // Load the logo texture

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = position[1] + Math.sin(time) * 0.23;
        mesh.current.rotation.x = mesh.current.rotation.y = 0.00;
    });

    return (
        <mesh
            position={position}
            ref={mesh}
            scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={texture} />
            <mesh position={[0, 0, 1]}>
                <planeGeometry args={[0.6, 0.6]} />
                <meshBasicMaterial map={logoTexture} /> {/* Apply the logo texture */}
            </mesh>
        </mesh>
    );
};

export default function SocialBalls() {
    return (
        <div className="social-balls-container"> {/* Wrap the Canvas in a div with a CSS class */}
            <Canvas className='social_balls'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SocialBall position={[-3, 0, 0]} logo="linkedin.png" />
                <SocialBall position={[0, 0, 0]} logo="github.png" />
                <SocialBall position={[3, 0, 0]} logo="gmail.png" />
            </Canvas>
        </div>
    );
};
