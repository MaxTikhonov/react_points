import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import UnitText from './Main/UnitText/UnitText';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import lessonsPoints from './lessonsPoints.json';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Router>
          <Header />
          <Sidebar data={lessonsPoints} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/units/:unit' element={<UnitText data={lessonsPoints} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
