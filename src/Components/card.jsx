import React, { useState } from 'react';
import { FaWhatsapp, FaHeart } from 'react-icons/fa'; // Import icons

const Card = ({ title, imageUrl, description, followers, shares, onClick }) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleWhatsappClick = () => {
    // WhatsApp share logic
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(description)} - ${encodeURIComponent(imageUrl)}`;
    window.open(url, '_blank');
  };

  const handleHeartClick = () => {
    setIsLiked(!isLiked); // Toggle the liked state
    console.log('Liked the card');
  };

  const handleCardClick = (e) => {
    console.log('Card clicked');
    // Prevent click propagation for WhatsApp and Like buttons
    if (!e.target.closest('.card-actions')) {
      console.log('Calling onClick handler');
      onClick?.();
    } else {
      console.log('Click was on action buttons');
    }
  };


  return (
    <div 
      onClick={handleCardClick} 
      style={{


      border: '1px solid #e0e0e0',
      borderRadius: '0',
      padding: '6px',
      width: '310px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      height: '400px',
      position: 'relative'
    }}>
      <h3 style={{ 
        margin: '0 0 12px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: '#333',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }}>{title}</h3>
      <img
        src={imageUrl}
        alt={title}
        style={{ 
          width: '100%',
          height: '300px', // Adjusted height for better alignment
          borderRadius: '8px',
          objectFit: 'cover',
          marginBottom: '12px'
        }}
      />
      <p style={{ 
        marginRight:'149px',
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.4',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textAlign:'center',
      }}>{description}</p>

      <div style={{ 
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <FaWhatsapp 
            onClick={handleWhatsappClick}
            style={{ 
              border:'1px solid white',
              borderRadius:'50%',
              color: '#25D366',
              fontSize: '34px',
              cursor: 'pointer',
              padding: '3px',
              display: 'inline-block',
              backgroundColor: '#fff',
            }} 
          />
          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Share</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FaHeart 
            onClick={handleHeartClick}
            style={{ 
              border:'1px  solid white',
              borderRadius:'50%',
              stroke: '#FF6B6B',
              strokeWidth: '2',
              fill: isLiked ? 'red' : '#FFB3B3',
              fontSize: '34px',
              cursor: 'pointer',
              padding: '4px',
              display: 'inline-block',
              backgroundColor: '#fff',
              transition: 'fill 0.3s',
            }} 
          />
          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Like</div>
        </div>
      </div>

    </div>
  );
};

export default Card;
