import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './ThreeScene.css'

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
      let scene, camera, renderer, sphere, controls;
  
      // Set up scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // Set up renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.2);
      mountRef.current.appendChild(renderer.domElement);
  
      // Set up sphere
      const geometry = new THREE.SphereGeometry(5, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
  
      // Set up controls
      controls = new OrbitControls(camera, renderer.domElement);
  
      // Handle window resize
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight * 0.2;
  
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
  
        renderer.setSize(newWidth, newHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Animation loop
      sphere.rotation.z = 10;
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate sphere
        //sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.001;
  
        controls.update();
  
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
        mountRef.current.removeChild(renderer.domElement);
  
        // Dispose resources
        geometry.dispose();
        material.dispose();
        controls.dispose();
      };
    }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
