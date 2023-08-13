import './App.css';
import Aboutus from './Components/Aboutus';
import Alert from './Components/Alerts';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// Adding a react router
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  // Hook for changing mode name in the interface
  const [modeName, setModeName] = useState('Enable Dark mode')

  // Hook for changing the mode
  const [mode, setmode] = useState('light')

  // Function to change mode
  const changeMode = () => {
    if (mode === 'light') {
      setmode('dark')
      setModeName('Disable Dark mode')
      document.body.style.backgroundColor = '#181818';
      document.body.style.color = '#D0D0D0'
      makeAlert('Success', 'Dark mode has been enabled')
    }
    else {
      setmode('light')
      setModeName('Enable Dark mode')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      makeAlert('Success', 'Dark mode has been disabled')
    }
  }

  // Alerts
  const [alert, setAlert] = useState(null)
  const makeAlert = (type, msg) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" about="About Us" mode={mode} changeMode={changeMode} setModeName={modeName} />
        <Alert alert={alert} />

        <Routes>
          {/* For no partail matching */}
          <Route exact path="/about" element={<Aboutus mode={mode} />} />
        </Routes>
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<TextForm aboutForm="Enter text below" mode={mode} makeAlert={makeAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
