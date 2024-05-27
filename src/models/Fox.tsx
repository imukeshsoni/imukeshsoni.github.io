import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
// @ts-ignore
import scene from '../assets/3d/fox.glb';

const Fox = (props: {
    scale?: any;
    position?: any;
    rotation?: any;
    currentAnimation?: string;
}) => {
    const group = useRef(null);
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action?.stop());

        if (props.currentAnimation) {
            actions[props.currentAnimation]?.play();
        }
    }, [actions, props.currentAnimation]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name='Object_8'
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name='Object_9'
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </group>
    );
};

export default Fox;
