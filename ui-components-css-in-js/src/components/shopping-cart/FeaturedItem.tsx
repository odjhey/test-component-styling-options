import React, { Fragment, CSSProperties } from 'react';
import FeaturedItemLayout from '../../layouts/FeaturedItemLayout';
import { IProduct } from 'types';

export interface IFeaturedItem {
  item: IProduct;
  addToCart(item: IProduct): void;
  addToFavorites(item: IProduct): void;
}

const FeaturedItem = (props: IFeaturedItem) => {
  const { item } = props;
  const { discount, imgSrc } = item;
  //controls
  const { addToCart, addToFavorites } = props;

  return (
    <FeaturedItemLayout
      discount={discount}
      image={
        <img
          style={{ maxHeight: '150px' }}
          src={imgSrc}
          alt="product_image"
        ></img>
      }
      leftElement={
        <Fragment>
          <ItemDescription item={item}></ItemDescription>
          <p
            style={{
              ...styles.defaultText,
              ...styles.clickableLabel,
            }}
            onClick={() => addToFavorites(item)}
          >
            Add to favorites
          </p>
          <button
            type="button"
            onClick={() => addToCart(item)}
            // style={{ ...styles.defaultText, fontSize: '16px' }}
          >
            + Add To Cart
          </button>
        </Fragment>
      }
    ></FeaturedItemLayout>
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

const ItemDescription = (props: { item: IProduct }) => {
  const { item } = props;
  const { name, price, rating, sellingPrice } = item;
  return (
    <Fragment>
      <h3 style={styles.defaultText}>{name}</h3>
      <p
        style={{
          ...styles.defaultText,
          ...styles.discountedPrice,
        }}
      >
        ₱ {price}
      </p>

      <p
        style={{
          ...styles.defaultText,
          ...styles.price,
        }}
      >
        ₱ {sellingPrice}
      </p>
      <span>{rating}</span>
    </Fragment>
  );
};

export default FeaturedItem;
