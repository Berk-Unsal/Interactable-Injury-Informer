import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './injuryData.json';
import Disclaimer from './Disclaimer';
import './App.css';

// Import our reusable components

import SubMusclePage from './SubMusclePage';
import InjuryPossibilityPage from './InjuryPossibilityPage';
import AnatomyDiagram from './AnatomyDiagram'; 


// Get all our data

const allBodyParts = data.bodyParts;
const shoulderData = allBodyParts.find(part => part.id === 'shoulder');
const trapsData = allBodyParts.find(part => part.id === 'traps');
const rhomboidData = allBodyParts.find(part => part.id === 'rhomboids');
const teresminorData = allBodyParts.find(part => part.id === 'teres-minor');
const chestData = allBodyParts.find(part => part.id === 'chest');
const tricepData = allBodyParts.find(part => part.id === 'tricep');
const bicepData = allBodyParts.find(part => part.id === 'bicep');
const latData = allBodyParts.find(part => part.id === 'lat');
const forearmData = allBodyParts.find(part => part.id === 'forearm');
const lowerbackData = allBodyParts.find(part=> part.id === 'lowerback');
const gluteData = allBodyParts.find(part => part.id === 'glute');
const hamstringData = allBodyParts.find(part => part.id === 'hamstring');
const quadData = allBodyParts.find(part => part.id === 'quad');
const calfData = allBodyParts.find(part => part.id === 'calf');
const anteriorData = allBodyParts.find(part => part.id === 'anterior');
//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Injury Information Finder</h1>
          </Link>
        </header>

        <Disclaimer /> 

        <Routes>
          {/* Route 1: The Home Page (with the diagram) */}
          <Route path="/" element={<HomePage />} />
          
          {/* --- SHOULDER ROUTES --- */}
          {/* This one lists the sub-muscles */}
          <Route 
            path="/shoulder" 
            element={<SubMusclePage subMuscles={shoulderData.subMuscles} backLink="/shoulder" />} 
          />
          {/* This one shows the injury details */}
          <Route 
            path="/shoulder/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/shoulder" />} 
          />

          {/* --- NEW TRAPS ROUTES --- */}
          {/* This one lists the sub-muscles */}
          <Route 
            path="/traps" 
            element={<SubMusclePage subMuscles={trapsData.subMuscles} backLink="/traps" />} 
          />
          {/* This one shows the injury details */}
          <Route 
            path="/traps/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/traps" />} // <-- THE FIX IS HERE
          />
          <Route 
            path="/rhomboids" 
            element={<SubMusclePage subMuscles={rhomboidData.subMuscles} backLink="/rhomboids" />} 
          />
          <Route 
            path="/rhomboids/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/rhomboids" />} 
          />
          <Route 
            path="/teres-minor" 
            element={<SubMusclePage subMuscles={teresminorData.subMuscles} backLink="/teres-minor" />} 
          />
          <Route 
            path="/teres-minor/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/teres-minor" />} 
          />
          <Route 
            path="/chest" 
            element={<SubMusclePage subMuscles={chestData.subMuscles} backLink="/chest" />} 
          />
          <Route 
            path="/chest/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/chest" />} 
          />
          <Route 
            path="/tricep" 
            element={<SubMusclePage subMuscles={tricepData.subMuscles} backLink="/tricep" />} 
          />
          <Route 
            path="/tricep/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/tricep" />} 
          />
          <Route 
            path="/bicep" 
            element={<SubMusclePage subMuscles={bicepData.subMuscles} backLink="/bicep" />} 
          />
          <Route 
            path="/bicep/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/bicep" />} 
          />
          <Route 
            path="/lat" 
            element={<SubMusclePage subMuscles={latData.subMuscles} backLink="/lat" />} 
          />
          <Route 
            path="/lat/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/lat" />} 
          />
          <Route 
            path="/forearm" 
            element={<SubMusclePage subMuscles={forearmData.subMuscles} backLink="/forearm" />} 
          />
          <Route 
            path="/forearm/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/forearm" />} 
          />
          <Route 
            path="/lowerback" 
            element={<SubMusclePage subMuscles={lowerbackData.subMuscles} backLink="/lowerback" />} 
          />
          <Route 
            path="/lowerback/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/lowerback" />} 
          />
          
          <Route 
            path="/glute" 
            element={<SubMusclePage subMuscles={gluteData.subMuscles} backLink="/glute" />} 
          />
          <Route 
            path="/glute/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/glute" />} 
          />
          <Route 
            path="/hamstring" 
            element={<SubMusclePage subMuscles={hamstringData.subMuscles} backLink="/hamstring" />} 
          />
          <Route 
            path="/hamstring/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/hamstring" />} 
          />
          <Route 
            path="/quad" 
            element={<SubMusclePage subMuscles={quadData.subMuscles} backLink="/quad" />} 
          />
          <Route 
            path="/quad/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/quad" />} 
          />
          <Route 
            path="/calf" 
            element={<SubMusclePage subMuscles={calfData.subMuscles} backLink="/calf" />} 
          />
          <Route 
            path="/calf/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/calf" />} 
          />
          <Route 
            path="/anterior" 
            element={<SubMusclePage subMuscles={anteriorData.subMuscles} backLink="/anterior" />} 
          />
          <Route 
            path="/anterior/:id" 
            element={<InjuryPossibilityPage allBodyParts={allBodyParts} backLink="/anterior" />} 
          />

          {/* Add more routes here as you add more body parts */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

// NOTE: If your HomePage is not in its own file, you need this function here
function HomePage() {
  return (
    <div className="Page-content">
      <h2>Analyze an Injury</h2>
      <p>Click on a body part in the diagram below to learn about potential injuries.</p>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <AnatomyDiagram />
      </div>
    </div>
  );
}


export default App;

