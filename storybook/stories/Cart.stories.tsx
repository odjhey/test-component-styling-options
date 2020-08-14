import React from 'react';
import { FeaturedItem } from '@ftsquad/ui';

export default {
  title: 'Cart',
};

const CartData = [
  {
    id: '001',
    name: 'Sardinas',
    availableQuantity: 10,
    price: 15,
    rating: '5 star',
    discount: 12,
    imgSrc:
      'https://cdn.shopify.com/s/files/1/2889/2216/products/Mega_Sardines_Tomato_Sauce_Regular_Easy_Open_Can_155G_800x.png?v=1523024305',
  },
  {
    id: '002',
    name: 'Noodols',
    availableQuantity: 15,
    price: 9.25,
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
    rating: '5 star',
    discount: 50,
    imgSrc:
      'https://www.homeshop.ph/image/cache/catalog/Products/Canned-Goods/Corned-Beef/Cdo-Karne-Norte-Classic-150g-500x500-product_popup.png',
  },
];

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const FeaturedItemComponent = (props?: Partial<any>) => (
  <FeaturedItem
    item={{ ...CartData[2], rating: '5 star' }}
    addToCart={console.log}
    addToFavorites={console.log}
  ></FeaturedItem>
);
