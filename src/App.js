// import React, { useState } from 'react/cjs/react.development';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {


  const[mode, setMode] = useState ('light'); //whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
           setAlert({
             msg:message,
             type:type

           });

           setTimeout(() => {
             setAlert(null)
           }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){

      setMode('dark');
      document.body.style.background = 'black';
      showAlert('Dark mode has been enabled','success');
      document.title = "TextUtils dark-mode"



// don't do like this ********    bad user experience
      // setInterval(() => {
      // document.title = "TextUtils dark-mode"
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install it now"
      // }, 1500);
// ***************************************


    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = "TextUtils light-mode"


    }
  }







  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode = {mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
   
    <Routes>
          <Route exact path="/" element={<TextForm heading = 'Enter the text to analyze below' mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
