import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { SocialIcon } from 'react-social-icons';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export default function App() {
  return (
    <>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 50, 0]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 1.9}
        />
      </Canvas>
      <img className="logo" src="/gdsc.png" alt="Logo" />
      <div className="icon-box">
        <SocialIcon
          className="social"
          url="https://sites.google.com/vt.edu/dscvt"
          target="_blank"
        />
        <SocialIcon
          className="social"
          url="https://discord.gg/VgxWt3ZQva"
          target="_blank"
        />
        <SocialIcon
          className="social"
          url="https://www.linkedin.com/company/gdsc-vt/"
          target="_blank"
        />
      </div>
    </>
  );
}
