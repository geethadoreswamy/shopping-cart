// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ProductPage = () => {
//   // Access the card data passed via navigation
//   const location = useLocation();
//   console.log('Location state:', location.state);
//   const { card } = location.state || {};
//   console.log('Card data:', card);


//   // Navigate back to the card list if no card data is found
//   const navigate = useNavigate();
//   if (!card) {
//     navigate('/'); // Redirect to the home page or card list
//     return null;
//   }

//   // Use the productImages array from the card object
//   const productImages = card?.productImages || [];
//   console.log('Product images:', productImages);



//   return (
//     <div style={{ 
//       padding: '20px', 
//       maxWidth: '1200px', 
//       margin: '0 auto', 
//       textAlign: 'center' 
//     }}>
//       {/* Card Title */}
//       <h1 style={{ 
//         fontSize: '24px', 
//         fontWeight: '600', 
//         color: '#333', 
//         marginBottom: '20px' 
//       }}>
//         {card.title}
//       </h1>

//       {/* Grid for displaying 7 images */}
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
//         gap: '20px', 
//         padding: '10px' 
//       }}>
//         {productImages.map((image, index) => (
//           <div key={index} style={{ 
//             border: '1px solid #e0e0e0', 
//             borderRadius: '8px', 
//             overflow: 'hidden', 
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
//           }}>
//             <img
//               src={image}
//               alt={`${card.title} - Product ${index + 1}`}

//               style={{ 
//                 width: '100%', 
//                 height: '300px', 
//                 objectFit: 'cover', 
//                 borderRadius: '8px 8px 0 0' 
//               }}
//             />
//             <div style={{ 
//               padding: '10px', 
//               backgroundColor: '#f9f9f9', 
//               textAlign: 'center' 
//             }}>
//               <p style={{ 
//                 fontSize: '16px', 
//                 color: '#666', 
//                 margin: '0' 
//               }}>
//                 Product {index + 1}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/')}
//         style={{ 
//           marginTop: '20px', 
//           padding: '10px 20px', 
//           fontSize: '16px', 
//           color: '#fff', 
//           backgroundColor: '#333', 
//           border: 'none', 
//           borderRadius: '4px', 
//           cursor: 'pointer' 
//         }}
//       >
//         Back to Card List
//       </button>
//     </div>
//   );
// };

// export default ProductPage;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  console.log('Location state:', location.state);
  const { card } = location.state || {};
  console.log('Received card data:', card);


  // Debugging: Log the card data and product images
  console.log('Card data:', card);
  console.log('Product images:', card?.productImages);

  const navigate = useNavigate();
  if (!card) {
    navigate('/');
    return null;
  }

  const productImages = card?.productImages || [];
  console.log('Product images to display:', productImages);


  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      textAlign: 'center' 
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        color: '#333', 
        marginBottom: '20px' 
      }}>
        {card.title}
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '10px' 
      }}>
        {productImages.map((image, index) => (
          <div key={index} style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
          }}>
            {image ? (
              <img
                src={image}
                alt={`${card.title} - Product ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover', 
                  borderRadius: '8px 8px 0 0' 
                }}
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px 8px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                Image not available
              </div>
            )}


            <div style={{ 
              padding: '10px', 
              backgroundColor: '#f9f9f9', 
              textAlign: 'center' 
            }}>
              <p style={{ 
                fontSize: '16px', 
                color: '#666', 
                margin: '0' 
              }}>
                Product {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          color: '#fff', 
          backgroundColor: '#333', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        Back to Card List
      </button>
    </div>
  );
};

export default ProductPage;
