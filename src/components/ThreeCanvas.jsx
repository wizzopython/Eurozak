import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc9a45c, 2); // Signature Gold
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Abstract Luxury Objects (Vanity/Mirror Silhouette)
    const group = new THREE.Group();

    const mirrorGeom = new THREE.CircleGeometry(2, 64);
    const mirrorMat = new THREE.MeshPhongMaterial({ 
        color: 0x374e98, 
        shininess: 100, 
        transparent: true, 
        opacity: 0.1 
    });
    const mirror = new THREE.Mesh(mirrorGeom, mirrorMat);
    group.add(mirror);

    const ringGeom = new THREE.TorusGeometry(2, 0.02, 16, 100);
    const ringMat = new THREE.MeshPhongMaterial({ color: 0xc9a45c });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    group.add(ring);

    const basinGeom = new THREE.BoxGeometry(3, 0.5, 2);
    const basinMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const basin = new THREE.Mesh(basinGeom, basinMat);
    basin.position.y = -1.5;
    group.add(basin);

    scene.add(group);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        group.rotation.y += (mouseX * 0.1 - group.rotation.y) * 0.05;
        group.rotation.x += (mouseY * 0.1 - group.rotation.x) * 0.05;
        
        renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
