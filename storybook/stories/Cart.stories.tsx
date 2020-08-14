import React from 'react';
import { FeaturedItem } from '@ftsquad/ui';

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
      justifyContent: 'space-between',
      marginTop: '10px',
    }}
  >
    <FeaturedItem
      item={{ ...CartData[1], rating: '5 star' }}
      addToCart={console.log}
      addToFavorites={console.log}
    ></FeaturedItem>
    <FeaturedItem
      item={{ ...CartData[0], rating: '5 star' }}
      addToCart={console.log}
      addToFavorites={console.log}
    ></FeaturedItem>
  </div>
);
