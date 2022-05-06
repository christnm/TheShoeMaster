import {Home, NavBar, Men, PicUpload, Women, Contact, Admin} from './Components'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';

function App() {
  const loggedIn = false;

  const loggedInContext = createContext(loggedIn);

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <h1 style={{fontFamily: 'chalkduster', marginTop: '5%', marginBottom: '5%'}}>The Shoe Master</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/men' element={<Men/>}/>
        </Routes>
        <Routes>
          <Route path='/women' element={<Women/>}/>
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
