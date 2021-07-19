import { useRef, useState } from 'react';
import '../styles/Item.css';
import Card from './Card';

const Item = (props) => {
  const [quantity, setQuantity] = useState(0);
  const quantityInput = useRef();

  const decrement = () => {
    setQuantity((q) => q - 1);
  };

  const increment = () => {
    setQuantity((q) => q + 1);
  };

  const updateQuantity = (ev) => {
    if (parseInt(ev.target.value)) {
      setQuantity(ev.target.value);
    }
  };

  const itemSpans = props.item.items.map((item) => (
    <div className='itemDiv' key={item.name}>
      <span key={item.name} className='item'>
        {item.name}
      </span>
    </div>
  ));

  itemSpans.push(
    <div className='quantity' key={props.item.items[0].name + 'quantity'}>
      <button type='button' onClick={decrement.bind(this)}>
        -
      </button>
      <input
        ref={quantityInput}
        className='quantityInput'
        onChange={updateQuantity}
        value={quantity}
      />
      <button type='button' onClick={increment.bind(this)}>
        +
      </button>
    </div>
  );
  itemSpans.push(
    <button
      key={props.item.items[0].name + 'button'}
      type='button'
      onClick={() => {
        const itemsToAddToCart = new Array(
          parseInt(quantityInput.current.value)
        );
        itemsToAddToCart.fill(
          (props.item.newDisplayAsset && props.item.newDisplayAsset.id) ||
            props.item.items[0].name
        );

        props.onAddToCart(itemsToAddToCart);
      }}
    >
      Add to Cart
    </button>
  );

  return <Card elements={itemSpans} />;
};

export default Item;
