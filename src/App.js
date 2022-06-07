import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./App.css";

// Pages
import Home from './pages/Home';
import Store from './pages/Store';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

// Components
import ProductContextProvider from './contexts/ProductContextProvider';
import Footer from './Components/Footer';
import CartContextProvider from './contexts/CartContextProvider';

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/store/:id" component={ProductDetails} />
            <Route path="/shopping-cart" component={CartPage} />
            <Route path="/store" component={Store} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
