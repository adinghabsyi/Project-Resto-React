import React from 'react';

const MenuButtons = ({ setActiveCategory, activeCategory }) => {
  const categories = ['All', 'Pembuka', 'Utama', 'Penutup'];

  return (
    <div className='menu-buttons'>
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeCategory ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuButtons;
