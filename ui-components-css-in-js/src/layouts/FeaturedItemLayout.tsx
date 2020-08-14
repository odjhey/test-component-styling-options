import React, { ReactNode, CSSProperties } from 'react';

export interface IFeaturedItemLayout {
  discount: ReactNode;
  image: ReactNode;
  leftElement: ReactNode;
}

const FeaturedItemLayout = (props: IFeaturedItemLayout) => {
  const { discount, image, leftElement } = props;
  return (
    <div style={styles.wrapper}>
      <div style={styles.discount}>
        <div style={styles.off}>
          {discount}%<br></br>
          Off
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.image}>{image}</div>
        <div style={styles.details}>
          <div style={styles.left}>{leftElement}</div>
        </div>
      </div>
    </div>
  );
};

const styles: {
  wrapper: CSSProperties;
  container: CSSProperties;
  image: CSSProperties;
  details: CSSProperties;
  left: CSSProperties;
  discount: CSSProperties;
  off: CSSProperties;
} = {
  wrapper: {
    width: '400px',
    height: '150px',
    overflow: 'hidden',
    background: 'white',
    margin: 'auto',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    cursor: 'pointer',
  },
  details: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  // right: {
  //   width: '30%',

  //   borderLeft: 'solid thin rgba(0,0,0,0.1)',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   cursor: 'pointer',
  // },
  discount: {
    zIndex: 9,
    background: 'rgb(235, 89, 35)',
    width: '120px',
    height: '120px',
    position: 'absolute',
    top: '-70px',
    left: '-70px',
    borderRadius: '0px 0px 200px 200px',
    transition: 'all 0.5s, border-radius 2s, top 1s',
  },
  off: {
    position: 'absolute',
    left: '75px',
    top: '75px',
    color: 'white',
    opacity: 1,
    fontSize: 'small',
  },
};

export default FeaturedItemLayout;
