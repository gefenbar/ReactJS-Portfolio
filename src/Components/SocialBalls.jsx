import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const SocialBall = ({ position, logo }) => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const texture = useTexture('texture.jpg');
    const logoTexture = useTexture(logo); // Load the logo texture

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = position[1] + Math.sin(time) * 0.4;
        mesh.current.rotation.x = mesh.current.rotation.y = 0.00;
    });

    return (
        <mesh
            position={position}
            ref={mesh}
            scale={hovered ? [2, 2, 0.1] : [1.8, 1.8, .5]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[1, 64, 6]} />
            <meshStandardMaterial map={texture} />
            <mesh position={[0, 0, 1]}>
                <planeGeometry args={[0.75, .75]} />
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
                <SocialBall position={[-5, 0, 0]} logo="linkedin.png" className="logos" />
                <SocialBall position={[0, 0, 0]} logo="images/SVG/github.svg" />
                <SocialBall position={[5, 0, 0]} logo="gmail.png" />
            </Canvas>
        </div>
    );
};
