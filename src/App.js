
import React from "react"
import './App.scss';
import './scss/custom.scss'
import Signin from './pages/signIn'

import BasicModal from "./components/Modal";


function App() {
  return (
  
    <>
      {/* <Signin></Signin> */}
   
      <div className="App">
      <header className="App-header">
      
        <h1>Colors According the customize theme</h1>

        <BasicModal></BasicModal>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p className='text-info'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

{/* input component */}
     
      </header>

      {/* < HomePageLayout /> */}

    </div >
    </>
  );
}

export default App;
