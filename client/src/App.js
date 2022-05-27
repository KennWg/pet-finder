import './App.css';
import { StoreProvider } from "./utils/GlobalState";
import Navbar from './components/Navbar/';
import Header from './components/Header/Header.js';
import Main from './components/Main/';
import Footer from './components/Footer/Footer.js';


function App() {
  return (<div className="site-container">
    <StoreProvider>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </StoreProvider>
  </div>

  );
}

export default App;
