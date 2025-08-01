import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from "./components/Home";
import ProductListing from "./components/productlsting/ProductListing";
import About from './components/productlsting/About';
import Contact from './components/productlsting/Contact';
import Footer from './components/productlsting/Footer';
import Product from './components/productlsting/Product';
import Navigation from './components/productlsting/Navigation';
import ScrollToTop from './components/productlsting/ScrollToTop';
import Cart from './components/productlsting/Cart';
import { useState } from 'react';



function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Router>
        <Navigation search={search} setSearch={setSearch}/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<ProductListing search={search}/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
