import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";

const sampleProducts = [
        {
          id: 1,
          name: "Rose Gold Earrings",
          description: "Elegant and stylish rose gold earrings.",
          price: 999,
          images: ["https://via.placeholder.com/300x300"],
          category: "jewellery",
          slug: "rose-gold-earrings"
        },
        {
          id: 2,
          name: "Minimalist Watch",
          description: "Stylish wristwatch for daily wear.",
          price: 1499,
          images: ["https://via.placeholder.com/300x300"],
          category: "watches",
          slug: "minimalist-watch"
        },
      ];

const Dashboard = () => {
  const { searchQuery, selectedCategory, addToCart, toggleFavorite } = useAppContext();

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categorizedProducts = filteredProducts.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {Object.entries(categorizedProducts).map(([category, products]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;