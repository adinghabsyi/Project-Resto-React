import React from 'react';
import ActionAreaCard from '../Components/card';

const MenuList = ({ menu }) => {
  return (
    <>
      {menu.map((item, index) => (
        <ActionAreaCard key={index} {...item} />
      ))}
    </>
  );
};

export default MenuList;
