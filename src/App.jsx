<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import { useState } from 'react'
import './App.css'
import './SCSS/main.scss'
import menuData from './objectMenu/menuMakanan' // Import menuData
import MenuList from './Components/menuList'
import NavigationBar from "./Components/NavigationBar"
import CustomizedAccordions from './Components/FAQ'
import MenuButtons from './Components/MenuButtons'
import About from './Components/About'


function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filterMenuByCategory = (category) => {
    if (category === 'All') {
      // Jika kategori 'All', tampilkan semua menu
      return Object.values(menuData).flat();
    }

    // Jika kategori lain, cari menu dengan properti category sesuai kategori yang dipilih
    const filteredMenu = [];
    Object.values(menuData).forEach((menuArr) => {
      const menuInCategory = menuArr.filter((menu) => menu.category === category);
      filteredMenu.push(...menuInCategory);
    });

    return filteredMenu;
  };


  return (
    <>
      <NavigationBar />

      <div className='about-section'>
        <About />
      </div>

      <MenuButtons setActiveCategory={setActiveCategory} activeCategory={activeCategory} />

      <div className='card-section'>
        <MenuList menu={filterMenuByCategory(activeCategory)} />
      </div>

      <div className='faq-section'>
        <CustomizedAccordions />
      </div>
>>>>>>> e263035d02e29b4d81a5fa3588eb3a5bea2d015d
    </>
  );
}

export default App;
