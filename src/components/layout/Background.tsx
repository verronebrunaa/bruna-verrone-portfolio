"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeJSBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const sceneRef = useRef<THREE.Scene | undefined>(undefined);
  const cameraRef = useRef<THREE.PerspectiveCamera | undefined>(undefined);
  const rendererRef = useRef<THREE.WebGLRenderer | undefined>(undefined);
  const particlesMeshRef = useRef<THREE.Points | undefined>(undefined);

  const particleCount = 1500;
  const particleSize = 0.02;
  const particleOpacity = 0.8;

  const createParticles = (scene: THREE.Scene) => {
    if (particlesMeshRef.current) {
      scene.remove(particlesMeshRef.current);
      particlesMeshRef.current.geometry.dispose();
      const material = particlesMeshRef.current.material as THREE.PointsMaterial;
      material.dispose();
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
      colorArray[i] = Math.random() * 0.5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: particleOpacity,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "0";
    renderer.domElement.style.pointerEvents = "none";

    container.appendChild(renderer.domElement);

    createParticles(scene);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x += 0.0002;
        particlesMeshRef.current.rotation.y += 0.0003;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      if (
        rendererRef.current &&
        container.contains(rendererRef.current.domElement)
      ) {
        container.removeChild(rendererRef.current.domElement);
      }

      if (particlesMeshRef.current) {
        scene.remove(particlesMeshRef.current);
        particlesMeshRef.current.geometry.dispose();
        const material = particlesMeshRef.current.material as THREE.PointsMaterial;
        material.dispose();
      }

      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

    return (
      <div className="relative w-full h-full">
        <div
          ref={mountRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: -20 }}
        />
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {children}
        </div>
      </div>    
  );
}
