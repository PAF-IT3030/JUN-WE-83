import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import { LandingPage } from './Components/LandingPage/LandingPage';
import RegisterAuthentication from './Components/Authentication/RegisterAuthentication';
import UpdateModel from './Components/WorkoutStatusCard/UpdateModel';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/*" element={true?<HomePage/>:<Authentication/>}></Route>
      <Route path="/landing" element={<LandingPage/>}></Route>
      <Route path="/authentication" element={<Authentication/>}></Route>
      <Route path="/registerauthentication" element={<RegisterAuthentication/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
