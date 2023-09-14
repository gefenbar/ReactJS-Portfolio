import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import '../styles/SocialBalls.css'

const SocialBall = ({ position, logo }) => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const texture = useTexture('/texture.jpg');
    const texture2 = useTexture('/moon.jpg');

    const logoTexture = useTexture(logo); // Load the logo texture

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // mesh.current.position.x = position[0] + Math.sin(time) * 0.1;
        mesh.current.rotation.x = mesh.current.rotation.y = 0;
        mesh.current.position.y = position[1] + Math.sin(time) * 0.1;
        // mesh.current.rotation.y = mesh.current.rotation.x = 1;
    });

    return (
        <mesh
            position={position}
            ref={mesh}
            scale={hovered ? [1.3, 1.3, 0.2] : [1.3, 1.3, 0.2]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial map={hovered ? texture2 : texture} emissive={hovered ? '#777' : '#000'} />
            <mesh position={[0, 0, 1]}>
                <planeGeometry args={[0.7, .7]} />
                <meshBasicMaterial map={logoTexture} transparent={true} color={hovered ? 'black' : 'white'} />
            </mesh>
        </mesh>
    );
};

export default function SocialBalls() {
    return (
        <div className="social-balls-container">
            <Canvas className='social_balls'>
                <ambientLight />
                <pointLight position={[12, 12, 12]} />
                <SocialBall position={[0, 2.1, 0.5]} logo="linkedin.png" className="logos" />
                <SocialBall position={[0, 0, 0.5]} logo="gmail.png" className="logos" />
                <SocialBall position={[0, -2.1, 0.5]} logo="github.png" className="logos" />
            </Canvas>
        </div>
    );
};
