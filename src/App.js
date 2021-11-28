import './style.css';
import Image from './Components/1-Image';
import Profile from './Components/2-Profile';
import About from './Components/3-About';
import Interests from './Components/4-Interests';
import Footer from './Components/5-Footer';

function App() {
  return (
    <div className="container">
      <section className="card">
        <Image />
        <Profile />
        <About />
        <Interests />
        <Footer />
        </section>
    </div>
  );
}

export default App;
