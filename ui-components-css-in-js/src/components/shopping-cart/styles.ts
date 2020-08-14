import { CSSProperties } from 'react';

export const styles: {
  cart: CSSProperties;
  card: CSSProperties;
  main: CSSProperties;
  summary: CSSProperties;
  error: CSSProperties;
} = {
  cart: {
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    maxHeight: '70vh',
    overflowY: 'auto',
    boxSizing: 'border-box',
    padding: '0px 30px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottom: '1px solid rgb(235, 89, 35)',
  },
  summary: {
    display: 'flex',
    marginTop: '1.2em',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
  },
};
