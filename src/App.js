import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./style.css";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect } from "react";
import Header from "./Header";
import { ScrollTrigger } from "gsap/all";
import ThreeModelViewer from "./ThreeModelViewer";
gsap.registerPlugin(ScrollTrigger);

function Model(props) {
  const { scene } = useGLTF("/bajaj.glb");
  return <primitive object={scene} {...props} />;
}

function App() {
  useEffect(() => {
    gsap.from(
      ".bike--container .image--container,  .bike-main-container .gallery",
      {
        opacity: -1,
        scale: 0,
        duration: 2,
        scrollTrigger: {
          trigger:
            ".bike--container .image--container, .bike-main-container .gallery",
          scrub: true,
        },
      }
    );
    ScrollTrigger.batch(
      ".bike-main-container .bike--container .image--container,.bike-main-container .gallery",
      {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            stagger: 0.5,
            scale: 1,
            duration: 1,
            markers: true,
          });
        },
        scrub: true,
        start: "top 80%",
        end: "bottom 20%",
      }
    );
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div style={{overflow:"hidden"}}>
        <ThreeModelViewer />
        <div className="bike-main-container">
          <div className="gallery">
            <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Gallery</h1>
          </div>
          <div className="bike--container">
            <div className="image--container">
              <img src="bikeJPG.jpg" width={400} />
              <table>
                <tbody className="table--body">
                  <tr>
                    <td className="td">Format</td>
                    <td className="colon">:</td>
                    <td className="data">JPG</td>
                  </tr>
                  <tr>
                    <td className="td">Size</td>
                    <td className="colon">:</td>
                    <td className="data">637 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="image--container">
              <img src="bikePNG.png" width={400} />
              <table>
                <tbody className="table--body">
                  <tr>
                    <td className="td">Format</td>
                    <td className="colon">:</td>
                    <td className="data">PNG</td>
                  </tr>
                  <tr>
                    <td className="td">Size</td>
                    <td className="colon">:</td>
                    <td className="data">2287 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="image--container">
              <img src="bikeWEBP.webp" width={400} />
              <table>
                <tbody className="table--body">
                  <tr>
                    <td className="td">Format</td>
                    <td className="colon">:</td>
                    <td className="data">WEBP</td>
                  </tr>
                  <tr>
                    <td className="td">Size</td>
                    <td className="colon">:</td>
                    <td className="data">1060 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// import React, { useRef,useState} from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// var scene;
// var mainScene;
// function Model(props) {
//   scene = useGLTF("/backWheel.glb");
//   mainScene =  scene.scene;
//   console.log(scene.scene);
//   return <primitive object={scene} {...props} />;
// }

// // function animate(){
// //   requestAnimationFrame(animate)
// //   // mainScene.rotation.z += -0.01
// // }
// // animate()

// function AnimatedModel() {
//   const bikeRef = useRef();
//   const [moving, setMoving] = useState(true);

//   // useFrame(({ clock }) => {
//   //   // Update the bike's position in the animation loop
//   //   if (bikeRef.current) {
//   //     const speed = 0.5; // Adjust the speed as needed
//   //     bikeRef.current.position.z = Math.sin(speed * clock.elapsedTime) * 2; // Example animation path
//   //     // bikeRef.current.position.x = Math.sin(speed * clock.elapsedTime) * 4; // Example animation path
//   //   }
//   // });

//   // useFrame(({ clock }) => {
//   //   if (bikeRef.current && moving) {
//   //     const speed = 0.3; // Adjust the speed as needed
//   //     bikeRef.current.position.z = Math.sin(speed * clock.elapsedTime) * 2; // Example animation path

//   //     // Stop the animation when the bike reaches its destination
//   //     if (bikeRef.current.position.z >= 2) {
//   //       setMoving(false);
//   //     }
//   //   }
//   // });

//   const initialPosition = [-2, 0, 0]; // Change these values
//   return (
//     <group ref={bikeRef} position={initialPosition}>
//       <Model/>
//     </group>
//   );
// }

// function App() {
//   return (
//     <>
//         <Canvas
//           dpr={[0,1]}
//           shadows
//           camera={{ position: [-2, 0, 0],fov: 45 }}
//           style={{ position: "absolute" }}
//         >
//           <color attach="background" args={["#101010"]} />
//           <PresentationControls
//             speed={1}
//             global
//             zoom={0.2}
//             polar={[-0.1, Math.PI / 4]}
//           >
//             <Stage environment={"sunset"} intensity={3}>
//               <AnimatedModel />
//             </Stage>
//           </PresentationControls>
//         </Canvas>
//     </>
//   );
// }

// export default App;
