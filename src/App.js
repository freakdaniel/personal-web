import React, {useState} from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


function App() {
  
  return (
    <div className="App">
      
   <Header/>
   <About/>  
   <Skills/>
    
  


    
    </div>
    
  );
}

export default App;
