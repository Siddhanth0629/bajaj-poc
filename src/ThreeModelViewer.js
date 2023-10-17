import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const ThreeModelViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.5,
      100
    );
    camera.position.set(0, 0.1, 1);

    // Create a WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;

    // Add lighting to the scene (you can customize this)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.intensity = 2;
    light.position.set(2, 2, 5);
    scene.add(light);

    scene.background = new THREE.Color(0x464646);

    // Create a DRACOLoader instance and configure it
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      "/bajaj.glb",
      function (glb) {
        const root = glb.scene;
        root.scale.set(0.5, 0.5, 0.5);

        // Apply a rotation to make the model face left
        const initialRotation = Math.PI / 2; // 90 degrees in radians
        root.rotation.set(0, initialRotation, 0);

        // Set the rotation origin (center of the model)
        const box = new THREE.Box3().setFromObject(root);
        const center = new THREE.Vector3();
        box.getCenter(center);
        root.position.sub(center);

        // Add the model to the scene
        scene.add(root);
        // Rotation variables
        let isDragging = false;
        let previousMouseX = 0;

        // Mouse down event handler
        canvas.addEventListener("mousedown", (event) => {
          isDragging = true;
          previousMouseX = event.clientX;
        });

        // Mouse move event handler
        canvas.addEventListener("mousemove", (event) => {
          if (isDragging) {
            const deltaX = event.clientX - previousMouseX;
            const rotationSpeed = 0.01; // Adjust the rotation speed as needed
            root.rotation.y += deltaX * rotationSpeed;
            previousMouseX = event.clientX;
          }
        });

        // Define a variable to keep track of the rotation angle
        // let rotationAngle = 0;

        // Inside your animate function
        function animate() {
          // Update the rotation angle to achieve a continuous rotation
          //   rotationAngle += 0.01; // Adjust the rotation speed as needed
          //   root.rotation.y = rotationAngle;

          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }

        // Call the animate function to start the animation loop
        animate();
        // Mouse up event handler
        canvas.addEventListener("mouseup", () => {
          isDragging = false;
        });
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error occurred while loading the model", error);
      }
    );
  }, []);

  return <canvas ref={canvasRef} className="webgl" />;
};

export default ThreeModelViewer;
