
import './App.css';
import About from './component/About';
import AlertBox from './component/AlertBox';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

const [alert, setAlert] = useState(null);


const showAlert = (message , type) =>{
setAlert({
  msg : message ,
  type : type
})
setTimeout(()=>{
  setAlert(null)
},2000)

}



const [mode,setMode] = useState ('light');
const [modeText,setModeText] = useState ('dark');

const setModeFunction=()=>{
if(mode === 'light'){
  setMode('dark')
  setModeText('light')
  document.body.style.backgroundColor='black';
  
  showAlert('Dark Mode enable','Success')
  document.title ='TextUtils | Dark Mode : Home'
  // setInterval(() => {
  //   document.title ='Welcome To'
  // }, 2000);
  // setInterval(() => {
  //   document.title ='TextUtils | Dark Mode : Home'
  // }, 1000);
}
else{
  setMode('light')
  setModeText('Dark')
  document.body.style.backgroundColor='white';
  showAlert('Light Mode enable','Success')
  document.title ='TextUtils | Light Mode : Home'

}
}
  return (
    <Router>
    <Navbar title="TextUtils" mode={mode} setModeFunction={setModeFunction} modeText={modeText} />

    <AlertBox alertProp={alert} />
    <div className="container mxy-3">
    <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/"  element={
            <TextForm title="Enter text to analyze below" textColor={modeText}  />
          }>
           
          </Route>
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
