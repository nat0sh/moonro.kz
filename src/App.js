import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Model from './pages/Model';
import { CartProvider } from './contexts/CartContext';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';
import Case from './pages/Case';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <div className="app">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:brand" element={<Brand />} />
            <Route path="/:brand/:modelName" element={<Model />} />
            <Route path="/:brand/:modelName/:caseId" element={<Case />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
