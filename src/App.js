import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealInfo from './pages/MealInfo';
import Navbar from './components/Navbar';
import { createContext } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<MealInfo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
