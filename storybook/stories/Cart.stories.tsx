import React, { CSSProperties } from 'react';
import { FeaturedItem, IFeaturedItemLayoutStyle } from '@ftsquad/ui';

export default {
  title: 'Cart',
};

const CartData = [
  {
    id: '001',
    name: 'Dark Jeans',
    availableQuantity: 10,
    price: 670,
    sellingPrice: 88,
    rating: '5 stars',
    discount: 12,
    imgSrc:
      'https://ph-test-11.slatic.net/p/ba7ae0c611d3061378cdcc3e24d741ea.jpg_2200x2200q80.jpg',
  },
  {
    id: '002',
    name: 'Noodols',
    availableQuantity: 15,
    price: 9.25,
    sellingPrice: 88,
    rating: '5 star',
    discount: 2,
    imgSrc:
      'https://i.pinimg.com/originals/ec/dd/86/ecdd864c26b8b83968ace830c3263330.png',
  },
  {
    id: '003',
    name: 'Kurn Bip',
    availableQuantity: 55,
    price: 12.5,
    sellingPrice: 88,
    rating: '5 star',
    discount: 50,
    imgSrc:
      'https://www.homeshop.ph/image/cache/catalog/Products/Canned-Goods/Corned-Beef/Cdo-Karne-Norte-Classic-150g-500x500-product_popup.png',
  },
];

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const FeaturedItemThemed = (props?: Partial<any>) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <FeaturedItem
      item={{ ...CartData[1], rating: '5 star' }}
      addToCart={console.log}
      addToFavorites={console.log}
    ></FeaturedItem>
    <FeaturedItem
      layoutStyles={lifestyleLayoutStyle}
      customStyles={{
        addToCartStyle: {
          color: 'red',
        },
      }}
      item={{ ...CartData[0], rating: '5 star' }}
      addToCart={console.log}
      addToFavorites={console.log}
    ></FeaturedItem>
  </div>
);

const lifestyleLayoutStyle: IFeaturedItemLayoutStyle = {
  wrapper: {
    overflow: 'hidden',
    background: 'red',
    margin: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow: '-7px 8px 10px -2px rgba(196,196,196,1)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px pink dashed',
  },
  details: {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  discount: {
    zIndex: 9,
    background: 'pink',
    width: '120px',
    height: '120px',
    position: 'absolute',
    top: '-70px',
    right: '-70px',
    borderRadius: '0px 0px 200px 200px',
    transition: 'all 0.5s, border-radius 2s, top 1s',
  },
  off: {
    position: 'absolute',
    right: '75px',
    top: '75px',
    color: 'black',
    fontWeight: 'bold',
    opacity: 1,
    fontSize: 'small',
  },
};
