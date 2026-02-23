"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import {
    Environment,
    OrbitControls,
    ContactShadows,
    RoundedBox
} from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { useConfigStore } from "@/store/useConfigStore";

function LuxuryCar() {
    const meshRef = useRef<THREE.Group>(null);
    const paintColor = useConfigStore((state) => state.paintColor);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle floating animation for futuristic display
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Chassis - Flattened Box */}
            <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[4, 0.4, 1.8]} />
                <meshStandardMaterial
                    color={paintColor}
                    metalness={0.9}
                    roughness={0.05}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* Cabin - Smaller Rounded Box */}
            <RoundedBox
                args={[2, 0.5, 1.4]}
                radius={0.2}
                smoothness={4}
                position={[0, 0.4, 0]}
                castShadow
            >
                <meshStandardMaterial
                    color={paintColor}
                    metalness={0.9}
                    roughness={0.05}
                    envMapIntensity={2}
                />
            </RoundedBox>
        </group>
    );
}

export default function SceneContainer() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
            <Canvas
                camera={{ position: [5, 2, 5], fov: 35 }}
                gl={{
                    antialias: true,
                    toneMapping: THREE.ReinhardToneMapping,
                    outputColorSpace: THREE.SRGBColorSpace
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

                    <LuxuryCar />

                    {/* Showroom Lighting & Environment */}
                    <Environment preset="city" />

                    <ContactShadows
                        position={[0, -0.5, 0]}
                        opacity={0.6}
                        scale={10}
                        blur={2}
                        far={1}
                        resolution={256}
                    />

                    {/* Restricted Camera Controls */}
                    <OrbitControls
                        enablePan={false}
                        minDistance={4}
                        maxDistance={10}
                        maxPolarAngle={Math.PI / 2}
                        makeDefault
                    />

                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={1}
                            mipmapBlur
                            intensity={0.5}
                            radius={0.4}
                        />
                        <Noise opacity={0.02} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}

