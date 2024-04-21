import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './Components/Footer/Footer.jsx';
const App = () => {
  return (
    <>
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Order' element={<PlaceOrder />}/>
        </Routes> 
    </div>
    <Footer />
    </>
  )
}

export default App;
