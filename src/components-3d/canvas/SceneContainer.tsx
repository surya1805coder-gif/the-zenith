"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import {
    Environment,
    OrbitControls,
    ContactShadows,
    useGLTF,
    Cylinder,
    Torus
} from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette, SSAO } from "@react-three/postprocessing";
import { useConfigStore } from "@/store/useConfigStore";

function ZenithModel() {
    const { scene } = useGLTF("/zenith_car.glb");
    const paintColor = useConfigStore((state) => state.paintColor);

    useEffect(() => {
        if (!scene) return;

        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Smart Filter for Car Body
                const matName = mesh.material instanceof THREE.Material ? mesh.material.name.toLowerCase() : "";

                // Final Target List: The main body paint
                const targetMaterials = ["material.005", "material.006", "material.007", "material.008", "material.009", "material.010"];

                if (targetMaterials.includes(matName) && mesh.material instanceof THREE.MeshStandardMaterial) {
                    const newMaterial = mesh.material.clone();
                    newMaterial.color = new THREE.Color(paintColor);
                    newMaterial.metalness = 0.9;
                    newMaterial.roughness = 0.05;
                    mesh.material = newMaterial;
                }
            }
        });
    }, [scene, paintColor]);

    return (
        <primitive
            object={scene}
            scale={0.4}
            position={[0, -0.5, 0]}
            onClick={(e: any) => {
                e.stopPropagation();
                alert(`Target Acquired 🎯\n\nMesh Name: ${e.object.name}\nMaterial Name: ${e.object.material.name}`);
            }}
        />
    );
}

function ShowroomPedestal() {
    const paintColor = useConfigStore((state) => state.paintColor);

    return (
        <group>
            {/* The Base */}
            <mesh position={[0, -0.55, 0]} receiveShadow>
                <cylinderGeometry args={[4, 4, 0.1, 64]} />
                <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* The Glowing Ring */}
            <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3.8, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color={paintColor}
                    emissive={paintColor}
                    emissiveIntensity={2.5}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
}

export default function SceneContainer() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
            <Canvas
                shadows
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

                    <ZenithModel />
                    <ShowroomPedestal />

                    <Environment preset="city" />

                    <ContactShadows
                        position={[0, -0.49, 0]}
                        opacity={0.6}
                        scale={10}
                        blur={2}
                        far={1}
                        resolution={256}
                    />

                    <OrbitControls
                        enablePan={false}
                        minDistance={4}
                        maxDistance={20}
                        maxPolarAngle={Math.PI / 2}
                        makeDefault
                    />

                    <EffectComposer enableNormalPass={false}>
                        <SSAO
                            intensity={1.5}
                            radius={0.4}
                            luminanceInfluence={0.5}
                            color={new THREE.Color("black")}
                        />
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

useGLTF.preload("/zenith_car.glb");
