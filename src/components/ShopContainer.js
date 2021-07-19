import { useEffect, useState } from 'react';
import Shop from './Shop';

const ShopContainer = () => {
  const [itemData, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const modifyCart = (action, arg1, arg2 = 0) => {
    switch (action) {
      case 'add':
        setCartItems((cartItems) =>
          arg1.constructor === [].constructor
            ? [...cartItems, ...arg1]
            : [...cartItems, arg1]
        );
        break;
      case 'remove':
        setCartItems((cartItems) => [
          ...cartItems.slice(0, arg1),
          ...cartItems.slice(arg1 + arg2),
        ]);
        break;
      case 'delete':
        setCartItems([]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/shop/br?language=en', { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => setItems(data.data.daily.entries));
  }, []);

  return (
    <Shop
      items={itemData}
      cartItems={cartItems}
      onAddToCart={modifyCart.bind(this, 'add')}
    />
  );
};

export default ShopContainer;
