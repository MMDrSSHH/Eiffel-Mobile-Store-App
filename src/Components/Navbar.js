import React, { useRef, useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import OffcanvasBody from 'react-bootstrap/OffcanvasBody';
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle';
// import Button from "react-bootstrap/Button";
import { NavLink, Link } from 'react-router-dom';

// Css Style
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Icon and image
import brandIcon from "../assets/brandIcon.png";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// Custom hooks
import useWindowSize from '../hooks/useWindowSize';

// Context
import { CartContext } from "../contexts/CartContextProvider";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const screenWidth = useWindowSize();
  const cartIcon = useRef(null);

  const { state } = useContext(CartContext);

  const sidebarHandler = (value) => {
    setMenuShow(value);
  }


  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <img src={brandIcon} alt="Eiffel" />
            <Link
              to="/shopping-cart"
              className={styles.cartContainer}
            >
              <ShoppingCartOutlinedIcon ref={cartIcon} className={styles.cartIcon} sx={{ fontSize: 38, color: "#fff" }} />
              <span className={styles.cartBadge}>{state.totallVariants}</span>
            </Link>
          </div>

          <ul>
            <li>
              <NavLink exact activeClassName={styles.activeLink} to="/">خانه</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={styles.activeLink} to="/store">فروشگاه</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={styles.activeLink} to="/about-us">درباره ما</NavLink>
            </li>
          </ul>
          <button className={styles.sidebarBtn} onClick={() => sidebarHandler(true)}>
            <MenuIcon sx={{ fontSize: 35, color: "blue" }} />
          </button>
        </div>
        {
          screenWidth <= 768 &&
          <Offcanvas show={menuShow} onHide={() => sidebarHandler(false)} placement="end">
            <OffcanvasHeader closeButton>
              <OffcanvasTitle>
                {/* <div className={styles.brandIcon}>
                  <img src={brandIcon} alt="Eiffel" />
                </div> */}
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <ul>
                <li>
                  <NavLink onClick={() => sidebarHandler(false)} exact activeClassName={styles.activeLink} to="/">خانه</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => sidebarHandler(false)} exact activeClassName={styles.activeLink} to="/store">فروشگاه</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => sidebarHandler(false)} exact activeClassName={styles.activeLink} to="/about-us">درباره ما</NavLink>
                </li>
              </ul>
            </OffcanvasBody>
          </Offcanvas>
        }
      </nav>
      <div className={styles.fillElement}></div>
    </>
  );
}

export default Navbar;