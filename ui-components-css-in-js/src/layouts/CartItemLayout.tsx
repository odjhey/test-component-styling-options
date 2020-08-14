import React, { CSSProperties, ReactElement } from 'react';

export const CartItemLayout = (props: {
  image: ReactElement;
  description: ReactElement;
}) => {
  const { image, description } = props;
  return (
    <div style={styles.card}>
      <div style={styles.photo}>{image}</div>
      <div style={styles.description}>{description}</div>
    </div>
  );
};

const styles: {
  card: CSSProperties;
  description: CSSProperties;
  photo: CSSProperties;
} = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '380px',
  },
  description: {
    flex: 1,
  },

  photo: {
    display: 'flex',
    padding: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
};
