
import './App.css';
import About from './screens/About';
import Fixtures from './screens/Fixtures';
import GalleryPage from './screens/GalleryPage';
import Homepage from './screens/HomePage';
import PlayerAnaStaff from './screens/Players&Staff';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'; 

 
 

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< Homepage />} />
      <Route exact path='About' element={< About />} />
      <Route exact path='fixtures' element={< Fixtures />} />
      <Route exact path='PlayersandStaff' element={< PlayerAnaStaff />} />
      <Route exact path='Gallery' element={< GalleryPage />} />


      </Routes>

      
    </Router>
  );
}

export default App;
