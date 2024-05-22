import { useRef } from 'react';

import skyScene from '../assets/3d/sky.glb';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const sky = () => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef(null);

    useFrame((_, delta: number) => {
        if (skyRef.current) {
            (skyRef.current['rotation']['y'] as number) += 0.15 * delta;
        }
    });
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );
};

export default sky;
