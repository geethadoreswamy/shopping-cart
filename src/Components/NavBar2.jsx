
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar2.css';
import kurta from "../Assets/Images/kurta.jpg";
import tops from "../Assets/Images/top.jpg";
import dress from "../Assets/Images/dreses.jpg";
import saree from "../Assets/Images/saree.jpg";
import suits from "../Assets/Images/suits.jpg";
import ethnic from "../Assets/Images/ethnic.jpg";
import bottom from "../Assets/Images/bottom.jpg";
import MyFeed from "../Assets/Images/MyFEED.avif";
import shirts from "../Assets/Images/shirts.jpg";
import Tshirt from "../Assets/Images/T-shirt.jpg";
import jeans from "../Assets/Images/jeans.jpg";
import trouser from "../Assets/Images/trouser.jpg";
import jackets from "../Assets/Images/jackets.jpg";
import baby from "../Assets/Images/baby.jpg";
import babydress from "../Assets/Images/babyDress.jpg";
import babyTops from "../Assets/Images/bayTops.jpg";
import shorts from "../Assets/Images/shorts.jpg";

const categories = {
  WOMEN: [
    { name: 'MY FEED', icon: MyFeed, isHighlighted: true },
    { name: 'KURTAS', icon: kurta, path: '/women/kurta' },
    { name: 'TOPS', icon: tops, path: '/women/tops' },
    { name: 'DRESSES', icon: dress, path: '/women/dresses' },
    { name: 'SAREES', icon: saree, path: '/women/sarees' },
    { name: 'SUITS', icon: suits, path: '/women/suits' },
    { name: 'ETHNIC SETS', icon: ethnic, path: '/women/ethnic-sets' },
    { name: 'BOTTOMS', icon: bottom, path: '/women/bottoms' },
  ],
  MEN: [
    { name: 'MY FEED', icon: MyFeed, isHighlighted: true },
    { name: 'SHIRTS', icon: shirts, path: '/men/shirts' },
    { name: 'T-SHIRTS', icon: Tshirt, path: '/men/tshirts' },
    { name: 'JEANS', icon: jeans, path: '/men/jeans' },
    { name: 'TROUSERS', icon: trouser, path: '/men/trousers' },
    { name: 'JACKETS', icon: jackets, path: '/men/jackets' },
  ],
  KIDS: [
    { name: 'MY FEED', icon: MyFeed, isHighlighted: true },
    { name: 'BABY WEAR', icon: baby, path: '/kids/baby-wear' },
    { name: 'DRESSES', icon: babydress, path: '/kids/dresses' },
    { name: 'TOPS', icon: babyTops, path: '/kids/tops' },
    { name: 'SHORTS', icon: shorts, path: '/kids/shorts' },
  ],
};

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('WOMEN');
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="tabs">
        <span className={`tab ${activeTab === 'WOMEN' ? 'active' : ''}`} onClick={() => setActiveTab('WOMEN')}>WOMEN</span>
        <span className={`tab ${activeTab === 'MEN' ? 'active' : ''}`} onClick={() => setActiveTab('MEN')}>MEN</span>
        <span className={`tab ${activeTab === 'KIDS' ? 'active' : ''}`} onClick={() => setActiveTab('KIDS')}>KIDS <span className="new-label">NEW</span></span>
      </div>
      <div className="categories-container">
        <div className="categories">
          {categories[activeTab].map((category, index) => (
            <div key={index} className={`category ${category.name === 'MY FEED' ? 'myfeed' : ''}`} onClick={() => handleCategoryClick(category.path)}>
              <div className="category-image-container">
                <img src={category.icon} alt={category.name} className={`category-image ${category.name === 'MY FEED' ? 'myfeed-image' : ''}`} />
              </div>
              <span className={`category-name ${category.name === 'MY FEED' ? 'myfeed-name' : ''}`}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
