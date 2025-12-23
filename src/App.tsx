import AboutCard from './components/AboutCard';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';   
import Gifts from './pages/Gifts';
import './style.css';

function App() {

  const location = useLocation();

  return (
      <div className="wrapper">  
          <Header /> 

           <main className={`main-content ${location.pathname === '/' ? 'main-content-home' : 'main-content-gifts'}`}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gifts" element={<Gifts />} />
                  <Route path="/about" element={<AboutCard />} />
              </Routes>
            </main>

          <Footer />
      </div>
  );
}

export default App;
