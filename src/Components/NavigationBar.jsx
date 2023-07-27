/* eslint-disable react/no-unknown-property */
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function NavigationBar() {
  return (
    <header>
      <nav className="navBar">
        <a href="#" className="navBarLogo">
          RESTORANMU
        </a>

        <div className="navBarNav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT US</a>
        </div>

        <div className="navBarExtra">
          <a href="#shopping-cart" id="shoppingCart">
            <ShoppingCartRoundedIcon />
          </a>
          <a href="#menu" id="restaurantIcon">
            <RestaurantRoundedIcon />
          </a>
          <a href="#" id="hamburgerMenu">
            <MenuIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
