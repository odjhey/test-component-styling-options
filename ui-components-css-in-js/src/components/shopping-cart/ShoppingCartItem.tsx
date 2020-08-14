import React, {
  Fragment,
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
} from 'react';

import FeaturedItemLayout from '../../layouts/FeaturedItemLayout';
import { ItemCounter } from '../../commons/ItemCounter';
import { IProduct, IProductFormik } from '../../types';
import { getItemTotalPrice, roundOffTwoDecimals } from '../../commons/discount';

const ShoppingCartItem = (props: {
  item: IProductFormik;
  deleteItem(id: string): void;
  addToWishList(id: string): void;
  onChange(item: IProduct): void;
  error: React.ReactNode | null;
}) => {
  const { item, error } = props;
  //actions
  const { deleteItem, addToWishList, onChange } = props;
  return (
    <FeaturedItemLayout
      discount={item.discount}
      image={<ProductImage imgSrc={item.imgSrc}></ProductImage>}
      leftElement={
        <ItemDescription
          item={item}
          error={error}
          handleChange={(item: IProduct) => onChange(item)}
          onDelete={(item: IProduct) => deleteItem(item.id)}
          onAddWishList={(item: IProduct) => addToWishList(item.id)}
        ></ItemDescription>
      }
    ></FeaturedItemLayout>
  );
};

const ProductImage = (props: { imgSrc: string }) => {
  const { imgSrc } = props;
  return (
    <Fragment>
      <img
        style={{ maxHeight: '100px' }}
        src={imgSrc}
        alt="product_image"
      ></img>
    </Fragment>
  );
};

const ItemDescription = (props: {
  item: IProductFormik;
  handleChange(item: IProductFormik): void;
  onDelete(item: IProductFormik): void;
  onAddWishList(item: IProductFormik): void;
  error: ReactNode | null;
}) => {
  const { item, error } = props;
  const { quantity, totalItemPrice: initItemPrice, price, discount } = item;

  //controls
  const { handleChange, onDelete } = props;

  const [count, setCount] = useState<number>(quantity);
  const [totalItemPrice, setTotalItemPrice] = useState<number>(initItemPrice);

  useEffect(() => {
    handleChange({ ...item, quantity: count, totalItemPrice: totalItemPrice });
  }, [count, setCount, totalItemPrice]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTotalItemPrice(
      getItemTotalPrice({
        discount: discount,
        originalPrice: price,
        quantity: count,
        discounted: true,
      })
    );
  }, [count, setCount, item]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <h3 style={styles.defaultText}>{item.name}</h3>
      <ItemCounter
        label="quantity"
        initialCount={quantity ? quantity : 1}
        handleChange={(count) => setCount(count)}
      ></ItemCounter>

      <button type="button" onClick={() => onDelete(item)}>
        Delete
      </button>
      <p
        style={{
          ...styles.defaultText,
          ...styles.discountedPrice,
        }}
      >
        ₱
        {getItemTotalPrice({
          discount: discount,
          originalPrice: price,
          quantity: count,
          discounted: false,
        })}
      </p>
      <p
        style={{
          ...styles.defaultText,
          ...styles.price,
        }}
      >
        ₱{roundOffTwoDecimals(totalItemPrice)}
      </p>
      {error ? error : null}
    </Fragment>
  );
};

const styles: {
  defaultText: CSSProperties;
  clickableLabel: CSSProperties;
  discountedPrice: CSSProperties;
  price: CSSProperties;
} = {
  defaultText: {
    margin: 0,
    padding: 0,
  },
  clickableLabel: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  },
  discountedPrice: {
    fontSize: '16px',
    textDecoration: 'line-through',
    color: 'grey',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default ShoppingCartItem;
