import React from 'react';
import { useAppContext } from '../context/AppContext';

const FilterSidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange
  } = useAppContext();

  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {['all', 'jewellery', 'watches'].map((category) => (
            <label 
              key={category}
              className="flex items-center space-x-2 capitalize"
            >
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-4 w-4 border-gray-300 text-purple-600"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-b pb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Price</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹0</span>
            <span>₹10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;