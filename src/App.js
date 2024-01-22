import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/topnav/NavBar';
import Home from './pages/home/Home';
import Buy from './pages/buy/Buy';
import Footer from './components/common/footer/Footer';
import SignUp from './pages/authPages/SignUp';
import { Route, Routes } from 'react-router-dom';
import AlmostThere from './pages/authPages/AlmostThere';
import WelcomeBack from './pages/authPages/WelcomeBack';
import Login from './pages/authPages/Login';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Routes>
        {/* authenticaiton routes */}
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/progress' element={<AlmostThere/>}/>
        <Route path='/welcome' element={<WelcomeBack/>}/>

        {/* landing pages */}
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
