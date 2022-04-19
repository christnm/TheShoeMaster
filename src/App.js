import {Home, NavBar} from './Components'
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
        <NavBar/>
        <h1 style={{fontFamily: 'chalkduster', marginTop: '5%'}}>The Shoe Master</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
