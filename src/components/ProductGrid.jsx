// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const ProductGrid = ({ category }) => {
  const { filteredProducts } = useAppContext();

  const categoryProducts = filteredProducts.filter(
    product => product.category === category
  );

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-light mb-8 border-b pb-4 border-gray-200">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            className="hover:transform hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;