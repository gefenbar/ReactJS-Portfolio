import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const BackgroundScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, top: 0, left: 0, zIndex: 1 }}>
            <Canvas style={{ background: 'transparent' }} >
                <ModelComponent >
                    {/* Environment */}
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} />
                    {/* <Stars /> */}
                </ModelComponent>
                <Suspense fallback={null}>
                    <OrbitControls />

                    {/* Load and render your .gltf model */}

                    {/* Add more interesting elements here as needed */}
                </Suspense>

            </Canvas>

        </div>
    );
};

const ModelComponent = () => {
    const loader = new GLTFLoader();
    const [model, setModel] = React.useState(null);

    React.useEffect(() => {
        // Load your .gltf model
        loader.load('TechBackground.gltf', (gltf) => {
            setModel(gltf.scene);
        });
    }, [loader]);

    return model ? <primitive object={model} /> : null;
};

export default BackgroundScene;
