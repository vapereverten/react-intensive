import Header from './components/Header';
import Footer from './components/Footer';
import AboutCard from './components/AboutCard';
import ForestTimer from './components/ForestTimer';
import GiftSection from './components/GiftSection';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import './style.css';

function App() {
  return (
    
    <body className='body-background'>
      <div className="wrapper">
          
          <Header /> 

          <main className="main-content">
              
              <HeroSection />

              <AboutCard />

              <Slider />

              <GiftSection />

              <ForestTimer />
          </main>

          <Footer />
          
      </div>
    </body>
  );
}

export default App;
