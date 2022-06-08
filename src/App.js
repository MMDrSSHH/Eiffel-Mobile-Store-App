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
import Login from "./pages/Login";

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
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

const DefaultContainer = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/store/:id" component={ProductDetails} />
      <Route exact path="/shopping-cart" component={CartPage} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  )
}

const LoginContainer = () => {
  return (
    <div>
      <Route path="/login" component={Login} />
    </div>
  )
}

export default App;
