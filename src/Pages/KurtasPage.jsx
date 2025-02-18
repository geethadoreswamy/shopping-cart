import React, { useEffect, useState } from 'react';


const KurtasPage = () => {
  const [kurtas, setKurtas] = useState([]);

  useEffect(() => {
   
    fetch('/imagesData.json') // If your JSON file is located in the public directory
      .then(response => response.json())
      .then(data => setKurtas(data.products.WOMEN.KURTAS))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kurtas Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kurtas.map((kurta) => (
          <div key={kurta.id} className="bg-white rounded-lg shadow-md p-4">
            <img 
              src={kurta.image[0]} 
              alt={kurta.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />

            <h2 className="text-xl font-semibold mb-2">{kurta.name}</h2>
            <p className="text-gray-600 mb-2">{kurta.description}</p>
            <p className="text-lg font-bold">₹{kurta.price}</p>
            {kurta.sizes && (
              <p className="text-sm text-gray-500 mt-2">
                Sizes: {kurta.sizes.join(', ')}
              </p>
            )}
            {kurta.whatsapp_contact && (
              <a
                href={kurta.whatsapp_contact}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Contact on WhatsApp
              </a>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default KurtasPage;
