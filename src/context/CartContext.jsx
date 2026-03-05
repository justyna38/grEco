import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = useMemo(() => {
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    const cartTotal = items.reduce((total, item) => {
      if (!item.price || typeof item.price !== 'string') return total;

      const match = item.price.match(/(\d+,\d+|\d+)/);

      if (!match) return total;

      const unit = parseFloat(match[1].replace(',', '.'));

      if (Number.isNaN(unit)) return total;

      return total + unit * item.quantity;
    }, 0);

    return {
      cartItems: items,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      clearCart
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart doit être utilisé à l’intérieur d’un CartProvider');
  }

  return context;
}

