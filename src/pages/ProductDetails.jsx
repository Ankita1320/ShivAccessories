import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, favorites, addToCart, toggleFavorite } = useAppContext();
  const navigate = useNavigate();

  // Fetch product details from API or context
  const product = sampleProducts.find(p => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="container mx-auto p-6">
        <button 
          onClick={() => navigate(-1)}
          className="mb-4 text-purple-600 hover:underline"
        >
          ← Back to Products
        </button>
        
        {product ? (
          <div className="bg-white rounded-lg shadow-lg p-6 flex gap-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-96 h-96 object-cover rounded-lg"
            />
            
            <div className="space-y-4 flex-1">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-2xl font-bold text-purple-600">₹{product.price}</p>
              
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => toggleFavorite(product)}
                  className={`px-6 py-2 rounded ${
                    favorites.some(p => p.id === product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {favorites.some(p => p.id === product.id) ? '❤️ Saved' : '♡ Save'}
                </button>
                
                <button
                  onClick={() => addToCart(product)}
                  className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;