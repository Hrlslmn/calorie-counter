import './App.css';
import Home from './pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import MealInfo from './pages/MealInfo'
import MealList from './pages/MealList';
import Superfood from './pages/Superfood';
import Plantbased from './pages/Plantbased';
import Balanced from './pages/Balanced';
import Gut from './pages/Gut';
import Heart from './pages/Heart';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="App bg-slate-900">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/counter" element={<MealInfo/>}/>
          <Route path="/list" element={<MealList />}/>
          <Route path="/superfood" element={<Superfood/>}/>
          <Route path="/plantbased" element={<Plantbased/>}/>
          <Route path="/balanced" element={<Balanced/>}/>
          <Route path="/gut" element={<Gut/>}/>
          <Route path="/heart" element={<Heart/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
