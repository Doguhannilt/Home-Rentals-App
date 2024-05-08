import './App.css'
import '@radix-ui/themes/styles.css';
import { Flex, Text, Button } from '@radix-ui/themes';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* Pages */
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/register" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
