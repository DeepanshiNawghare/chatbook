import './App.css';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Profile from './Pages/Profile/profile';
import Register from './Pages/Register/register';
import { Route, Routes, NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes> 
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
