import { Home, NavBar, Men, PicUpload, Women, Contact, Admin, Kids } from './Components'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
    
      <div className='App'>
        <Router>
          <NavBar />
          <h1 style={{ fontFamily: 'chalkduster', marginTop: '5%', marginBottom: '2%' }}>The Shoe Master</h1>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/men' element={<Men />} />
          </Routes>
          <Routes>
            <Route path='/women' element={<Women />} />
          </Routes>
          <Routes>
            <Route path='/kids' element={<Kids />} />
          </Routes>
          <Routes>
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Routes>
            <Route path='/admin' element={<Admin />} />
          </Routes>
          
        </Router>

      </div>
    

  );
}

export default App;
