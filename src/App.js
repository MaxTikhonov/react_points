import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
