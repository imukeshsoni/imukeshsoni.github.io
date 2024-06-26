import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import * as THREE from 'three';

// @ts-ignore
import isLandScene from '../assets/3d/island.glb';
import { useFrame, useThree } from '@react-three/fiber';

const Island = (
    props: React.PropsWithChildren<{
        position: any;
        scale: any;
        rotation: any;
        isRotating: boolean;
        setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
        setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
    }>
) => {
    const islandRef = useRef(null);
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(isLandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        props.setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    };

    const handlePointerUp = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        props.setIsRotating(false);
    };

    const handlePointerMove = (e: any) => {
        e.stopPropagation();
        e.preventDefault();

        if (props.isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;

            (islandRef.current!['rotation']['y'] as number) +=
                delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'ArrowLeft') {
            props.setIsRotating(true);
            (islandRef.current!['rotation']['y'] as number) += 0.1 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === 'ArrowRight') {
            props.setIsRotating(true);
            (islandRef.current!['rotation']['y'] as number) -= 0.1 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    };

    const handleKeyUp = (e: any) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            props.setIsRotating(false);
        }
    };

    useFrame(() => {
        if (!props.isRotating) {
            // Apply damping factor
            rotationSpeed.current *= dampingFactor;
      
            // Stop rotation when speed is very small
            if (Math.abs(rotationSpeed.current) < 0.001) {
              rotationSpeed.current = 0;
            }
      
            (islandRef.current!['rotation']['y'] as number) += rotationSpeed.current;
          } else {
            // When rotating, determine the current stage based on island's orientation
            const rotation = (islandRef.current!['rotation']['y'] as number);
      
            /**
             * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
             * The goal is to ensure that the rotation value remains within a specific range to
             * prevent potential issues with very large or negative rotation values.
             *  Here's a step-by-step explanation of what this code does:
             *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
             *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
             *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
             *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
             *     This is done to ensure that the value remains positive and within the range of
             *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
             *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
             *     modulo operation to the value obtained in step 2. This step guarantees that the value
             *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
             *     circle in radians.
             */
            const normalizedRotation =
              ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      
            // Set the current stage based on the island's orientation
            switch (true) {
              case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                props.setCurrentStage(4);
                break;
              case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                props.setCurrentStage(3);
                break;
              case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                props.setCurrentStage(2);
                break;
              case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                props.setCurrentStage(1);
                break;
              default:
                props.setCurrentStage(0);
            }
          }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        canvas.addEventListener('pointerup', handlePointerUp);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            canvas.removeEventListener('pointerup', handlePointerUp);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

    return (
        <a.group ref={islandRef} {...props} dispose={null}>
            <mesh
                geometry={
                    (nodes.polySurface944_tree_body_0 as THREE.Mesh).geometry
                }
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={(nodes.polySurface945_tree1_0 as THREE.Mesh).geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={(nodes.polySurface946_tree2_0 as THREE.Mesh).geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={(nodes.polySurface947_tree1_0 as THREE.Mesh).geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={
                    (nodes.polySurface948_tree_body_0 as THREE.Mesh).geometry
                }
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={
                    (nodes.polySurface949_tree_body_0 as THREE.Mesh).geometry
                }
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={(nodes.pCube11_rocks1_0 as THREE.Mesh).geometry}
                material={materials.PaletteMaterial001}
            />
        </a.group>
    );
};

export default Island;
