import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';

// Import local images
import card1 from '../Assets/CardImages/card1.avif';
import card2 from '../Assets/CardImages/card2.avif';
import card3 from '../Assets/CardImages/card3.avif';
import card4 from '../Assets/CardImages/card4.avif';
import card5 from '../Assets/CardImages/card5.avif';
import card6 from '../Assets/CardImages/card6.avif';
import card7 from '../Assets/CardImages/card7.avif';
import card8 from '../Assets/CardImages/card8.avif';
import card9 from '../Assets/CardImages/card9.avif';
import card10 from '../Assets/CardImages/card10.avif';
import card11 from '../Assets/CardImages/card11.avif';
import card12 from '../Assets/CardImages/card12.avif';

const CardList = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: 'PETALS & PANDEY',
      imageUrl: card1,
      followers: '15K',
      shares: '5',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'NEXT-GEN JEANS',
      imageUrl: card2,
      followers: '15K',
      shares: '11',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'HELL LOVE IT',
      imageUrl: card3,
      followers: '15K',
      shares: '9',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'SHAADI SEASON',
      imageUrl: card4,
      followers: '15K',
      shares: '3',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'TIMELESS AND TRENDY!',
      imageUrl: card5,
      followers: '15K',
      shares: '7',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'FLEWLY & FABULOUS!',
      imageUrl: card6,
      followers: '15K',
      shares: '12',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'FEMME COLLECTIONS',
      imageUrl: card7,
      followers: '15K',
      shares: '8',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'BOLD AND BRIGHT',
      imageUrl: card8,
      followers: '15K',
      shares: '6',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'TRENDDY DRESSES',
      imageUrl: card9,
      followers: '15K',
      shares: '10',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'FOR SUMMER VIBES',
      imageUrl: card10,
      followers: '15K',
      shares: '4',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'FOR SUMMER VIBES',
      imageUrl: card11,
      followers: '15K',
      shares: '4',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
    {
      title: 'FOR SUMMER VIBES',
      imageUrl: card12,
      followers: '15K',
      shares: '4',
      productImages: [
        "/JsonImages/kurta1.avif",
        "/JsonImages/kurta2.avif",
        "/JsonImages/kurta3.avif",
        "/JsonImages/kurta4.avif",
        "/JsonImages/kurta5.avif",
        "/JsonImages/kurta6.avif",
        "/JsonImages/kurta7.avif",
      ],
    },
  ];

  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
    console.log('Product images:', card.productImages);
    console.log('Navigation function available:', !!navigate);
    console.log('Card title:', card.title);
    
    try {
      navigate(`/product/${card.title}`, { 
        state: { 
          card: {
            ...card,
            productImages: card.productImages || []
          }
        } 
      });
      console.log('Navigation attempted');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };


  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '7%',
      padding: '10px',
      maxWidth: '1500px',
      marginLeft: '60px',
      marginRight: '120px',
      marginTop: '0px',
      marginBottom: '0px',
    }}>
      {cardsData.map((card, index) => {
        console.log(`Rendering card ${index}:`, card);
        return (
          <div key={index} style={{ cursor: 'pointer' }}>
            <Card {...card} onClick={() => handleCardClick(card)} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
