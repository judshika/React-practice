import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyCount from './MyCount.jsx'
import Timer from './Timer.jsx'
import FocusInput from './FocusInput.jsx'
import StageThree from './StageThree.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyCount />
    <Timer/>
    <FocusInput/>
    <StageThree/>
    
    
  </StrictMode>,
)
