import { useState } from "react";
import "./App.css";
import "./SCSS/main.scss";
import menuData from "./objectMenu/menuMakanan"; // Import menuData
import MenuList from "./Components/menuList";
import NavigationBar from "./Components/NavigationBar";
import CustomizedAccordions from "./Components/FAQ";
import MenuButtons from "./Components/MenuButtons";
import About from "./Components/About";
import HomeSection from "./Components/HomeSection";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterMenuByCategory = (category) => {
    if (category === "All") {
      // Jika kategori 'All', tampilkan semua menu
      return Object.values(menuData).flat();
    }

    // Jika kategori lain, cari menu dengan properti category sesuai kategori yang dipilih
    const filteredMenu = [];
    Object.values(menuData).forEach((menuArr) => {
      const menuInCategory = menuArr.filter(
        (menu) => menu.category === category
      );
      filteredMenu.push(...menuInCategory);
    });

    return filteredMenu;
  };

  return (
    <>
      <NavigationBar />

      <div className="home-section" id="home">
        <HomeSection />
      </div>

      <div className="about-section" id="about">
        <About />
      </div>

      <MenuButtons
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <div className="card-section" id="menu">
        <MenuList menu={filterMenuByCategory(activeCategory)} />
      </div>

      <div className="faq-section" id="faq">
        <CustomizedAccordions />
      </div>
    </>
  );
}

export default App;
