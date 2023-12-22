import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Slider from "../components/home/slider";
import Advantages from "../components/home/advantages";
import AboutUs from "../components/home/aboutUs";
import Items from "../components/items/items";
import { CartProvider } from "../contexts/CartContext";
import { items } from "../data/data";

const Home = () => {
  const [orders, setOrders] = useState([]);

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  return (
    <div className="wrapper">
      <CartProvider>
        <Header orders={orders || []} onDelete={deleteOrder} />
        <Slider />
        <Advantages />
        <AboutUs />
        <Items items={items} onAdd={addToOrder} />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Home;
