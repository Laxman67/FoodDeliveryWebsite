import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/*" element={<h1>NOT FOUND !</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
