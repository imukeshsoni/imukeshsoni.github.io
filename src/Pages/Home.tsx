import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Loader from '../components/Loader';
import { Bird, Sky, Plane, Island } from '../models/index';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 1];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] =
        adjustIslandForScreenSize();

    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section
            className={`w-full h-screen relative' ${
                isRotating ? 'cursor-grabbing' : 'cursor-grab'
            }`}
        >
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage ? <HomeInfo currentStage={currentStage} /> : ''}
            </div>

            <Canvas className='w-full h-full' camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight
                        color='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />
                    <Sky />
                    <Bird />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20.1, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
