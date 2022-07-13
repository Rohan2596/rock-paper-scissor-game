import './App.css';
import HomeComponent from './pages/HomeComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayGroundComponent from './pages/PlayGroundComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route exact path="/play" element={<PlayGroundComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
