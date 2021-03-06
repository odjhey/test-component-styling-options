import React, { Fragment, CSSProperties } from 'react';
import FeaturedItemLayout, {
  IFeaturedItemLayoutStyle,
} from '../../layouts/FeaturedItemLayout';
import { IProduct } from '../../types';
import { Button } from '../../core';

export interface IFeaturedItem {
  item: IProduct;
  addToCart(item: IProduct): void;
  addToFavorites(item: IProduct): void;
  layoutStyles?: IFeaturedItemLayoutStyle;
  customStyles?: IFeaturedItemCustomStyles;
}

export interface IFeaturedItemCustomStyles {
  addToCartStyle?: CSSProperties;
}

const FeaturedItem = (props: IFeaturedItem) => {
  const { item } = props;
  const { discount, imgSrc } = item;
  //controls
  const { addToCart, addToFavorites } = props;
  const { layoutStyles } = props;
  const { addToCartStyle } = props.customStyles
    ? props.customStyles
    : defaultStyle;

  return (
    <FeaturedItemLayout
      layoutStyles={layoutStyles || undefined}
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
          <Button
            style={addToCartStyle}
            type="button"
            onClick={() => addToCart(item)}
            // style={{ ...styles.defaultText, fontSize: '16px' }}
          >
            + Add To Cart
          </Button>
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

const defaultStyle: IFeaturedItemCustomStyles = {
  addToCartStyle: {
    color: 'red',
    border: '1px blue solid',
  },
};

export default FeaturedItem;
