import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from './App.jsx'
import MyCount from './MyCount.jsx'
import Timer from './Timer.jsx'
import FocusInput from './FocusInput.jsx'
import StageThree from './StageThree.jsx'
import Inputform from './Inputform.jsx'
import Inputform2 from './Inputform2.jsx'
import Map from './Map.jsx'
import Landingpage from './Landing page.jsx'
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education.jsx';
import Summary from './Summery.jsx';
import Contact from './Contact';
import Login from './Login.jsx';
import App from './portfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
    <Login/>
    
<App/>

    
    
    
    
  </StrictMode>,
)
