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
    scene.background = new THREE.Color('#0d1b3e'); // Match the section background
    scene.fog = new THREE.Fog('#0d1b3e', 5, 15);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // Warm light mimicking the mirror glow
    const mirrorLight = new THREE.PointLight(0xffddaa, 1.5, 10);
    mirrorLight.position.set(0, 1.5, 0.2);
    scene.add(mirrorLight);

    // --- MATERIALS ---
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x1f212a, roughness: 0.8 }); // Dark navy/grey cabinet
    const topMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.1, metalness: 0.1 }); // Glossy white counter
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xc9a45c, metalness: 0.8, roughness: 0.2 }); // Gold accents
    const mirrorGlassMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 1, roughness: 0 }); // Mirror surface
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x11172b, roughness: 0.9 }); // Dark wall

    const group = new THREE.Group();

    // 1. Wall behind vanity
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), wallMat);
    wall.position.z = -0.5;
    wall.receiveShadow = true;
    group.add(wall);

    // 2. Main Cabinet Body
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.2), woodMat);
    cabinet.position.y = -0.6;
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    group.add(cabinet);

    // 3. Countertop
    const counter = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.08, 1.25), topMat);
    counter.position.y = 0.04;
    counter.castShadow = true;
    counter.receiveShadow = true;
    group.add(counter);

    // 4. Wash Basin (Sleek Vessel Sink)
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 0.3, 32), topMat);
    basin.position.y = 0.23;
    basin.castShadow = true;
    group.add(basin);

    // 5. Faucet
    const faucetBody = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16), goldMat);
    faucetBody.position.set(0, 0.28, -0.3);
    faucetBody.castShadow = true;
    group.add(faucetBody);
    
    const faucetSpout = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.25, 16), goldMat);
    faucetSpout.rotation.x = Math.PI / 2;
    faucetSpout.position.set(0, 0.45, -0.18);
    faucetSpout.castShadow = true;
    group.add(faucetSpout);

    // 6. Drawers & Handles
    // Left drawer
    const drawer1 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 0.05), woodMat);
    drawer1.position.set(-0.58, -0.3, 0.61);
    group.add(drawer1);

    const handle1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.04), goldMat);
    handle1.position.set(-0.58, -0.3, 0.64);
    group.add(handle1);

    // Right drawer
    const drawer2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 0.05), woodMat);
    drawer2.position.set(0.58, -0.3, 0.61);
    group.add(drawer2);

    const handle2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.04), goldMat);
    handle2.position.set(0.58, -0.3, 0.64);
    group.add(handle2);
    
    // Bottom drawer (full width)
    const drawer3 = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.5, 0.05), woodMat);
    drawer3.position.set(0, -0.85, 0.61);
    group.add(drawer3);
    
    const handle3 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.02, 0.04), goldMat);
    handle3.position.set(0, -0.85, 0.64);
    group.add(handle3);

    // 7. LED Smart Mirror (Round)
    const mirrorGroup = new THREE.Group();
    mirrorGroup.position.set(0, 1.6, -0.4);
    
    const mirrorGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.05, 64), mirrorGlassMat);
    mirrorGlass.rotation.x = Math.PI / 2;
    mirrorGroup.add(mirrorGlass);

    // Glowing LED Ring behind mirror
    const glowRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.78, 0.04, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0xffddaa })
    );
    glowRing.position.z = -0.03;
    mirrorGroup.add(glowRing);

    group.add(mirrorGroup);

    // Add everything to scene
    scene.add(group);

    // Move group down a bit
    group.position.y = -0.6;

    // --- INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
        // Normalize mouse coordinates (-1 to +1)
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- ANIMATION ---
    let animationFrameId;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        // Smooth rotation easing
        targetX = mouseX * 0.25;
        targetY = mouseY * 0.1;
        
        group.rotation.y += (targetX - group.rotation.y) * 0.05;
        group.rotation.x += (targetY - group.rotation.x) * 0.05;
        
        renderer.render(scene, camera);
    }
    animate();

    // --- RESIZE ---
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

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
