// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite } = useAppContext();

  return (
    <div className="group relative">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all" />
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white py-2 rounded text-sm font-medium hover:bg-gray-800"
          >
            Quick Add
          </button>
          <button
            onClick={() => toggleFavorite(product)}
            className="p-2 bg-white rounded hover:bg-gray-100"
          >
            ♡
          </button>
        </div>
      </div>

      <Link 
        to={`/products/${product.slug}`}
        className="mt-4 block"
      >
        <h3 className="font-light text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-900">₹{product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;