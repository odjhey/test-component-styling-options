import React, { Fragment } from 'react';
import { HorizantalListLayout } from '../../layouts';
import { IProduct } from 'types';
import FeaturedItem from './FeaturedItem';

const FeaturedItemList = (props: {
  items: Array<IProduct>;
  addToCart(item: IProduct): void;
  addToFavorites(item: IProduct): void;
}) => {
  const { items, addToCart, addToFavorites } = props;

  return (
    <Fragment>
      <HorizantalListLayout containerStyle={{ width: '500px' }}>
        {items.map((item: IProduct) => (
          <div style={styles.item}>
            <FeaturedItem
              item={item}
              addToCart={(item) => addToCart(item)}
              addToFavorites={(item) => addToFavorites(item)}
            ></FeaturedItem>
          </div>
        ))}
      </HorizantalListLayout>
    </Fragment>
  );
};

export default FeaturedItemList;

const styles: { item: React.CSSProperties } = {
  item: {
    display: 'inline-block',
    padding: '14px',
    textAlign: 'center',
  },
};
