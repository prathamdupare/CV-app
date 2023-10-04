import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import PictureUpload from './components/profile';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <h1 className="heading">CV Application</h1>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="right-panel">
          <PictureUpload />
          <GeneralInfo />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
