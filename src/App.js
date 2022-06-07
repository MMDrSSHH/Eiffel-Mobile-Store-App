import { useContext } from 'react';
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
import Footer from './Components/Footer';


// Contexts
import ProductContextProvider from './contexts/ProductContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import { ThemeContext } from './contexts/ThemeContextProvider';

function App() {
  const { darkTheme } = useContext(ThemeContext);

  // Changing the background theme
  if (darkTheme) {
    document.body.className = "dark";
  } else {
    document.body.className = "";
  }

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
