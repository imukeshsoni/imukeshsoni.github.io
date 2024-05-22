import React, { useEffect, useRef } from 'react';

import planeScene from '../assets/3d/plane.glb';

import { useAnimations, useGLTF } from '@react-three/drei';
const Plane = (
    props: React.PropsWithChildren<{
        position: any;
        scale: any;
        isRotating: boolean;
        rotation: any;
    }>
) => {
    const { scene, animations } = useGLTF(planeScene);
    const ref = useRef(null);

    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Take 001']!.play();
      
    }, [actions, props.isRotating]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;
