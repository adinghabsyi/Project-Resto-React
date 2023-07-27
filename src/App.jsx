import { useState } from 'react'
import './App.css'
import './SCSS/main.scss'
import menuData from './objectMenu/menuMakanan' // Import menuData
import MenuList from './Components/menuList'
import NavigationBar from "./Components/NavigationBar"

function App() {
  return (
    <>
      <NavigationBar />

      <div className='card-section'>
        <MenuList menu={menuData.salad} />
        <MenuList menu={menuData.risoles} />
        <MenuList menu={menuData.lumpia} />
        <MenuList menu={menuData.tahuIsi} />
        <MenuList menu={menuData.martabak} />
        <MenuList menu={menuData.bakwan} />
        <MenuList menu={menuData.supManten} />
        <MenuList menu={menuData.ayamGoreng} />
        <MenuList menu={menuData.ikanBawalBakar} />
        <MenuList menu={menuData.palumaraBandeng} />
        <MenuList menu={menuData.gurameAsamManis} />
        <MenuList menu={menuData.nasiPadang} />
        <MenuList menu={menuData.nasiGoreng} />
        <MenuList menu={menuData.sotoKudus} />
        <MenuList menu={menuData.iceCream} />
        <MenuList menu={menuData.pie} />
        <MenuList menu={menuData.jajanPasar} />
        <MenuList menu={menuData.biskuit} />
        <MenuList menu={menuData.puding} />
      </div>
    </>
  );
}

export default App;
