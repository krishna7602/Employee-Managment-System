
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './context/Authprovider.jsx'


createRoot(document.getElementById('root')).render(
  <div className='min-h-screen bg-slate-800'>
  <Authprovider>
    <App/>
  </Authprovider>
  </div>
)
