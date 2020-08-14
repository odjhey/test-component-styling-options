import React, { FC, ReactNode, CSSProperties } from 'react';

export interface ILayoutProps {
  children: Array<ReactNode>;
  containerStyle?: CSSProperties;
  contentContainerStyle?: CSSProperties;
}

const HorizantalListLayout: FC<ILayoutProps> = ({
  children,
  containerStyle,
  contentContainerStyle,
}) => {
  return (
    <div style={{ ...containerStyle }}>
      <div style={{ ...styles.container, ...contentContainerStyle }}>
        {children}
      </div>
    </div>
  );
};

const styles: { container: React.CSSProperties; item: React.CSSProperties } = {
  container: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
  },
  item: {
    display: 'inline-block',
    padding: '14px',
    textAlign: 'center',
  },
};

export default HorizantalListLayout;
