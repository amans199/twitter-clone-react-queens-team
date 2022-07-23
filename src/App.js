
import React from "react"
import './App.scss';
import './scss/custom.scss'
import Signin from './pages/signIn'
import InputComp from './components/InputComp';

function App() {
  return (
  
    <>
      <Signin></Signin>
      <div className="App">
      <header className="App-header">
      
        <h1>Colors According the customize theme</h1>

        <button type="button" class="btn btn-primary">primary</button>
        <button type="button" class="btn btn-success">success</button>

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
        <InputComp />
      </header>

      {/* < HomePageLayout /> */}

    </div >
    </>
  );
}

export default App;
