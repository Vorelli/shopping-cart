import Item from './Item';
import ShoppingCart from './ShoppingCart';
import '../styles/Shop.css';

const Shop = (props) => {
  return (
    <div className='shop'>
      {props.items.map((item, i) => (
        <Item
          key={(item.newDisplayAsset && item.newDisplayAsset.id) || i}
          item={item}
          onAddToCart={props.onAddToCart}
        />
      ))}
      <ShoppingCart cartItems={props.cartItems} />
    </div>
  );
};

export default Shop;
