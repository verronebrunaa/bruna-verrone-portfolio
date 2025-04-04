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
  const mouseParticlesRef = useRef<THREE.Points[]>([]);

  const particleCount = 1500;
  const particleSize = 0.02;
  const particleOpacity = 0.8;

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

    const createParticles = (darkMode: boolean) => {
      if (particlesMeshRef.current) {
        scene.remove(particlesMeshRef.current);
        particlesMeshRef.current.geometry.dispose();
        const material = particlesMeshRef.current
          .material as THREE.PointsMaterial;
        material.dispose();
      }

      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      const colorArray = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;

        // Generate vibrant colors that work in both themes
        if (darkMode) {
          // Light colors for dark theme
          colorArray[i] = Math.random() * 0.5 + 0.5; // Bright colors (0.5-1.0)
        } else {
          // Darker colors for light theme
          colorArray[i] = Math.random() * 0.5; // Dark colors (0.0-0.5)
        }
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

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particlesMesh);
      particlesMeshRef.current = particlesMesh;
    };

    // Initial particles setup - detect dark mode
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    createParticles(isDarkMode);

    // Mouse interaction with theme-appropriate colors
    const handleMouseMove = (event: MouseEvent) => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const tempParticleGeometry = new THREE.BufferGeometry();
      const tempPosArray = new Float32Array([mouse.x * 5, mouse.y * 3, 0]);
      tempParticleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(tempPosArray, 3)
      );

      // Generate appropriate color based on theme
      const hue = Math.random();
      const saturation = 0.7;
      const lightness = isDark ? 0.7 : 0.3; // Brighter for dark theme, darker for light

      const tempParticleMaterial = new THREE.PointsMaterial({
        size: particleSize * 3,
        color: new THREE.Color().setHSL(hue, saturation, lightness),
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      const tempParticle = new THREE.Points(
        tempParticleGeometry,
        tempParticleMaterial
      );
      scene.add(tempParticle);
      mouseParticlesRef.current.push(tempParticle);

      // Limit mouse particles
      if (mouseParticlesRef.current.length > 10) {
        const oldParticle = mouseParticlesRef.current.shift();
        if (oldParticle) {
          scene.remove(oldParticle);
          oldParticle.geometry.dispose();
          (oldParticle.material as THREE.PointsMaterial).dispose();
        }
      }
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x += 0.0002;
        particlesMeshRef.current.rotation.y += 0.0003;
      }

      // Update mouse particles
      mouseParticlesRef.current.forEach((particle, index) => {
        const material = particle.material as THREE.PointsMaterial;
        material.opacity -= 0.01;
        if (material.opacity <= 0) {
          scene.remove(particle);
          mouseParticlesRef.current.splice(index, 1);
          particle.geometry.dispose();
          material.dispose();
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Theme change detection
    const handleThemeChange = (e: MediaQueryListEvent) => {
      createParticles(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Clean up Three.js resources
      if (
        rendererRef.current &&
        container.contains(rendererRef.current.domElement)
      ) {
        container.removeChild(rendererRef.current.domElement);
      }

      if (particlesMeshRef.current) {
        scene.remove(particlesMeshRef.current);
        particlesMeshRef.current.geometry.dispose();
        const material = particlesMeshRef.current
          .material as THREE.PointsMaterial;
        material.dispose();
      }

      // Clean up mouse particles
      mouseParticlesRef.current.forEach((particle) => {
        scene.remove(particle);
        particle.geometry.dispose();
        (particle.material as THREE.PointsMaterial).dispose();
      });
      mouseParticlesRef.current = [];

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative w-full h-full" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
