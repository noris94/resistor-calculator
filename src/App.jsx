import { useState } from 'react';
import ResistorCalculator from './components/ResistorCalculator';
import './App.css'

function App() {

  return (
    <>
      <div style={{height:'1000px'}} className="bg-sky-600 font-mono">
          <ResistorCalculator/>
      </div>
    </>
  )
}

export default App
