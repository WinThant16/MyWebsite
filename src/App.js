import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Space3d from './components/Space3d';
import { NavBar } from './components/NavigationBar';
import { Banner } from './components/Banner';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Extracurriculars } from './components/Extracurriculars';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Space3d />
        </Suspense>
      </Canvas>
      <Skills />
      <Projects />
      <Extracurriculars />
      <Footer />
    </div>
  );
}

export default App;
