
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Scene from './components/Scene';
import "aframe";
import "mind-ar/dist/mindar-face-aframe.prod.js";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scene" element={<Scene />} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </BrowserRouter>
   <Analytics />
    </>
   
  );
}

//test commit

export default App;
