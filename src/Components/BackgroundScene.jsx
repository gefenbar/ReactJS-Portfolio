import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const BackgroundScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
            <Canvas style={{ background: 'transparent' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                    <OrbitControls />
                    <Stars />
                    {/* Replace this with your 3D model or scene */}
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshBasicMaterial color="blue" />
                    </mesh>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BackgroundScene;
