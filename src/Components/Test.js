import React, { useRef, useEffect } from "react";
import * as THREE from "three";



const Test = () => {
const canvasRef = useRef(null);

useEffect(() => {
// Créer une scène
const scene = new THREE.Scene();

// Créer une caméra
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.01,
  100
);
camera.position.z = 10;

// Créer un moteur de rendu
const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setClearColor(0xffffff); // Définir la couleur de fond du rendu

// Créer une pyramide
const radius = 4;
const height = 5;
const geometry = new THREE.CylinderGeometry(0, radius, height, 4, 1, true);
const material = new THREE.MeshBasicMaterial({
  color: 0x4c69aa, // Couleur aretes
  wireframe: true, // Afficher les arêtes en fil de fer
});

const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

 // créer cercles
 const circles = [];
 for (let i = 0; i < 3; i++) {
   const geometry = new THREE.CircleGeometry(0.6, 32);
   const material = new THREE.MeshBasicMaterial({
     color: i === 0 ? 0xffeb7d : 0xd7a1ca, // couleur différente pour chaque cercle
   });
   const circle = new THREE.Mesh(geometry, material);
   // Positionner les cercles différemment
  if (i === 0) {
    circle.position.x = 0;
    circle.position.y = 3.7;
  } else if (i === 1) {
    circle.position.x = 5.5;
    circle.position.y = -3;
  } else if (i === 2) {
    circle.position.x = -5.5;
    circle.position.y = -3;
  }
   scene.add(circle);
   circles.push(circle);
 }
 
// Animer la pyramide
const animate = () => {
  requestAnimationFrame(animate);

  // Faire tourner la pyramide sur elle-même
 
  pyramid.rotation.y += 0.01;
 
  // Faire tourner les cercles autour de la pyramide dans le sens horaire
  const circleRadius = 6; // Rayon du cercle de rotation
  const circleSpeed = -0.0007; // Vitesse de rotation des cercles
  const circleAngle = circleSpeed * Date.now(); // Angle actuel de rotation des cercles

  circles.forEach((circle, index) => {
    const angle = (2 * Math.PI / 3) * index + circleAngle; // Angle de chaque cercle sur le cercle de rotation
    const x = circleRadius * Math.cos(angle); // Coordonnée X de chaque cercle
    const y = circleRadius * Math.sin(angle); // Coordonnée Y de chaque cercle

    circle.position.x = x;
    circle.position.y = y;
  });
  

  

  // Rendre la scène
  renderer.render(scene, camera);
};

animate();

 // Nettoyer la scène et les écouteurs d'événement à la fin de l'utilisation
 return () => {
  scene.remove(pyramid);
  renderer.dispose();
};

}, []);

return <canvas ref={canvasRef} />;
};

export default Test;
