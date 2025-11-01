import { Canvas } from "@react-three/fiber";
import { Bvh, ContactShadows, Environment, Float } from "@react-three/drei";
import "./Home.css";
import { Suspense } from "react";
import { SodaCanLandingPage } from "../../../models/Soda_can_landing_page";
import * as THREE from "three";
import { MdArrowForward } from "react-icons/md";

export default function Home() {
  return (
    <div id="home">
      <div id="home-contents">
        <div id="home-left">
          <div className="bold-text">MOCKUP TOOL FOR DESIGNERS</div>
          <div className="main-text">
            Are you a designer who spends hours creating{" "}
            <span className="main-text-highlight">mockups?</span>
          </div>
          <div className="description">
            Create professional mockups in minutes. Upload your designs, adjust
            the model, customize the environment, and export high-quality
            visuals for clients and social media.
          </div>

          <a href="/editor">
            <div className="action-btn">
              Start creating
              <MdArrowForward />
            </div>
          </a>
        </div>
        <div id="home-right">
          <Canvas
            id="home-canvas"
            camera={{ fov: 35, position: [3, 2, 6] }}
            resize={{ debounce: 100 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Bvh>
              <ambientLight intensity={0.2} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={7}
                color={"#bbb"}
              />
              <directionalLight position={[0, -10, 0]} intensity={0.1} />
              <directionalLight
                position={[-10, -10, 10]}
                intensity={0.1}
                color={"#333"}
              />
              <Environment
                background={false}
                near={1}
                far={1000}
                resolution={256}
                environmentIntensity={1}
              >
                <mesh scale={100}>
                  <sphereGeometry args={[1, 64, 64]} />
                  <meshBasicMaterial color={"#f4eeeb"} side={THREE.BackSide} />
                </mesh>
              </Environment>
              <Suspense>
                <Float
                  speed={1} // Animation speed, defaults to 1
                  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                  floatingRange={[0.1, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                  <SodaCanLandingPage />
                </Float>
                <ContactShadows
                  position={[0, -1.3, -0.05]}
                  opacity={0.15}
                  scale={7}
                  blur={2}
                  far={5}
                />
              </Suspense>
            </Bvh>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
