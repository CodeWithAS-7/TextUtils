import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or disabled

  // FOR ENABLING AUTO-DISAPPEARING ALERT MESSAGES

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      // showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter some text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
