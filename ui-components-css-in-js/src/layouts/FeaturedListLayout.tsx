import React from 'react';

export interface IProps {
  image: React.ReactNode;
  productItem: React.ReactNode;
}

export const FeaturedListLayout = (props: IProps) => {
  const { image, productItem } = props;
  return (
    <div style={styles.containerStyles}>
      <div style={styles.heroImage}>{image}</div>
      <div style={styles.featuredProduct}>{productItem}</div>
    </div>
  );
};

const styles: {
  containerStyles: React.CSSProperties;
  heroImage: React.CSSProperties;
  featuredProduct: React.CSSProperties;
} = {
  containerStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heroImage: {
    backgroundColor: 'yellow',
  },
  featuredProduct: {
    display: 'flex',
  },
};
