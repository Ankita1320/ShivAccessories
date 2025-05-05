import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  // State declarations
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(10000);

  return (
    <AppContext.Provider value={{
      // State values
      cart,
      favorites,
      user,
      searchQuery,
      selectedCategory,
      priceRange,
      
      // State setters
      setCart,
      setFavorites,
      setUser,
      setSearchQuery,
      setSelectedCategory,
      setPriceRange,

      // Additional functions
      addToCart: (product) => {
        setCart(prev => [...prev, product]);
      }
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);