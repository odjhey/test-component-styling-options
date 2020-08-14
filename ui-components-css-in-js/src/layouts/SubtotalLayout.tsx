import * as React from 'react';

export const SubtotalLayout = (props: {
  subtotal: React.ReactElement;
  shippingfee: React.ReactElement;
  coupon: React.ReactElement;
  total: React.ReactElement;
  button: React.ReactElement;
  terms: React.ReactElement;
}) => {
  const { subtotal, shippingfee, coupon, total, button, terms } = props;
  return (
    <div style={styles.card}>
      <div style={styles.subtotal}>{subtotal}</div>
      <div style={styles.shippingfee}>{shippingfee}</div>
      <div style={styles.coupon}>{coupon}</div>
      <hr />
      <div style={styles.total}>{total}</div>
      <div style={styles.button}>{button}</div>
      <div>{terms}</div>
    </div>
  );
};

const styles: {
  card: React.CSSProperties;
  subtotal: React.CSSProperties;
  shippingfee: React.CSSProperties;
  coupon: React.CSSProperties;
  total: React.CSSProperties;
  button: React.CSSProperties;
} = {
  card: {
    boxSizing: 'content-box',
    width: '250px',
    height: '300px',
    padding: '10px',
    border: '2px solid gray',
    borderRadius: '8px',
  },
  subtotal: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  shippingfee: { display: 'flex', justifyContent: 'space-between' },
  coupon: { display: 'flex', justifyContent: 'space-between' },
  total: { display: 'flex', justifyContent: 'space-between' },
  button: { display: 'flex', justifyContent: 'center' },
};
