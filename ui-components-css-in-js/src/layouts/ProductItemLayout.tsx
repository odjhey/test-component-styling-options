import React from 'react';

export interface IProps {
  img: React.ReactNode;
  description: React.ReactNode;
  price: React.ReactNode;
}

export const ProductItemLayout = (props: IProps) => {
  const { img, description, price } = props;
  return (
    <div>
      <div style={styles.card}>
        <div style={styles.img}>{img}</div>

        <div style={styles.footer}>
          <div style={styles.content}>
            <div>{description}</div>
            <div>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: {
  card: React.CSSProperties;
  img: React.CSSProperties;
  footer: React.CSSProperties;
  content: React.CSSProperties;
} = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '250px',
    height: '280px',
  },
  img: {
    display: 'flex',
    alignSelf: 'center',
    paddingTop: '20px',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    height: '35%',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  },
};
