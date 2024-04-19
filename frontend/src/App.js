import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import { LandingPage } from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/*" element={true?<HomePage/>:<Authentication/>}></Route>
      <Route path="/landing" element={<LandingPage/>}></Route>
      <Route path="/authentication" element={<Authentication/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
