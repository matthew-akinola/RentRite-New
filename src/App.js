import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/topnav/NavBar';
import Home from './pages/home/Home';
import Buy from './pages/buy/Buy';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
