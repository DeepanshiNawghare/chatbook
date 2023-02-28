import './App.css';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Profile from './Pages/Profile/profile';
import Register from './Pages/Register/register';



function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
