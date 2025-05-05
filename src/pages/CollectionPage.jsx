import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { useAppContext } from '../context/AppContext';

const CollectionPage = () => {
  const { filteredProducts } = useAppContext();
  console.log('Rendering CollectionPage');
  console.log('Filtered Products:', filteredProducts);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <FilterSidebar />
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-8 border-b pb-4 border-gray-200">
                Jewellery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts
                  .filter(p => p.category === 'jewellery')
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8 border-b pb-4 border-gray-200">
                Watches
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts
                  .filter(p => p.category === 'watches')
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;