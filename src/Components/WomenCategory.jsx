import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';


const WomenCategory = () => {
  // Get the category name from the URL (for example: 'kurtas', 'tops', etc.)
  const { categoryName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use passed data if available, otherwise fetch
    if (location.state?.categoryData) {
      setProducts(location.state.categoryData);
      setLoading(false);
    } else {
      fetch("/imagesData.json")
        .then((res) => res.json())
        .then((data) => {
          const categoryKey = categoryName.toUpperCase();
          setProducts(data.products.WOMEN[categoryKey] || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }
  }, [categoryName, location.state]);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-page">
      <h1>{categoryName.toUpperCase()}</h1>
      {products.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              <img 
                src={product.image[0]} 
                alt={product.name} 
                className="product-image"
                onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                style={{ cursor: 'pointer' }}
              />

              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ₹{product.price}</p>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WomenCategory;
