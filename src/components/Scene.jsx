import React, { useEffect, useRef, useState } from "react";
import "aframe";
import "mind-ar/dist/mindar-face-aframe.prod.js";
import chinTapak from '../assets/chin-tapak.mp3';
import chinImage from '../assets/chin-image.png';
import { NavLink } from "react-router-dom";
import './scene.css'

const Scene = () => {
  const sceneRef = useRef(null);
  const [isFaceDetected, setIsFaceDetected] = useState(false);

  useEffect(() => {
    const sceneEl = sceneRef.current;

    if (!sceneEl) return;

    // const arSystem = sceneEl.systems["mindar-face-system"];

    const handleARReady = () => {
      console.log("AR is ready");
      // arSystem.start(); // Start AR once the scene is loaded
    };

    const handleTargetFound = () => {
      console.log("Face detected");
      const audio = document.querySelector('#chinTapak');
      audio.play();
      setIsFaceDetected(true);
    };

    const handleTargetLost = () => {
      console.log("Face lost");
      setIsFaceDetected(false);
    };

    // Event listeners
    sceneEl.addEventListener("arReady", handleARReady);
    sceneEl.addEventListener("targetFound", handleTargetFound);
    sceneEl.addEventListener("targetLost", handleTargetLost);

    return () => {
      sceneEl.removeEventListener("arReady", handleARReady);
      sceneEl.removeEventListener("targetFound", handleTargetFound);
      sceneEl.removeEventListener("targetLost", handleTargetLost);
    };
  }, []);

  return (
    <div className="scene_container ">
      <NavLink
        to='/'
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-white rounded-lg shadow-md"
      >
        Home
      </NavLink>
      <a-scene
        ref={sceneRef}
        mindar-face
        embedded
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        // className="w-full h-full" // Ensure the scene takes full space
      >
        <a-assets>
          <img id="test" src={chinImage} />
          <audio id="chinTapak" src={chinTapak} />
        </a-assets>
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-face-target="anchorIndex: 1">
          <a-image
            src="#test"
            position="0 0 0.2"
            scale="3 2.4 1"
            // look-at="[camera]"
            // className={isFaceDetected ? "visible" : "invisible"} // Manage visibility
          />
        </a-entity>
      </a-scene>
    </div>
  );
};

export default Scene;
