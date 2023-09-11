import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const GalaxyBackground = () => {
    const galaxyRef = useRef();

    // Create a group for the galaxy elements
    const galaxy = new THREE.Group();

    // Create stars
    const starsCount = 5000;
    const stars = new Array(starsCount).fill().map(() => {
        const star = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 32, 32),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
        star.position.set(x, y, z);
        galaxy.add(star);
        return star;
    });

    // Create the galaxy background
    useFrame(() => {
        galaxyRef.current.rotation.x += 0.0001;
        galaxyRef.current.rotation.y += 0.0001;
    });

    return (
        <group ref={galaxyRef} position={[0, 0, 0]}>
            {stars}
        </group>
    );
};

export default GalaxyBackground;
